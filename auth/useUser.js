import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import initFirebase from 'config/firebaseConfig';
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from './userCookie';

initFirebase();

export const mapUserData = async (user) => {
  const { uid, email, displayName } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    displayName,
    email,
    token,
  };
};

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    (() => {
      const cancelAuthListener = firebase
        .auth()
        .onIdTokenChanged(async (userToken) => {
          if (userToken) {
            const userData = await mapUserData(userToken);
            setUserCookie(JSON.stringify(userData));
            setUser(userData);
          } else {
            removeUserCookie();
            setUser();
          }
        });

      const userFromCookie = getUserFromCookie();
      if (!userFromCookie) {
        return null;
      }
      setUser(userFromCookie);
      return () => cancelAuthListener;
    })();
  }, []);

  return { user, logout };
};

export { useUser };
