import { arrayOf, shape, string, number } from 'prop-types';
import LogoIcon from 'components/icons/LogoIcon';
import NavLink from './NavLink';
import styles from './header.module.scss';

const Header = ({ nav_links }) => {
  return (
    <section className={styles.container}>
      <div className={styles.logo_container}>
        <LogoIcon className={styles.logo} />
      </div>
      <div className={styles.nav_container}>
        <nav className={styles.nav}>
          {nav_links.map(({ id, ...linkProps }) => (
            <NavLink {...linkProps} />
          ))}
        </nav>
        <div className={styles.contact_info}>
          <span className={styles.contact_info_text}>
            henyadesign@gmail.com
          </span>
          <span className={styles.contact_info_text}>+972 58 778 2 776</span>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  nav_links: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
};

export default Header;
