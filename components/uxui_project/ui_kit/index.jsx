import { arrayOf, string } from 'prop-types';
import UiKitInfo from './ui_kit_info';
import UiKitIcons from './ui_kit_icons';
import styles from './ui_kit.module.scss';

const UiKit = ({
  name,
  logo_image_filename,
  fonts,
  icons,
  button_icons,
  color_palette,
}) => {
  const shouldRenderLogoImage =
    logo_image_filename && logo_image_filename.length > 0;
  const shouldRenderFonts = fonts && fonts.length > 0;
  const shouldRenderIcons = icons && icons.length > 0;
  const shouldRenderButtonIcons = button_icons && button_icons.length > 0;
  const shouldRenderColorPalette = color_palette && color_palette.length > 0;
  const shouldRenderUiKitInfo =
    shouldRenderLogoImage || shouldRenderFonts || shouldRenderColorPalette;
  const shouldRenderUiKitIcons = shouldRenderIcons || shouldRenderButtonIcons;
  const shouldRenderUiKit = shouldRenderUiKitInfo || shouldRenderUiKitIcons;
  if (!shouldRenderUiKit) return null;

  return (
    <section className={styles.container}>
      <UiKitInfo
        name={name}
        logo_image_filename={logo_image_filename}
        fonts={fonts}
        color_palette={color_palette}
      />
      <UiKitIcons icons={icons} button_icons={button_icons} />
    </section>
  );
};

UiKit.propTypes = {
  name: string,
  logo_image_filename: string,
  fonts: arrayOf(string),
  icons: arrayOf(string),
  button_icons: arrayOf(string),
  color_palette: arrayOf(string),
};

UiKit.defaultProps = {
  name: '',
  logo_image_filename: '',
  fonts: [],
  icons: [],
  button_icons: [],
  color_palette: [],
};

export default UiKit;
