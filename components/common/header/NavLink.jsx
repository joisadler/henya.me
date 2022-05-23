import { string, bool } from 'prop-types';
import Link from 'next/link';
import styles from './header.module.scss';

const NavLink = ({ name, url, scroll }) => {
  return (
    <Link href={url} scroll={scroll}>
      <a className={styles.nav_link}>{name}</a>
    </Link>
  );
};

NavLink.propTypes = {
  name: string.isRequired,
  url: string.isRequired,
  scroll: bool.isRequired,
};

export default NavLink;
