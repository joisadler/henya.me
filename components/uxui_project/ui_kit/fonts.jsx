import { arrayOf, string } from 'prop-types';
import styles from './ui_kit.module.scss';

const Fonts = ({ fonts }) => {
  const shouldRenderFonts = fonts && fonts.length > 0;
  if (!shouldRenderFonts) return null;

  return (
    <>
      <h3 className={styles.typography_title}>FONTS / TYPOGRAPHY</h3>
      {fonts.map((font) => (
        <article key={font}>
          <h4 className={styles.font_name} style={{ '--font_family': font }}>
            {font}
          </h4>
          <p
            className={styles.font_demonstration}
            style={{ '--font_family': font }}
          >
            ABCDEFGHIJKLMOPQRSTUVWXZ abcdefghijklmnopqrstuvwxyz 1234567890
          </p>
        </article>
      ))}
    </>
  );
};

Fonts.propTypes = {
  fonts: arrayOf(string),
};

Fonts.defaultProps = {
  fonts: [],
};

export default Fonts;
