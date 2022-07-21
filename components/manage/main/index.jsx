import styles from './main.module.scss';

const Main = ({ user, logout }) => {
  const { email } = user;
  return (
    <main className={styles.container}>
      <div>Manage</div>
      <div>
        <div>Email: {email}</div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </main>
  );
};

export default Main;
