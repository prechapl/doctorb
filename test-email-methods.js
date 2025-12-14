const nodemailer = require('nodemailer');

// Test different authentication methods
async function testEmailMethods() {
    console.log('Testing Gmail authentication methods...\n');
    
    // Method 1: App Password with port 465 (SSL)
    console.log('1. Testing with port 465 (SSL)...');
    try {
        const transporter1 = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // SSL
            auth: {
                user: 'toddberland@gmail.com',
                pass: 'yfxpsmopwvfzwtue'
            }
        });
        await transporter1.verify();
        console.log('✅ Port 465 works!\n');
    } catch (error) {
        console.log('❌ Port 465 failed:', error.message, '\n');
    }
    
    // Method 2: App Password with port 587 (TLS)
    console.log('2. Testing with port 587 (TLS)...');
    try {
        const transporter2 = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // TLS
            auth: {
                user: 'toddberland@gmail.com',
                pass: 'yfxpsmopwvfzwtue'
            }
        });
        await transporter2.verify();
        console.log('✅ Port 587 works!\n');
    } catch (error) {
        console.log('❌ Port 587 failed:', error.message, '\n');
    }
    
    // Method 3: Using 'service' shorthand
    console.log('3. Testing with service: gmail...');
    try {
        const transporter3 = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'toddberland@gmail.com',
                pass: 'yfxpsmopwvfzwtue'
            }
        });
        await transporter3.verify();
        console.log('✅ Service gmail works!\n');
    } catch (error) {
        console.log('❌ Service gmail failed:', error.message, '\n');
    }
    
    // Method 4: With requireTLS
    console.log('4. Testing with requireTLS...');
    try {
        const transporter4 = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'toddberland@gmail.com',
                pass: 'yfxpsmopwvfzwtue'
            },
            tls: {
                ciphers: 'SSLv3'
            }
        });
        await transporter4.verify();
        console.log('✅ RequireTLS works!\n');
    } catch (error) {
        console.log('❌ RequireTLS failed:', error.message, '\n');
    }
    
    console.log('\n==============================================');
    console.log('TROUBLESHOOTING STEPS FOR TODD:');
    console.log('==============================================\n');
    console.log('1. Go to: https://myaccount.google.com/security');
    console.log('2. Make sure 2-Step Verification is ON');
    console.log('3. Go to: https://myaccount.google.com/apppasswords');
    console.log('4. You should see the app password you created listed there');
    console.log('5. If not, create a new one:');
    console.log('   - App: Mail');
    console.log('   - Device: Other (Custom name)');
    console.log('   - Name: "Todd Berland Website"');
    console.log('6. Copy the 16-character password (with or without spaces)');
    console.log('7. Click "Done" to save it\n');
    console.log('Note: The password will look like: xxxx xxxx xxxx xxxx');
    console.log('==============================================\n');
}

testEmailMethods();