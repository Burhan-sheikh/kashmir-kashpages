# Firebase Setup Guide

Complete guide to setting up Firebase for Kashpages.

## Prerequisites

- Firebase account
- Firebase CLI installed (`npm install -g firebase-tools`)
- Blaze plan activated (required for Functions)

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add project"
3. Name: `kashpages-production`
4. Enable Google Analytics (optional)
5. Create project

## Step 2: Enable Services

### Authentication

1. Navigate to **Authentication** → **Sign-in method**
2. Enable:
   - **Email/Password**
   - **Google** (configure OAuth consent screen)

### Firestore Database

1. Navigate to **Firestore Database**
2. Click **Create database**
3. Start in **production mode**
4. Choose location (asia-south1 for India)

### Realtime Database

1. Navigate to **Realtime Database**
2. Click **Create database**
3. Start in **locked mode**

### Storage

1. Navigate to **Storage**
2. Click **Get started**
3. Start in **production mode**
4. Choose same location as Firestore

### Functions

1. Navigate to **Functions**
2. Upgrade to **Blaze plan**
3. Note: Functions deploy via CLI

## Step 3: Initialize Firebase CLI

```bash
# Login to Firebase
firebase login

# Initialize project
firebase init

# Select:
# - Firestore
# - Storage
# - Functions (Node.js)
# - Hosting (optional)

# Choose existing project: kashpages-production
```

## Step 4: Deploy Security Rules

### Firestore Rules

Create `firestore.rules`:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isSignedIn() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isSignedIn() && request.auth.uid == userId;
    }
    
    function isAdmin() {
      return isSignedIn() && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Users collection
    match /users/{userId} {
      allow read: if isSignedIn();
      allow create: if isSignedIn() && request.auth.uid == userId;
      allow update: if isOwner(userId) || isAdmin();
      allow delete: if isAdmin();
    }
    
    // Pages collection
    match /pages/{pageId} {
      allow read: if resource.data.status == 'published' || 
                     isOwner(resource.data.userId) || 
                     isAdmin();
      allow create: if isSignedIn();
      allow update: if isOwner(resource.data.userId) || isAdmin();
      allow delete: if isOwner(resource.data.userId) || isAdmin();
    }
    
    // Templates collection
    match /templates/{templateId} {
      allow read: if true;
      allow write: if isAdmin();
    }
    
    // Subscriptions collection
    match /subscriptions/{subId} {
      allow read: if isOwner(resource.data.userId) || isAdmin();
      allow write: if isAdmin();
    }
    
    // Domains collection
    match /domains/{domainId} {
      allow read: if isOwner(resource.data.userId) || isAdmin();
      allow create: if isSignedIn();
      allow update, delete: if isOwner(resource.data.userId) || isAdmin();
    }
    
    // Admin collections
    match /admin/{document=**} {
      allow read, write: if isAdmin();
    }
  }
}
```

Deploy:
```bash
firebase deploy --only firestore:rules
```

### Storage Rules

Create `storage.rules`:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    
    // User uploads
    match /users/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId
                   && request.resource.size < 5 * 1024 * 1024 // 5MB limit
                   && request.resource.contentType.matches('image/.*');
    }
    
    // Page assets
    match /pages/{pageId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Templates
    match /templates/{allPaths=**} {
      allow read: if true;
      allow write: if false; // Admin only via Functions
    }
  }
}
```

Deploy:
```bash
firebase deploy --only storage:rules
```

## Step 5: Initialize Collections

Run this script to create initial collections:

```bash
node scripts/init-firebase.js
```

Or manually create in Firestore Console:

### Collections to Create

1. **users** - User profiles
2. **pages** - User-created pages
3. **templates** - Page templates
4. **subscriptions** - Subscription data
5. **domains** - Custom domains
6. **analytics** - Page analytics
7. **revisions** - Page revision history
8. **admin/actions** - Admin audit log
9. **admin/stats** - Platform statistics

## Step 6: Configure Environment Variables

### Get Firebase Config

1. Project Settings → General
2. Scroll to "Your apps"
3. Click "Web app" icon
4. Copy configuration object

### Add to `.env.local`

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=kashpages-production.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=kashpages-production
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=kashpages-production.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1234567890
NEXT_PUBLIC_FIREBASE_APP_ID=1:1234567890:web:abcdef
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://kashpages-production.firebaseio.com
```

### Get Service Account (for Admin SDK)

1. Project Settings → Service accounts
2. Click "Generate new private key"
3. Download JSON file
4. Extract values for `.env.local`:

```env
FIREBASE_ADMIN_PROJECT_ID=kashpages-production
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk@kashpages-production.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_ADMIN_STORAGE_BUCKET=kashpages-production.appspot.com
```

## Step 7: Deploy Functions

```bash
cd functions
npm install
cd ..
firebase deploy --only functions
```

## Step 8: Set up Indexes

Create `firestore.indexes.json`:

```json
{
  "indexes": [
    {
      "collectionGroup": "pages",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "userId", "order": "ASCENDING" },
        { "fieldPath": "status", "order": "ASCENDING" },
        { "fieldPath": "updatedAt", "order": "DESCENDING" }
      ]
    },
    {
      "collectionGroup": "pages",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "status", "order": "ASCENDING" },
        { "fieldPath": "createdAt", "order": "DESCENDING" }
      ]
    }
  ],
  "fieldOverrides": []
}
```

Deploy:
```bash
firebase deploy --only firestore:indexes
```

## Step 9: Verify Setup

1. **Test Authentication**
   - Sign up new user
   - Verify user document created

2. **Test Firestore**
   - Create test page
   - Read/Update/Delete operations

3. **Test Storage**
   - Upload test image
   - Verify public access

4. **Test Functions**
   - Check Functions logs
   - Verify triggers working

## Troubleshooting

### Authentication Issues
- Verify OAuth consent screen configured
- Check authorized domains in Firebase Console

### Firestore Permission Denied
- Deploy security rules
- Check user authentication status
- Verify rule functions

### Storage Upload Fails
- Check file size (5MB limit)
- Verify content type (images only)
- Deploy storage rules

### Functions Not Deploying
- Verify Blaze plan active
- Check Node.js version (18+)
- Review function logs for errors

## Production Checklist

- [ ] All services enabled
- [ ] Security rules deployed
- [ ] Indexes created
- [ ] Functions deployed
- [ ] Environment variables set
- [ ] Service account secured
- [ ] Backup strategy configured
- [ ] Monitoring alerts set up
- [ ] Cost alerts configured

## Support

For Firebase-specific issues:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/firebase)
- Firebase Support (Blaze plan)