/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import Context from 'context/Context';
import Link from 'next/link';
import { bool, string } from 'prop-types';

import styles from './mobile_menu.module.scss';

const NavLink = ({ name, url, scroll, open_in_new_tab }) => {
  const { hideMobileMenu } = useContext(Context);

  const onLinkClick = () => {
    hideMobileMenu();
  };

  return (
    <Link href={url} scroll={scroll}>
      <a
        className={styles.mobile_nav_link}
        onClick={onLinkClick}
        target={open_in_new_tab ? '_blank' : ''}
      >
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
