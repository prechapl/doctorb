const nodemailer = require('nodemailer');

// Test the Gmail App Password locally
async function testEmail() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'toddberland@gmail.com',
            pass: 'rawvilofmlrzopch' // New app password without spaces
        }
    });

    try {
        // Verify connection
        await transporter.verify();
        console.log('✅ Server is ready to send emails');
        
        // Send test email
        const result = await transporter.sendMail({
            from: 'toddberland@gmail.com',
            to: 'toddberland@gmail.com',
            subject: 'Test Email from Website',
            text: 'This is a test email to verify the app password works.'
        });
        
        console.log('✅ Test email sent successfully:', result.messageId);
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error('Full error:', error);
    }
}

testEmail();