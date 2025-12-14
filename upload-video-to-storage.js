const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Initialize admin SDK with your service account
// You'll need to download this from Firebase Console > Project Settings > Service Accounts
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'drberland-6404c.appspot.com'
});

const bucket = admin.storage().bucket();

async function uploadVideo() {
  const videoPath = path.join(__dirname, 'public', 'Todd-Berland-MD.mp4');
  const destination = 'videos/Todd-Berland-MD.mp4';

  try {
    console.log('Uploading video to Firebase Storage...');

    await bucket.upload(videoPath, {
      destination: destination,
      metadata: {
        contentType: 'video/mp4',
        cacheControl: 'public, max-age=31536000', // Cache for 1 year
      }
    });

    // Make the file publicly accessible
    const file = bucket.file(destination);
    await file.makePublic();

    // Get the public URL
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;

    console.log('✅ Video uploaded successfully!');
    console.log('Public URL:', publicUrl);
    console.log('\nAlternative URL format:');
    console.log(`https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(destination)}?alt=media`);

  } catch (error) {
    console.error('Error uploading video:', error);
  }
}

uploadVideo();