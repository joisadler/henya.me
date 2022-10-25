import { string, shape, objectOf, oneOfType, number } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';

const ButtonIcons = ({ button_icons }) => {
  if (!button_icons) return null;
  const {
    container_styles,
    icon_picture_common_styles,
    icon_image_common_styles,
    icons,
  } = button_icons;
  const shouldRenderButtonIcons = icons && icons.length > 0;
  if (!shouldRenderButtonIcons) return null;
  return (
    <div style={container_styles}>
      {icons.map((icon) => {
        const { filename, icon_picture_styles, icon_image_styles } = icon;
        return (
          <WebpPicture
            containerStyles={{
              ...icon_picture_common_styles,
              ...icon_picture_styles,
            }}
            imgStyles={{ ...icon_image_common_styles, ...icon_image_styles }}
            pathname="/images/portfolio/uxui/"
            filename={filename}
            alt={filename}
            key={filename}
          />
        );
      })}
    </div>
  );
};

ButtonIcons.propTypes = {
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

ButtonIcons.defaultProps = {
  button_icons: {},
};

export default ButtonIcons;
