import { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { useFirebaseApp } from 'hooks/useFirebaseApp';

export const useFirebaseStorage = () => {
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
