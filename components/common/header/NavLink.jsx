import { string } from 'prop-types';
import styles from './header.module.scss';

const NavLink = ({ name, url }) => {
  return (
    <a href={url} className={styles.nav_link}>
      {name}
    </a>
  );
};

NavLink.propTypes = {
  name: string.isRequired,
  url: string.isRequired,
};

export default NavLink;
