import { useState, useEffect } from 'react';
import { useFirebaseApp } from 'hooks/useFirebaseApp';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

export const useFirebase = () => {
  const { app } = useFirebaseApp();
  const [storage, setStorage] = useState();

  useEffect(() => {
    if (!app) return;
    setStorage(getStorage(app));
  }, [app]);

  return {
    storage,
    getStorage,
    ref,
    uploadBytes,
  };
};
