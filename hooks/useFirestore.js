import { useState, useEffect } from 'react';
import { useFirebaseApp } from 'hooks/useFirebaseApp';
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  getDoc,
  updateDoc,
} from 'firebase/firestore/lite';

export const useFirebase = () => {
  const { app } = useFirebaseApp();
  const [db, setDB] = useState();

  useEffect(() => {
    if (!app) return;
    setDB(getFirestore(app));
  }, [app]);

  return {
    db,
    doc,
    collection,
    getDocs,
    getDoc,
    updateDoc,
  };
};
