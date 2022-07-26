import { shape, func, string } from 'prop-types';
import styles from './sidebar.module.scss';

const Sidebar = ({ user, logout, activePanel, setActivePanel }) => {
  const { displayName, photoURL } = user;
  const firstName = displayName.split(' ')[0];

  const navSections = ['users', 'cv', 'UxUiProjects'];
  const navSectionDisplayNames = {
    users: 'Users',
    cv: 'CV',
    UxUiProjects: 'UX/UI Projects',
  };

  const onNavSectionClick = (e) => {
    const { currentTarget } = e;
    const { dataset } = currentTarget;
    const { name } = dataset;
    setActivePanel(name);
  };

  const NavSection = ({ name }) => {
    return (
      <section
        className={styles.nav_section}
        data-name={name}
        role="presentation"
        onClick={onNavSectionClick}
      >
        <h2
          className={
            activePanel === name
              ? styles.nav_section_title_active
              : styles.nav_section_title
          }
        >
          {`Manage ${navSectionDisplayNames[name]}`}
        </h2>
      </section>
    );
  };

  NavSection.propTypes = {
    name: string.isRequired,
  };

  return (
    <nav className={styles.container}>
      <section className={styles.header}>
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
      {navSections.map((section) => (
        <NavSection name={section} key={section} />
      ))}
    </nav>
  );
};

Sidebar.propTypes = {
  user: shape({
    displayName: string,
    email: string,
  }).isRequired,
  activePanel: string.isRequired,
  setActivePanel: func.isRequired,
  logout: func.isRequired,
};

export default Sidebar;
