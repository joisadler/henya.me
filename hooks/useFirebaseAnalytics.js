import { useEffect, useState } from 'react';
import { getAnalytics } from 'firebase/analytics';
import { useFirebaseApp } from 'hooks/useFirebaseApp';

export const useFirebaseAnalytics = () => {
  const { app } = useFirebaseApp();
  const [analytics, setAnalytics] = useState();

  useEffect(() => {
    if (!app) return;
    setAnalytics(getAnalytics(app));
  }, [app]);

  return {
    analytics,
  };
};
