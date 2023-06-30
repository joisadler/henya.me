import { arrayOf, string } from 'prop-types';

import WebpPicture from 'components/common/WebpPicture';

import ColorPalette from './color_palette';
import Fonts from './fonts';

import styles from './ui_kit.module.scss';

const UiKitInfo = ({ name, logo_image_filename, fonts, color_palette }) => {
  const shouldRenderLogoImage =
    logo_image_filename && logo_image_filename.length > 0;
  const shouldRenderFonts = fonts && fonts.length > 0;
  const shouldRenderColorPalette = color_palette && color_palette.length > 0;
  const shouldRenderUiKitInfo =
    shouldRenderLogoImage || shouldRenderFonts || shouldRenderColorPalette;
  if (!shouldRenderUiKitInfo) return null;

  return (
    <div className={styles.info}>
      <h2 className={styles.title}>
        <span className={styles.text_red}>UI</span>&nbsp;Kit
      </h2>
      {shouldRenderLogoImage && (
        <WebpPicture
          containerClassName={styles.logo_picture}
          imgClassName={styles.logo_image}
          pathname="/images/portfolio/uxui/"
          filename={logo_image_filename}
          alt={name}
        />
      )}
      <Fonts fonts={fonts} />
      <ColorPalette color_palette={color_palette} />
    </div>
  );
};

UiKitInfo.propTypes = {
  name: string,
  logo_image_filename: string,
  fonts: arrayOf(string),
  color_palette: arrayOf(string),
};

UiKitInfo.defaultProps = {
  name: '',
  logo_image_filename: '',
  fonts: [],
  color_palette: [],
};

export default UiKitInfo;
