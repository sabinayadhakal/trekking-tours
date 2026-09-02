import "server-only";

import { getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const APP_NAME = "himkala-auth-verifier";

function getAdminApp() {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  if (!projectId) throw new Error("Firebase project ID is not configured.");
  return getApps().find((app) => app.name === APP_NAME) ?? initializeApp({ projectId }, APP_NAME);
}

export function getFirebaseAdminAuth() {
  return getAuth(getAdminApp());
}
