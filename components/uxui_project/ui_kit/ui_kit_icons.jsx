import {
  arrayOf,
  string,
  shape,
  objectOf,
  oneOfType,
  number,
} from 'prop-types';
import Icons from './icons';
import ButtonIcons from './button_icons';
import styles from './ui_kit.module.scss';

const UiKitIcons = ({ icons, button_icons }) => {
  const shouldRenderIcons = icons.filenames && icons.filenames.length > 0;
  const shouldRenderButtonIcons = button_icons && button_icons.length > 0;
  const shouldRenderUiKitIcons = shouldRenderIcons || shouldRenderButtonIcons;
  if (!shouldRenderUiKitIcons) return null;

  return (
    <div className={styles.ui_kit_icons}>
      <Icons icons={icons} />
      <ButtonIcons button_icons={button_icons} />
    </div>
  );
};

UiKitIcons.propTypes = {
  icons: arrayOf(string),
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
};

UiKitIcons.defaultProps = {
  icons: [],
  button_icons: [],
};

export default UiKitIcons;
