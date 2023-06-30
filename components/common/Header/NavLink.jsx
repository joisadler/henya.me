import Link from 'next/link';
import { bool, string } from 'prop-types';

import styles from './header.module.scss';

const NavLink = ({ name, url, scroll, open_in_new_tab }) => {
  return (
    <Link href={url} scroll={scroll}>
      <a className={styles.nav_link} target={open_in_new_tab ? '_blank' : ''}>
        {name}
      </a>
    </Link>
  );
};

NavLink.propTypes = {
  name: string.isRequired,
  url: string.isRequired,
  scroll: bool.isRequired,
  open_in_new_tab: bool.isRequired,
};

export default NavLink;
