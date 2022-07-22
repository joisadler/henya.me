import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFirebase } from 'hooks/useFirebase';
import {
  removeUserCookie,
  setUserCookie,
  getUserFromCookie,
} from './userCookie';

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
  const { auth, onIdTokenChanged } = useFirebase();

  const [user, setUser] = useState();
  const router = useRouter();

  const logout = async () => {
    return auth
      .signOut()
      .then(() => {
        router.push('/');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    if (!auth) return;
    (() => {
      const cancelAuthListener = onIdTokenChanged(auth, async (userToken) => {
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
  }, [auth, onIdTokenChanged]);

  return { user, logout };
};

export { useUser };
