const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

admin.initializeApp();
const db = admin.firestore();

const formatUserMessageForEmail = (requestBody) => {
    const simpleMessage = `Automated message from App Age Technologies\n\ntoddberland.com - Contact Form Response\n\nFirst Name`;
    const htmlMessage = `
    <html>
    <body>
    <p><span style="color: #808080;">Automated message from App Age Technologies</span></p>
    <p><strong><span>toddberland.com - Contact Form Response:</span></strong><br>
    <span>First Name: ${requestBody.firstName}</span><br>
    <span>Last Name: ${requestBody.lastName}</span><br>
    <span>Phone: ${requestBody.phone}</span><br>
    <span>Email: ${requestBody.email}</span></p>
    <p><span>Message: ${requestBody.message}</span></p>
    </div>
    </body>
    </html>
    `;
    return {html: htmlMessage, simpleText: simpleMessage, subject: 'toddberland.com - Contact Form Response'}
};

const emailContactMessage = async (messageObj, replyToEmail) => {
    // Much simpler setup using App Password
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'toddberland@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD // This will be the 16-character app password
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
        secrets: ['GMAIL_APP_PASSWORD'], // Only need one secret now
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