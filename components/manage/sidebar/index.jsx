import { useState } from 'react';
import styles from './sidebar.module.scss';

const Sidebar = ({ user, logout, activePanel, setActivePanel }) => {
  const { displayName, photoURL } = user;
  const firstName = displayName.split(' ')[0];

  const onNavSectionClick = (e) => {
    const { currentTarget } = e;
    const { dataset } = currentTarget;
    const { name } = dataset;
    setActivePanel(name);
  };

  return (
    <nav className={styles.container}>
      <section className={styles.nav_section}>
        <h1 className={styles.greeting}>{`Hi, ${firstName}!`}</h1>
        <div className={styles.profile_image_container}>
          <img
            src={photoURL}
            alt={displayName}
            className={styles.profile_image}
          />
          <div className={styles.logout_button_container}>
            <button
              type="button"
              className={styles.logout_button}
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </div>
      </section>
      <section
        className={styles.nav_section}
        data-name="users"
        role="presentation"
        onClick={onNavSectionClick}
      >
        <h2
          className={
            activePanel === 'users'
              ? styles.nav_section_title_active
              : styles.nav_section_title
          }
        >
          Manage users
        </h2>
      </section>
    </nav>
  );
};

export default Sidebar;
