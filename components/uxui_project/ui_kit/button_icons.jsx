import { arrayOf, string } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './ui_kit.module.scss';

const ButtonIcons = ({ button_icons }) => {
  const shouldRenderButtonIcons = button_icons && button_icons.length > 0;
  if (!shouldRenderButtonIcons) return null;

  return (
    <div className={styles.button_icons}>
      {button_icons.map((filename) => (
        <WebpPicture
          containerClassName={styles.button_icon_picture}
          imgClassName={styles.button_icon_image}
          pathname="/images/portfolio/uxui/"
          filename={filename}
          alt={filename}
          key={filename}
        />
      ))}
    </div>
  );
};

ButtonIcons.propTypes = {
  button_icons: arrayOf(string),
};

ButtonIcons.defaultProps = {
  button_icons: [],
};

export default ButtonIcons;
