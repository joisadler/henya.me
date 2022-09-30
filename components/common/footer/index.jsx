import styles from './footer.module.scss';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h2 className={styles.title}>Stay Connected</h2>
      <div className={styles.contact_info}>
        <a
          className={styles.email}
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.NEXT_PUBLIC_EMAIL}
        </a>
        <a
          className={styles.phone_number}
          href="https://wa.me/972587782776"
          target="_blank"
          rel="noopener noreferrer"
        >
          +972 58 778 2 776
        </a>
      </div>
      <small className={styles.copyright}>
        &copy; Henya Design {year} . All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
