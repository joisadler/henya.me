import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/compat/firestore';
import { getAnalytics } from 'firebase/compat/analytics';

export default () => {
  const [app, setApp] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [db, setDB] = useState(null);

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

    setApp(firebase.initializeApp(firebaseConfig));
    if (!app) return;
    setAnalytics(getAnalytics(app));
    setDB(getFirestore(app));
  }, [app]);

  return {
    firebase,
    app,
    analytics,
    db,
  };
};
