import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  desktop_breakpoint,
  header_height,
  header_height_mobile,
} from 'config/constants';
import Context from 'context/Context';
import Hamburger from 'hamburger-react';
import { arrayOf, bool, number, shape, string } from 'prop-types';

import LogoIcon from 'components/icons/LogoIcon';

import NavLink from './NavLink';

import styles from './header.module.scss';

const Header = ({ nav_links, transparent }) => {
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
        setBackground('rgba(19, 26, 54, 0.7)');
      } else {
        setBackground(transparent ? 'transparent' : 'rgba(19, 26, 54, 1)');
      }
    };

    updateBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', updateBackground);
    return () => window.removeEventListener('scroll', updateBackground);
  }, [height, transparent]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const onHamburgerButtonClick = toggled => {
    if (toggled) {
      showMobileMenu();
    } else {
      hideMobileMenu();
    }
  };

  return (
    <section className={styles.container} style={{ background }}>
      <div className={styles.logo_container}>
        <a href="/">
          <LogoIcon className={styles.logo} />
        </a>
      </div>
      <div className={styles.nav_container}>
        <nav className={styles.nav}>
          {nav_links.map(({ id, ...linkProps }) => (
            <NavLink key={id} {...linkProps} />
          ))}
        </nav>
        <div className={styles.contact_info}>
          <a
            className={styles.contact_info_text}
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </a>
          <a
            className={styles.contact_info_text}
            href="https://wa.me/972587782776"
            target="_blank"
            rel="noopener noreferrer"
          >
            +972 58 778 2 776
          </a>
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
      scroll: bool.isRequired,
      open_in_new_tab: bool.isRequired,
    })
  ).isRequired,
  transparent: bool,
};

Header.defaultProps = {
  transparent: false,
};

export default Header;