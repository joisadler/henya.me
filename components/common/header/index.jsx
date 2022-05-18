import { useEffect, useContext } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import LogoIcon from 'components/icons/LogoIcon';
import Hamburger from 'hamburger-react';
import Context from 'context/Context';
import NavLink from './NavLink';
import styles from './header.module.scss';

const Header = ({ nav_links }) => {
  const { isMobileMenuOpen, showMobileMenu, hideMobileMenu } =
    useContext(Context);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const onHamburgerButtonClick = (toggled) => {
    if (toggled) {
      showMobileMenu();
    } else {
      hideMobileMenu();
    }
  };

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
      <div className={styles.hamburger_container}>
        <Hamburger
          toggled={isMobileMenuOpen}
          onToggle={onHamburgerButtonClick}
          label="Show menu"
        />
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
