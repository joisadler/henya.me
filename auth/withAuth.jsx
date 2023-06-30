import { useEffect } from 'react';
import { useFirebaseAuth } from 'hooks/useFirebaseAuth';
import router from 'next/router';

const withAuth = Component => props => {
  const { auth, onAuthStateChanged } = useFirebaseAuth();
  useEffect(() => {
    if (!auth) return;
    onAuthStateChanged(auth, authUser => {
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
