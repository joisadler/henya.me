import {
  arrayOf,
  number,
  objectOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import ButtonIcons from './button_icons';
import Icons from './icons';

import styles from './ui_kit.module.scss';

const UiKitIcons = ({ icons, button_icons }) => {
  const shouldRenderIcons = icons.icons && icons.icons.length > 0;
  const shouldRenderButtonIcons =
    button_icons.icons && button_icons.icons.length > 0;
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
  icons: shape({
    container_styles: objectOf(oneOfType([string, number])),
    icon_picture_common_styles: objectOf(oneOfType([string, number])),
    icon_image_common_styles: objectOf(oneOfType([string, number])),
    icons: arrayOf(
      shape({
        filename: string,
        icon_picture_styles: objectOf(oneOfType([string, number])),
        icon_image_styles: objectOf(oneOfType([string, number])),
      })
    ),
  }),
  button_icons: shape({
    container_styles: objectOf(oneOfType([string, number])),
    icon_picture_common_styles: objectOf(oneOfType([string, number])),
    icon_image_common_styles: objectOf(oneOfType([string, number])),
    icons: arrayOf(
      shape({
        filename: string,
        icon_picture_styles: objectOf(oneOfType([string, number])),
        icon_image_styles: objectOf(oneOfType([string, number])),
      })
    ),
  }),
};

UiKitIcons.defaultProps = {
  icons: [],
  button_icons: [],
};

export default UiKitIcons;
