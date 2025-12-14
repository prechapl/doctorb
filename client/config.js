// For local development, use the local server
// For production, use the Firebase Functions URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 
  (window.location.hostname === 'localhost' 
    ? '' // Use local server for now, can switch to emulator: 'http://localhost:5001/drberland-6404c/us-central1/api'
    : 'https://us-central1-drberland-6404c.cloudfunctions.net/api');

export default {
  API_BASE_URL
};