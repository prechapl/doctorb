# Azure to Firebase Migration Plan
## Dr. Todd Berland's Website

---

## Executive Summary

This document outlines the migration strategy for moving Dr. Todd Berland's website from Azure App Service to Firebase, which will reduce hosting costs from current Azure fees to essentially $0/month while maintaining all functionality.

**Key Benefits:**
- Cost reduction: From Azure fees to ~$0-1/month
- Improved performance with global CDN
- Automatic SSL certificates
- Simplified deployment pipeline
- Better suited for low-traffic static sites

---

## Current Architecture Analysis

### Technology Stack
- **Frontend Framework**: React 16.9 with React Router (HashRouter)
- **Backend**: Node.js/Express server
- **Database**: PostgreSQL (via Sequelize ORM)
- **Hosting**: Azure App Service
- **CI/CD**: GitHub Actions deploying to Azure
- **Package Manager**: npm with Webpack bundler

### Application Structure
```
doctorb/
├── client/          # React components (26 files)
├── server/          # Express backend
│   ├── api/         # API routes
│   └── db/          # Database models
├── public/          # Static assets (~70MB)
│   ├── bundle.js    # Webpack output (5.8MB)
│   ├── Todd-Berland-MD.mp4 (58MB)
│   ├── publications/
│   ├── brochures/
│   └── show-pics/
└── node_modules/    # Dependencies
```

### Current Features
1. **Static Content Pages**
   - About, Specialties, Publications
   - Awareness campaigns
   - Medical procedure information
   - Terms & Privacy Policy

2. **Interactive Features**
   - Contact form with email notifications
   - Google Maps integration
   - Instagram feed widget
   - Twitter display
   - Video content

3. **Backend Services**
   - Contact form submission endpoint
   - Email service (Nodemailer with Gmail SMTP)
   - User message storage in PostgreSQL

### Traffic & Performance
- **Monthly Visits**: ~80 (very low traffic)
- **Data Transfer**: Minimal
- **Database Operations**: Occasional contact form submissions

---

## Firebase Services Overview

### Services to Use
1. **Firebase Hosting** (Static Site Hosting)
   - Global CDN
   - Automatic SSL
   - Custom domain support
   - SPA routing support

2. **Cloud Functions** (Serverless Backend)
   - Replace Express.js endpoints
   - Contact form processing
   - Email sending

3. **Firestore** (NoSQL Database)
   - Replace PostgreSQL
   - Store contact messages
   - User information

4. **Firebase Storage** (Optional)
   - Large media files (video)
   - Better streaming performance

---

## Migration Strategy: Full-Stack Migration

This migration maintains all current functionality with minimal changes using Firebase's full suite of services.

**Architecture:**
```
Firebase Project
├── Hosting/         # React SPA
├── Functions/       # API endpoints
│   └── contact/     # Form handler
├── Firestore/       # Database
└── Storage/         # Media files
```

**Benefits:**
- All features preserved
- Minimal code changes required
- Easy rollback if needed
- Serverless architecture
- Auto-scaling

**Estimated Cost:** $0-1/month

---

## Task Breakdown: What I Can Handle vs What You Need to Do

### ✅ I Can Fully Handle (90% of the work):

1. **All Code Modifications**
   - Convert HashRouter to BrowserRouter
   - Update all API endpoint URLs
   - Create Cloud Functions code
   - Write database migration scripts
   - Update webpack/build configurations
   - Create new GitHub Actions workflow

2. **Firebase Project Setup**
   - Generate all Firebase configuration files
   - Write Cloud Functions for contact form
   - Set up Firestore database schema
   - Configure hosting rules and redirects

3. **Frontend/Backend Updates**
   - Optimize React build process
   - Convert Express API to serverless functions
   - Update email sending logic
   - Fix any routing issues

4. **Create Deployment Scripts**
   - Automated deployment commands
   - Testing scripts
   - Migration utilities

### ⚠️ You Need to Handle (10% - mostly clicking buttons):

