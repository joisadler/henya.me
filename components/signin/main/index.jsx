import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUserCookie } from 'auth/userCookie';
import { mapUserData } from 'auth/useUser';
import { useFirebaseAuth } from 'hooks/useFirebaseAuth';
import styles from './main.module.scss';

const Main = () => {
  const { auth, GoogleAuthProvider } = useFirebaseAuth();
  if (!auth) return null;

  const successUrl = '/manage';
  const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
    signInFlow: 'popup',
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
    signInSuccessUrl,
    credentialHelper: 'none',
    callbacks: {
      signInSuccessWithAuthResult: async (
        authResult
        // redirectUrl,
      ) => {
        const { user } = authResult;
        const userData = await mapUserData(user);
        setUserCookie(JSON.stringify(userData));
      },
    },
  });

  return (
    <main className={styles.container}>
      <div className={styles.signin_card}>
        <hgroup className={styles.signin_titles}>
          <h1 className={styles.signin_title}>Sign in</h1>
          <h2 className={styles.signin_subtitle}>to manage the site content</h2>
        </hgroup>
        <div className={styles.signin_button_container}>
          <StyledFirebaseAuth
            className={styles.signin_button}
            uiConfig={firebaseAuthConfig({ signInSuccessUrl: successUrl })}
            firebaseAuth={auth}
            signInSuccessUrl={successUrl}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
