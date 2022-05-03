import { string } from 'prop-types';
import { useContext } from 'react';
import Context from 'context/Context';
import styles from './mobile_menu.module.scss';

const NavLink = ({ name, url }) => {
  const { hideMobileMenu } = useContext(Context);

  const onLinkClick = () => {
    hideMobileMenu();
  };

  return (
    <a href={url} className={styles.mobile_nav_link} onClick={onLinkClick}>
      {name}
    </a>
  );
};

NavLink.propTypes = {
  name: string.isRequired,
  url: string.isRequired,
};

export default NavLink;
