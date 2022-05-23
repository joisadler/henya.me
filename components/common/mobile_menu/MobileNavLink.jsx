/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { string, bool } from 'prop-types';
import { useContext } from 'react';
import Context from 'context/Context';
import Link from 'next/link';
import styles from './mobile_menu.module.scss';

const NavLink = ({ name, url, scroll }) => {
  const { hideMobileMenu } = useContext(Context);

  const onLinkClick = () => {
    hideMobileMenu();
  };

  return (
    <Link href={url} scroll={scroll}>
      <a className={styles.mobile_nav_link} onClick={onLinkClick}>
        {name}
      </a>
    </Link>
  );
};

NavLink.propTypes = {
  name: string.isRequired,
  url: string.isRequired,
  scroll: bool.isRequired,
};

export default NavLink;
