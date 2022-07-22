import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  onIdTokenChanged,
  onAuthStateChanged,
} from 'firebase/auth';

export const useFirebase = () => {
  const [app, setApp] = useState();
  const [analytics, setAnalytics] = useState();
  const [db, setDB] = useState();
  const [auth, setAuth] = useState();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };

    setApp(initializeApp(firebaseConfig));
    if (!app) return;
    setAnalytics(getAnalytics(app));
    setDB(getFirestore(app));
    setAuth(getAuth(app));
  }, [app]);

  return {
    app,
    analytics,
    db,
    auth,
    GoogleAuthProvider,
    onIdTokenChanged,
    onAuthStateChanged,
  };
};
