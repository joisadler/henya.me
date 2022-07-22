import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import { setUserCookie } from 'auth/userCookie';
import { mapUserData } from 'auth/useUser';
import initFirebase from 'config/firebaseConfig';
import styles from './main.module.scss';

const Main = () => {
  initFirebase();

  const signInSuccessUrl = '/manage';

  const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
    signInFlow: 'popup',
    signInOptions: [
      // {
      //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //   requireDisplayName: false,
      // },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl,
    credentialHelper: 'none',
    callbacks: {
      signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
        const userData = await mapUserData(user);
        setUserCookie(JSON.stringify(userData));
      },
    },
  });

  return (
    <main className={styles.container}>
      <section className={styles.signin_card}>
        <hgroup className={styles.signin_titles}>
          <h1 className={styles.signin_title}>Sign in</h1>
          <h2 className={styles.signin_subtitle}>to manage the site content</h2>
        </hgroup>
        <div className={styles.signin_button_container}>
          <StyledFirebaseAuth
            className={styles.signin_button}
            uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
            firebaseAuth={firebase.auth()}
            signInSuccessUrl={signInSuccessUrl}
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
