# Firebase Migration - Manual Steps Checklist

## ✅ Completed (Already Done)
- Firebase project created (`drberland-6404c`)
- Firebase Functions deployed with contact form endpoint
- Gmail OAuth secrets configured in Firebase
- Video uploaded to Firebase Storage (but not displayed per client request)
- Development branch (`firebase-migration`) created

## 📋 Remaining Manual Steps

### 1. Build and Deploy Latest Changes
```bash
npm run build
firebase deploy --project drberland-6404c
```

### 2. Test Core Functionality
- [ ] Visit: https://drberland-6404c.web.app
- [ ] Test navigation (all links work with hash routing: /#/about, /#/contact, etc.)
- [ ] Test contact form submission
- [ ] Verify email is received when form is submitted
- [ ] Check all pages load correctly

### 3. Set Up Custom Domain
1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Enter: `toddberland.com` and `www.toddberland.com`
4. Firebase will provide DNS records
5. Update DNS at your domain registrar with provided records
6. Wait for SSL certificate (usually 24-48 hours)

### 4. Environment Variables for Production
Create `.env` in root directory:
```
REACT_APP_API_URL=https://us-central1-drberland-6404c.cloudfunctions.net
```

### 5. Merge to Master (After Testing)
```bash
git add .
git commit -m "Migrate to Firebase hosting and functions"
git push origin firebase-migration

# Merge to master (or just continue using firebase-migration branch)
```

### 6. Monitor Initial Costs
- Check Firebase Console > Usage
- Set up budget alerts in Google Cloud Console
- Expected: <$1/month with your traffic

### 7. Shut Down Azure Resources
After confirming everything works:
1. Download any Azure data backups needed
2. Stop Azure App Service
3. Delete Azure resources to stop billing

## 🚨 Important Notes

1. **Contact Form Testing**: The form uses Gmail OAuth to send emails. Test thoroughly.

2. **Database**: Using Firestore now (not PostgreSQL). All new submissions go there.

3. **Video Files**: The compressed video is in Firebase Storage but not displayed. The video files in `/public` can be deleted if not needed.

4. **Rollback Plan**: Keep Azure running for 1-2 weeks until confident. The `master` branch still has Azure deployment if needed.

5. **DNS Propagation**: When switching DNS, there may be 24-48 hours of inconsistent access. Consider doing this during low-traffic period.

## 📞 Support Resources
- Firebase Support: https://firebase.google.com/support
- Firebase Status: https://status.firebase.google.com
- Your project console: https://console.firebase.google.com/project/drberland-6404c

## Current URLs
- **Firebase Hosting**: https://drberland-6404c.web.app
- **Firebase Functions API**: https://us-central1-drberland-6404c.cloudfunctions.net/api
- **Current Azure Site**: toddberland.com (until DNS switch)