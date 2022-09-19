import { arrayOf, string } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './ui_kit.module.scss';

const Icons = ({ icons }) => {
  const shouldRenderIcons = icons && icons.length > 0;
  if (!shouldRenderIcons) return null;

  return (
    <div className={styles.icons}>
      {icons.map((filename) => (
        <WebpPicture
          containerClassName={styles.icon_picture}
          imgClassName={styles.icon_image}
          pathname="/images/portfolio/uxui/"
          filename={filename}
          alt={filename}
          key={filename}
        />
      ))}
    </div>
  );
};

Icons.propTypes = {
  icons: arrayOf(string),
};

Icons.defaultProps = {
  icons: [],
};

export default Icons;
