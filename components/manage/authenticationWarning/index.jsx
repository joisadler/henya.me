import styles from './authentication_warning.module.scss';

const AuthenticationWarning = () => {
  return (
    <main className={styles.container}>
      <h1>Hey, stranger!</h1>
      <h2>
        Sorry, but only the site admins have permission to access the content of
        this page :(
      </h2>
      <a href="/signin">Sign in</a>
    </main>
  );
};

export default AuthenticationWarning;
