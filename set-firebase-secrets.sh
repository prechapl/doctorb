#!/bin/bash

# Script to set Gmail OAuth credentials as Firebase secrets using Secret Manager
# Run this script after logging in with: firebase login

echo "Setting Gmail OAuth credentials as Firebase secrets..."
echo "This uses Google Cloud Secret Manager (modern approach)"
echo ""

# Set secrets using the modern Firebase CLI approach
echo "Setting GMAIL_CLIENT_ID..."
echo -n "113405305473-6qo16j19v00mdb4lj93aeu7iunk6aiet.apps.googleusercontent.com" | firebase functions:secrets:set GMAIL_CLIENT_ID --project drberland-6404c

echo "Setting GMAIL_CLIENT_SECRET..."
echo -n "jiEWki7y6RAheMNHfBpLzg7n" | firebase functions:secrets:set GMAIL_CLIENT_SECRET --project drberland-6404c

echo "Setting GMAIL_REFRESH_TOKEN..."
echo -n "1/aTT4c-MGY-Kc3n8U0s9XVMOmPojP6vJMXaCuh7CPRe0GAviQHJbcl-Gjay9I9ZFI" | firebase functions:secrets:set GMAIL_REFRESH_TOKEN --project drberland-6404c

echo ""
echo "Secrets set! To verify, run:"
echo "firebase functions:secrets:access GMAIL_CLIENT_ID --project drberland-6404c"
echo ""
echo "To list all secrets:"
echo "firebase functions:secrets:list --project drberland-6404c"
echo ""
echo "Note: You'll need to redeploy functions for secrets to take effect:"
echo "firebase deploy --only functions --project drberland-6404c"