1. **Account Creation & Access**
   - Create Firebase account (free)
   - Create new Firebase project in console
   - Install Firebase CLI locally: `npm install -g firebase-tools`
   - Run `firebase login` to authenticate

2. **Sensitive Credentials**
   - Copy Gmail OAuth credentials to Firebase config
   - Provide Firebase service account key for GitHub Actions
   - Keep your .env secrets safe

3. **DNS Updates**
   - Access your domain registrar
   - Update DNS records (I'll give you exact values)
   - Verify domain in Firebase console

4. **Business Decisions**
   - Decide on video hosting (YouTube vs Firebase Storage)
   - When to switch over from Azure
   - Cancel Azure subscription after migration

5. **Run Final Deployment**
   - Execute `firebase deploy` command
   - Test the contact form personally
   - Verify emails are received

### 🚀 Simplified Step-by-Step Process:

**Step 1: You (5 minutes)**
- Go to console.firebase.google.com
- Create new project called "doctorb" or "toddberland"
- Tell me the project ID

**Step 2: Me (automated)**
- Modify all code for Firebase
- Create all configuration files
- Set up everything locally

**Step 3: You (5 minutes)**
```bash
npm install -g firebase-tools
firebase login
firebase init  # I'll tell you what to select
```

**Step 4: Me (automated)**
- Finalize all code changes
- Create deployment scripts
- Prepare everything

**Step 5: You (10 minutes)**
- Run deployment: `npm run deploy:firebase`
- Add custom domain in Firebase console
- Update DNS records

**Step 6: Together**
- Test everything works
- Monitor for 24 hours
- Cancel Azure

The hardest part for you is just creating the Firebase project and updating DNS. Everything else is code that I can handle. Should take you less than 30 minutes of actual work spread across a few days.

---

## Implementation Plan

### Phase 1: Environment Setup (Day 1)

#### 1.1 Create Firebase Project
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init

# Select services:
# - Hosting
# - Functions (if Option A)
# - Firestore (if Option A)
```

#### 1.2 Configure Firebase Settings
```json
// firebase.json
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  "functions": {
    "source": "functions"
  }
}
```

### Phase 2: Frontend Modifications (Day 1-2)

#### 2.1 Update React Router
```javascript
// Change from HashRouter to BrowserRouter
import { BrowserRouter } from 'react-router-dom';

// Update App.js
<BrowserRouter>
  {/* routes */}
</BrowserRouter>
```

#### 2.2 Update API Endpoints
```javascript
// Update API calls to Firebase Functions URLs
const API_BASE = process.env.REACT_APP_API_URL ||
  'https://us-central1-PROJECT-ID.cloudfunctions.net/api';
```

#### 2.3 Optimize Build
```bash
# Build production bundle
npm run build

# Ensure output is in public/ directory
```

### Phase 3: Backend Migration (Day 2-3)

#### 3.1 Create Cloud Functions
```javascript
// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const express = require('express');

admin.initializeApp();
const app = express();

// Contact form endpoint
app.post('/api/users/messages', async (req, res) => {
  const { email, firstName, lastName, phone, message } = req.body;

  // Store in Firestore
  const db = admin.firestore();
  await db.collection('messages').add({
    email,
    firstName,
    lastName,
    phone,
    message,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  });

  // Send email
  await sendEmail(req.body);

  res.status(201).json({ success: true });
});

exports.api = functions.https.onRequest(app);
```

#### 3.2 Migrate Database
```javascript
// Migration script for PostgreSQL to Firestore
// Export existing data from PostgreSQL
// Import to Firestore collections
```

#### 3.3 Configure Environment Variables
```bash
# Set Firebase Functions config
firebase functions:config:set \
  gmail.client_id="YOUR_CLIENT_ID" \
  gmail.private_key="YOUR_PRIVATE_KEY"
