const { google } = require('googleapis');
const readline = require('readline');

const CLIENT_ID = '113405305473-6qo16j19v00mdb4lj93aeu7iunk6aiet.apps.googleusercontent.com';
const CLIENT_SECRET = 'jiEWki7y6RAheMNHfBpLzg7n';
const REDIRECT_URL = 'urn:ietf:wg:oauth:2.0:oob';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);

// Generate the url that will be used for authorization
const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/gmail.send'
});

console.log('=====================================================');
console.log('Gmail OAuth Token Generator');
console.log('=====================================================\n');
console.log('1. Open this URL in your browser:\n');
console.log(authorizeUrl);
console.log('\n2. Sign in with the toddberland@gmail.com account');
console.log('3. Grant permissions');
console.log('4. Copy the authorization code\n');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the authorization code here: ', async (code) => {
    try {
        const { tokens } = await oauth2Client.getToken(code);
        
        console.log('\n=====================================================');
        console.log('SUCCESS! Here are your tokens:');
        console.log('=====================================================\n');
        console.log('Access Token:', tokens.access_token);
        console.log('\nRefresh Token:', tokens.refresh_token);
        console.log('\n=====================================================');
        console.log('UPDATE THE FIREBASE SECRET:');
        console.log('=====================================================\n');
        console.log(`echo -n "${tokens.refresh_token}" | firebase functions:secrets:set GMAIL_REFRESH_TOKEN`);
        console.log('\n=====================================================');
        
        rl.close();
    } catch (error) {
        console.error('Error getting tokens:', error.message);
        rl.close();
    }
});