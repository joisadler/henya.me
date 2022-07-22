import { useState, useEffect } from 'react';
import { useFirebaseApp } from 'hooks/useFirebaseApp';
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';

export const useFirestore = () => {
  const { app } = useFirebaseApp();
  const [db, setDB] = useState();

  useEffect(() => {
    if (!app) return;
    setDB(getFirestore(app));
  }, [app]);

  const createDocument = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log('Document written with ID: ', docRef.id);
      return true;
    } catch (e) {
      console.error('Error adding document: ', e);
      return false;
    }
  };

  const getDocument = async (docRef) => {
    try {
      const document = await getDoc(docRef);
      console.log('Got the document with ID: ', docRef.id);
      return document;
    } catch (e) {
      console.error('Error getting document: ', e);
      return null;
    }
  };

  const getDocuments = async (collectionName = '', params = {}) => {
    if (!db) return [];

    const { fieldPath, opStr, value } = params;

    const q = query(
      collection(db, collectionName),
      where(fieldPath, opStr, value)
    );

    try {
      const docs = await getDocs(q);
      console.log('Got the docs');
      return docs;
    } catch (e) {
      console.error('Error getting document: ', e);
      return null;
    }
  };

  return {
    // db,
    // doc,
    // collection,
    // getDocs,
    // addDoc,
    // getDoc,
    // updateDoc,
    getDocument,
    getDocuments,
    createDocument,
  };
};
