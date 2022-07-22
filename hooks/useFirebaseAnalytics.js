import { useState, useEffect } from 'react';
import { useFirebaseApp } from 'hooks/useFirebaseApp';
import { getAnalytics } from 'firebase/analytics';

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
