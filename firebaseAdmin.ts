import admin from "firebase-admin";
import { getApps, initializeApp } from "firebase-admin/app";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

if (typeof window === 'undefined' && !getApps().length) {
  initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDB = admin.firestore();

export { adminDB };