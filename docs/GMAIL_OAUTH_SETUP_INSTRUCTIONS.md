# Gmail OAuth Setup Instructions for Dr. Todd Berland

## Overview
The contact form on your website needs to send emails through your Gmail account (toddberland@gmail.com). This requires OAuth authentication which has expired and needs to be refreshed.

## Option 1: Quick Fix - Use App Password (Recommended)
This is the simplest solution that avoids OAuth complexity:

1. **Go to your Google Account settings:**
   - Visit: https://myaccount.google.com/security
   - Sign in with toddberland@gmail.com

2. **Enable 2-Step Verification** (if not already enabled):
   - Click on "2-Step Verification"
   - Follow the setup process

3. **Generate an App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Enter name: "Todd Berland Website Contact Form"
   - Click "Generate"
   - **COPY THE 16-CHARACTER PASSWORD** (looks like: xxxx xxxx xxxx xxxx)

4. **Send the password to your developer** to update the email configuration

## Option 2: Fix OAuth (More Complex)
If you prefer to keep using OAuth:

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/
   - Make sure you're logged in with toddberland@gmail.com
   - Select the project (should be something like "Todd Berland Website" or similar)

2. **Navigate to OAuth consent screen:**
   - In the left menu, go to "APIs & Services" > "OAuth consent screen"
   - Make sure the app is in "Production" status (not "Testing")
   - Add toddberland@gmail.com to "Test users" if in testing mode

3. **Check OAuth 2.0 Client IDs:**
   - Go to "APIs & Services" > "Credentials"
   - Find the OAuth 2.0 Client ID being used
   - Click on it to edit
   - Add `http://localhost` to Authorized redirect URIs
   - Save

4. **Generate new refresh token:**
   - Your developer will need to run a script after you complete the above steps
   - You'll need to authorize the application again

## Option 3: Alternative Email Service
Consider using a dedicated email service instead of Gmail:

1. **SendGrid** (free tier available)
2. **Mailgun** (free tier available)
3. **Amazon SES** (pay as you go)

These services are designed for transactional emails and are more reliable than Gmail OAuth.

## Current Issue
The error message indicates the OAuth refresh token has expired or the OAuth client configuration has changed. Gmail OAuth tokens can expire if:
- The app hasn't been used in 6 months
- The OAuth consent screen is in "Testing" mode (tokens expire after 7 days)
- Google security policies have changed
- The OAuth client has been modified

## Recommendation
**I strongly recommend Option 1 (App Password)** as it's:
- Simpler to set up
- More reliable
- Doesn't expire
- Easier to troubleshoot

Once you complete Option 1 and provide the app password, your developer can update the email configuration to use it instead of OAuth.