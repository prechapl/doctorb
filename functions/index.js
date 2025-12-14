const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

admin.initializeApp();
const db = admin.firestore();

const formatUserMessageForEmail = (requestBody) => {
    const simpleMessage = `toddberland.com - Contact Form Response\n\nFirst Name: ${requestBody.firstName}\nLast Name: ${requestBody.lastName}\nPhone: ${requestBody.phone}\nEmail: ${requestBody.email}\n\nMessage: ${requestBody.message}`;
    const htmlMessage = `
    <html>
    <body>
    <p><strong><span>toddberland.com - Contact Form Response</span></strong></p>
    <p>
    <span><strong>First Name:</strong> ${requestBody.firstName}</span><br>
    <span><strong>Last Name:</strong> ${requestBody.lastName}</span><br>
    <span><strong>Phone:</strong> ${requestBody.phone}</span><br>
    <span><strong>Email:</strong> ${requestBody.email}</span>
    </p>
    <p><strong>Message:</strong><br>${requestBody.message}</p>
    </body>
    </html>
    `;
    return {html: htmlMessage, simpleText: simpleMessage, subject: 'toddberland.com - Contact Form Response'}
};

const emailContactMessage = async (messageObj, replyToEmail) => {
    // Debug: Check if password is loaded
    console.log('Gmail App Password present:', !!process.env.GMAIL_APP_PASSWORD);
    console.log('Password length:', process.env.GMAIL_APP_PASSWORD ? process.env.GMAIL_APP_PASSWORD.length : 0);
    
    // Using Gmail App Password with explicit SMTP settings
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'toddberland@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        const mailResponse = await transporter.sendMail({
            from: 'toddberland@gmail.com',
            to: 'toddberland@gmail.com',
            replyTo: replyToEmail,
            subject: messageObj.subject,
            html: messageObj.html
        });
        return mailResponse;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

exports.api = functions
    .runWith({
        secrets: ['GMAIL_APP_PASSWORD'],
        memory: '256MB',
        timeoutSeconds: 60
    })
    .https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.path === '/users/messages' && req.method === 'POST') {
            try {
                const { email, firstName, lastName, phone, message } = req.body;

                // Check if user exists
                const usersRef = db.collection('users');
                const userQuery = await usersRef.where('email', '==', email).limit(1).get();

                let userId;
                if (userQuery.empty) {
                    // Create new user
                    const newUser = await usersRef.add({
                        email,
                        firstName,
                        lastName,
                        phone,
                        createdAt: admin.firestore.FieldValue.serverTimestamp()
                    });
                    userId = newUser.id;
                } else {
                    userId = userQuery.docs[0].id;
                }

                // Create contact message
                const contactMessage = await db.collection('contactMessages').add({
                    userId,
                    message,
                    createdAt: admin.firestore.FieldValue.serverTimestamp()
                });

                // Send email
                await emailContactMessage(formatUserMessageForEmail(req.body), email);

                res.status(201).json({
                    id: contactMessage.id,
                    userId,
                    message
                });
            } catch (error) {
                console.error('Error processing contact message:', error);
                res.status(500).json({ error: 'Failed to process contact message' });
            }
        } else {
            res.status(404).json({ error: 'Not found' });
        }
    });
});