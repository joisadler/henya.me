import {
  arrayOf,
  string,
  number,
  objectOf,
  oneOfType,
  shape,
} from 'prop-types';
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
  const shouldRenderFonts = fonts && fonts.length > 0;
  const shouldRenderIcons = icons.filenames && icons.filenames.length > 0;
  const shouldRenderButtonIcons = button_icons && button_icons.length > 0;
  const shouldRenderColorPalette = color_palette && color_palette.length > 0;
  const shouldRenderUiKitInfo = shouldRenderFonts || shouldRenderColorPalette;
  const shouldRenderUiKitIcons = shouldRenderIcons || shouldRenderButtonIcons;
  const shouldRenderUiKit = shouldRenderUiKitInfo || shouldRenderUiKitIcons;
  if (!shouldRenderUiKit) return null;

  return (
    <div className={styles.background}>
      <section className={styles.container}>
        <UiKitInfo
          name={name}
          logo_image_filename={logo_image_filename}
          fonts={fonts}
          color_palette={color_palette}
        />
        <UiKitIcons icons={icons} button_icons={button_icons} />
      </section>
    </div>
  );
};

UiKit.propTypes = {
  name: string,
  logo_image_filename: string,
  fonts: arrayOf(string),
  icons: shape({
    container_styles: objectOf(oneOfType([string, number])),
    icon_picture_styles: objectOf(oneOfType([string, number])),
    icon_image_styles: objectOf(oneOfType([string, number])),
    filenames: arrayOf(string),
  }),
  button_icons: shape({
    container_styles: objectOf(oneOfType([string, number])),
    icon_picture_common_styles: objectOf(oneOfType([string, number])),
    icon_image_common_styles: objectOf(oneOfType([string, number])),
    icons: shape({
      filename: string,
      icon_picture_styles: objectOf(oneOfType([string, number])),
      icon_image_styles: objectOf(oneOfType([string, number])),
    }),
  }),
  color_palette: arrayOf(string),
};

UiKit.defaultProps = {
  name: '',
  logo_image_filename: '',
  fonts: [],
  icons: {},
  button_icons: [],
  color_palette: [],
};

export default UiKit;
