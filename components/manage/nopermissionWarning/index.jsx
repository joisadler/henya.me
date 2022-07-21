import styles from './no_permission_warning.module.scss';

const NoPermissionWarning = ({ user, logout }) => {
  const { displayName, email } = user;

  return (
    <main className={styles.container}>
      <h1>{`Hey, ${displayName || email}!`}</h1>
      <h2>
        Sorry, but only the site admins have permission to access the content of
        this page :(
      </h2>
      <a href="/">Home</a>
      <br />
      <br />
      <button onClick={() => logout()}>Logout</button>
    </main>
  );
};

export default NoPermissionWarning;
