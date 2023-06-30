import { useEffect, useState } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  onIdTokenChanged,
} from 'firebase/auth';
import { useFirebaseApp } from 'hooks/useFirebaseApp';

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
