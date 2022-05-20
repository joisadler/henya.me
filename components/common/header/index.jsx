import { useState, useEffect, useContext } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import LogoIcon from 'components/icons/LogoIcon';
import Hamburger from 'hamburger-react';
import Context from 'context/Context';
import {
  desktop_breakpoint,
  header_height,
  header_height_mobile,
} from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import NavLink from './NavLink';
import styles from './header.module.scss';

const Header = ({ nav_links }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${desktop_breakpoint}px)`,
  });
  const height = isMobile ? header_height_mobile : header_height;

  const { isMobileMenuOpen, showMobileMenu, hideMobileMenu } =
    useContext(Context);

  const [background, setBackground] = useState('transparent');

  useEffect(() => {
    const updateBackground = () => {
      if (window.scrollY >= height) {
        setBackground('rgba(19, 26, 54, 0.3)');
      } else {
        setBackground('transparent');
      }
    };

    updateBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', updateBackground);
    return () => window.removeEventListener('keyup', updateBackground);
  }, [height]);

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
    <section className={styles.container} style={{ background }}>
      <div className={styles.logo_container}>
        <LogoIcon className={styles.logo} />
      </div>
      <div className={styles.nav_container}>
        <nav className={styles.nav}>
          {nav_links.map(({ id, ...linkProps }) => (
            <NavLink key={id} {...linkProps} />
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
