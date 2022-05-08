import { useEffect, useRef, useContext } from 'react';
import Context from 'context/Context';
import { arrayOf, shape, string, number } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './mobile_menu.module.scss';
import MobileNavLink from './MobileNavLink';

const MobileMenu = ({ nav_links }) => {
  const { isMobileMenuOpen, hideMobileMenu } = useContext(Context);
  const menuRef = useRef(null);

  const onMenuClick = () => {
    hideMobileMenu();
  };

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (isMobileMenuOpen) {
      menu.style.transform = 'translateY(0)';
    } else {
      menu.style.transform = 'translateY(-100%)';
    }
  }, [isMobileMenuOpen]);

  return (
    <div
      className={styles.container}
      ref={menuRef}
      onClick={onMenuClick}
      role="presentation"
    >
      <nav className={styles.mobile_nav}>
        {nav_links.map(({ id, ...linkProps }) => (
          <MobileNavLink {...linkProps} />
        ))}
      </nav>
      <nav className={styles.contacts}>
        <a
          className={styles.contact_link}
          href="https://wa.me/972584782771"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          className={styles.contact_link}
          href="mailto:henyadesign@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          className={styles.contact_link}
          href="https://www.linkedin.com/in/henyaadler/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </nav>
    </div>
  );
};

MobileMenu.propTypes = {
  nav_links: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
};

export default MobileMenu;
