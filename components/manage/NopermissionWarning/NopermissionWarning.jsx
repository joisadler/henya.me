import { func, shape, string } from 'prop-types';

import styles from './no_permission_warning.module.scss';

const NoPermissionWarning = ({ user, logout }) => {
  const { displayName, email } = user;

  return (
    <main className={styles.container}>
      <div className={styles.warning_card}>
        <hgroup className={styles.warning_titles}>
          <h1 className={styles.warning_title}>{`Hey, ${
            displayName || email
          }!`}</h1>
          <h2 className={styles.warning_subtitle}>
            Sorry, but only the site admins have permission to access the
            content of this page :(
          </h2>
        </hgroup>
        <div className={styles.buttons_container}>
          <a href="/" className={styles.home_button}>
            Home
          </a>
          <button
            className={styles.logout_button}
            type="button"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
};

NoPermissionWarning.propTypes = {
  user: shape({
    displayName: string,
    email: string,
  }).isRequired,
  logout: func.isRequired,
};

export default NoPermissionWarning;
