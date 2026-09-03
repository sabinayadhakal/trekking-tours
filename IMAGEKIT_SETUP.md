# ImageKit setup

The admin uploads images directly to ImageKit. A protected Next.js API route creates a short-lived upload signature only after validating the existing Firebase login token. Images never pass through Firebase Storage or Firestore.

## 1. ImageKit credentials

In the ImageKit dashboard, open **Developer options > API keys** and add these values to `.env`:

```env
IMAGEKIT_PUBLIC_KEY=public_...
IMAGEKIT_PRIVATE_KEY=private_...
```

Never prefix the private key with `NEXT_PUBLIC_`.

## 2. Optional upload allowlist

The login token is verified using `NEXT_PUBLIC_FIREBASE_PROJECT_ID`; no Firebase service-account JSON or private key is needed. If Firebase Authentication contains accounts that should not upload, restrict the endpoint by UID, email, or both:

```env
IMAGEKIT_ADMIN_UIDS=first-firebase-uid,second-firebase-uid
IMAGEKIT_ADMIN_EMAILS=admin@example.com
```

When both variables are empty, any account that can sign in through the manually managed Firebase Authentication user list may upload. The public site reads the returned ImageKit URL anonymously and does not need a key.

## 3. Restart the application

Environment variables are loaded when Next.js starts:

```bash
npm run dev
```

After signing in at `/admin/login`, the trekking hero, trekking gallery, blog hero and blog rich-text editor will offer ImageKit uploads. The returned absolute CDN URL is written into the form and then stored in Firestore when the content is saved.
