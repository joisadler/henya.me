import { arrayOf, shape, string, number } from 'prop-types';
import styles from './header.module.scss';

const Header = ({ nav_links }) => {
  return (
    <section className={styles.container}>
      <div className={styles.logo_container}>logo</div>
      <div className={styles.nav}>nav</div>
    </section>
  )
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
