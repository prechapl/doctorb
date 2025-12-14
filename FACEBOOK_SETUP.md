# Facebook Feed Setup Instructions

## Prerequisites
1. Dr. Berland needs a **Facebook Page** (not personal profile)
2. The page must be **public** and have embedding enabled
3. You need the exact Facebook page URL

## Current Status
- Facebook component is created but disabled
- Twitter feed has been removed from the About page

## To Enable Facebook Feed

### Step 1: Get the Facebook Page URL
Ask Dr. Berland for his Facebook page URL. It should look like:
- `https://www.facebook.com/DrToddBerland`
- `https://www.facebook.com/ToddBerlandMD`
- Or similar

### Step 2: Update the Component
Edit `/client/FacebookDisplay.js` and replace line 36:
```javascript
data-href="https://www.facebook.com/toddberland"
```
with the actual Facebook page URL.

### Step 3: Enable in About Page
Edit `/client/About.js` and uncomment lines 157-161:
```javascript
<Col xs={10} md={4}>
  <FacebookDisplay />
</Col>
```

### Step 4: Build and Deploy
```bash
NODE_OPTIONS=--openssl-legacy-provider npx webpack --mode=production
firebase deploy --only hosting
```

## Alternative Options

### Option 1: Simple Like/Follow Button
Instead of full timeline, just add a follow button:
```javascript
<div className="fb-like" 
     data-href="FACEBOOK_PAGE_URL" 
     data-width="" 
     data-layout="button_count" 
     data-action="like" 
     data-size="large" 
     data-share="true">
</div>
```

### Option 2: LinkedIn Feed
LinkedIn offers embeddable feeds for professional profiles:
- Better for medical professionals
- More stable API
- Professional appearance

### Option 3: Custom News Section
Instead of social media feeds:
- Create a News/Updates section
- Manually add important updates
- Full control over content
- No third-party dependencies

## Troubleshooting

### Facebook Feed Not Loading
1. **Check Page Settings**: Make sure the Facebook page allows embedding
2. **Domain Whitelist**: May need to add website domain to Facebook app settings
3. **Privacy Settings**: Page must be public
4. **Browser Extensions**: Ad blockers can block Facebook embeds

### Testing Locally
Facebook embeds often don't work on localhost. Test on the deployed site:
https://drberland-6404c.web.app

## Facebook App Setup (Optional)
For better control, create a Facebook App:
1. Go to https://developers.facebook.com
2. Create new app
3. Add website domain
4. Get App ID
5. Add to FacebookDisplay component

## Contact
If Facebook doesn't work well, consider:
- RSS feed from a blog
- Google My Business posts
- Custom CMS for updates
- Email newsletter signup instead