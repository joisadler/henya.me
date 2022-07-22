import React, { useEffect } from 'react';
import router from 'next/router';
import { useFirebaseAuth } from 'hooks/useFirebaseAuth';

const withAuth = (Component) => (props) => {
  const { auth, onAuthStateChanged } = useFirebaseAuth();
  useEffect(() => {
    if (!auth) return;
    onAuthStateChanged(auth, (authUser) => {
      if (!authUser) {
        router.push('/signin');
      }
    });
  }, [auth, onAuthStateChanged]);

  return (
    <div>
      <Component {...props} />
    </div>
  );
};

export default withAuth;
