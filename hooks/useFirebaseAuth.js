import { useState, useEffect } from 'react';
import { useFirebaseApp } from 'hooks/useFirebaseApp';
import {
  getAuth,
  GoogleAuthProvider,
  onIdTokenChanged,
  onAuthStateChanged,
} from 'firebase/auth';

export const useFirebaseAuth = () => {
  const { app } = useFirebaseApp();
  const [auth, setAuth] = useState();

  useEffect(() => {
    if (!app) return;
    setAuth(getAuth(app));
  }, [app]);

  return {
    auth,
    GoogleAuthProvider,
    onIdTokenChanged,
    onAuthStateChanged,
  };
};