```

### Phase 4: Media Optimization (Day 3)

#### 4.1 Video Handling Options

**Option 1: YouTube Embed**
- Upload video to YouTube
- Embed in React component
- Best for performance

**Option 2: Firebase Storage**
```javascript
// Upload to Storage
const storage = admin.storage();
await storage.bucket().upload('Todd-Berland-MD.mp4');

// Get streaming URL
const url = await storage.bucket()
  .file('Todd-Berland-MD.mp4')
  .getSignedUrl({ action: 'read', expires: '03-01-2500' });
```

**Option 3: External CDN**
- Use Cloudinary or similar
- Better video optimization

### Phase 5: Deployment & Testing (Day 4)

#### 5.1 Deploy to Firebase
```bash
# Deploy everything
firebase deploy

# Or deploy individually
firebase deploy --only hosting
firebase deploy --only functions
```

#### 5.2 Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form submits
- [ ] Emails are received
- [ ] Video plays properly
- [ ] Maps display
- [ ] Mobile responsive
- [ ] SSL certificate active

### Phase 6: DNS Migration (Day 5)

#### 6.1 Configure Custom Domain
```bash
# In Firebase Console
# Hosting > Add custom domain
# Follow DNS verification steps
```

#### 6.2 Update DNS Records
```
Type  Name    Value
A     @       Firebase IP 1
A     @       Firebase IP 2
CNAME www     PROJECT-ID.web.app
```

#### 6.3 Wait for Propagation
- Usually 24-48 hours
- Keep Azure running during transition

### Phase 7: Cleanup (Day 6-7)

#### 7.1 Update GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Firebase
on:
  push:
    branches: [master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
```

#### 7.2 Decommission Azure Resources
- Export any remaining data
- Cancel Azure subscription
- Remove Azure deployment files

---

## Cost Analysis

### Current Azure Costs
- App Service Plan: ~$10-50/month
- Database: Additional costs
- Bandwidth: Usage-based

### Firebase Projected Costs

#### Free Tier Limits
- **Hosting**: 10GB storage, 360MB/day transfer
- **Functions**: 2M invocations/month, 400K GB-seconds
- **Firestore**: 1GB storage, 50K reads/day, 20K writes/day
- **Storage**: 5GB storage, 1GB/day download

#### Your Usage Estimate
- **Hosting**: ~100MB storage, <100MB/day transfer ✓ FREE
- **Functions**: ~100 invocations/month ✓ FREE
- **Firestore**: <100 documents ✓ FREE
- **Storage**: 58MB video ✓ FREE

**Total Monthly Cost: $0**

---

## Risk Mitigation

### Potential Issues & Solutions

1. **Email Delivery**
   - Issue: SMTP might be blocked in Functions
   - Solution: Use SendGrid API instead

2. **Cold Starts**
   - Issue: Functions may have 1-3s cold start
   - Solution: Keep functions warm or use min instances

3. **Video Loading**
   - Issue: Large video file slow to load
   - Solution: Use YouTube or video CDN

4. **Form Spam**
   - Issue: No backend validation
   - Solution: Add reCAPTCHA

5. **SEO Impact**
   - Issue: URL structure changes
   - Solution: Set up proper redirects

---

## Rollback Plan

If issues arise:

1. **Immediate Rollback**
   - Point DNS back to Azure
   - Azure app remains running

2. **Partial Rollback**
   - Keep static on Firebase
   - Point API to Azure backend

3. **Data Recovery**
   - Export Firestore data
   - Restore PostgreSQL backup

---

## Development Branch Strategy (Zero-Risk Approach)

You can complete 95% of the migration on a development branch without any impact on production.

### What Can Be Done on Dev Branch (95%)

#### ✅ Fully Safe on Dev Branch:

1. **All Code Changes**
   - React Router conversion (HashRouter → BrowserRouter)
   - API endpoint updates
   - Cloud Functions creation
   - Build configuration updates
   - Frontend optimizations

2. **Firebase Project Setup**
   - Create Firebase project (completely separate)
   - Write all Functions code
   - Set up Firestore schema
   - Configure all Firebase files

