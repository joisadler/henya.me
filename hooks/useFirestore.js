import { useState, useEffect } from 'react';
import { useFirebaseApp } from 'hooks/useFirebaseApp';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
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
      return docs;
    } catch (e) {
      console.error('Error getting document: ', e);
      return null;
    }
  };

  const getAllDocuments = async (collectionName = '') => {
    if (!db) return [];

    const q = query(collection(db, collectionName));

    try {
      const docs = await getDocs(q);
      return docs;
    } catch (e) {
      console.error('Error getting document: ', e);
      return null;
    }
  };

  const updateDocument = async (docRef, data) => {
    try {
      const updatedDoc = await updateDoc(docRef, data);
      return updatedDoc;
    } catch (e) {
      console.error('Error updating document: ', e);
      return null;
    }
  };

  const deleteDocument = async (docRef) => {
    try {
      const updatedDoc = await deleteDoc(docRef);
      return updatedDoc;
    } catch (e) {
      console.error('Error deleting document: ', e);
      return null;
    }
  };

  return {
    db,
    getDocument,
    getDocuments,
    getAllDocuments,
    createDocument,
    updateDocument,
  };
};