3. **Testing & Deployment**
   - Deploy to Firebase's preview channels
   - Test at Firebase-provided URLs like `doctorb-preview-abc123.web.app`
   - Full end-to-end testing including contact form
   - Performance testing

4. **GitHub Actions**
   - New workflow files for Firebase
   - Can run parallel to Azure workflows
   - Won't affect current deployments

#### ⚠️ Only Production Changes (5%):

1. **DNS Records** (Final cutover only)
   - Keep pointing to Azure until ready
   - Switch takes 5 minutes when ready

2. **Environment Variables** (If shared)
   - Gmail OAuth credentials
   - But you can use test credentials on dev

3. **Azure Shutdown** (Very last step)
   - Keep running until Firebase is proven

### Recommended Development Workflow

```bash
# 1. Create dev branch
git checkout -b firebase-migration

# 2. Do ALL development work
# - Code changes
# - Firebase setup
# - Testing

# 3. Deploy to Firebase staging
firebase hosting:channel:deploy preview

# 4. Test at preview URL
# https://doctorb--preview-xyz.web.app

# 5. When perfect, merge to master
git checkout master
git merge firebase-migration

# 6. Deploy to Firebase production
firebase deploy --only hosting,functions

# 7. Update DNS (only production change)

# 8. After 48 hours stable, cancel Azure
```

### Parallel Running Strategy

You can run **both Azure and Firebase simultaneously** for as long as needed:

1. **Azure**: toddberland.com (current production)
2. **Firebase**: doctorb.web.app or preview URLs (testing)
3. **Test Firebase thoroughly** with real-world scenarios
4. **When ready**, just flip DNS records

### Zero-Risk Testing Timeline

**Week 1-2: Development**
- All work on dev branch
- Deploy to Firebase preview channels
- No production impact

**Week 3: Staging**
- Firebase running at `doctorb.firebaseapp.com`
- Full testing with real data
- Azure still serving production

**Week 4: Soft Launch**
- Optionally point subdomain like `beta.toddberland.com` to Firebase
- Monitor for issues
- Get user feedback

**Week 5: Cutover**
- Update main DNS records
- Keep Azure running as backup

**Week 6+: Cleanup**
- Confirm everything stable
- Cancel Azure subscription

### Benefits of This Approach

- **Zero downtime** during migration
- **Zero risk** to current production site
- **Full rollback capability** - just change DNS back
- **Complete testing** of all functionality before cutover
- **Parallel operation** for maximum safety
- **Gradual migration** at your own pace

The only irreversible step is canceling Azure, which you'd do weeks after confirming Firebase works perfectly.

---

## Timeline Summary

- **Day 1**: Setup Firebase, modify frontend
- **Day 2-3**: Migrate backend
- **Day 4**: Deploy and test
- **Day 5**: DNS migration
- **Day 6-7**: Monitor and cleanup

**Total Duration**: 1 week with buffer (but can extend as needed using dev branch strategy)

---

## Maintenance Considerations

### Monthly Tasks
- Monitor usage metrics
- Check email delivery
- Review error logs

### Annual Tasks
- Update dependencies
- Renew domain
- Review security rules

---

## Conclusion

Migrating from Azure to Firebase will:
- Reduce costs by 95-100%
- Improve global performance
- Simplify maintenance
- Better suit the site's actual needs

The Full-Stack Migration approach preserves all functionality while achieving near-zero costs. Using the development branch strategy, you can complete the entire migration with zero risk to your production site.

---

## Appendix

### Useful Commands
```bash
# Firebase CLI
firebase init
firebase deploy
firebase serve
firebase functions:log

# Build & Test
npm run build
npm test
npm run start:dev
```

### Resources
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Pricing Calculator](https://firebase.google.com/pricing)
- [Migration Guide](https://firebase.google.com/docs/hosting/migrating)
- [Cloud Functions Examples](https://github.com/firebase/functions-samples)

### Contact for Questions
- Repository: https://github.com/prechapl/doctorb
- Current Site: toddberland.com