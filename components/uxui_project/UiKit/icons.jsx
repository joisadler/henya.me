import {
  arrayOf,
  number,
  objectOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import WebpPicture from 'components/common/WebpPicture';

const Icons = ({ icons }) => {
  if (!icons) return null;
  const {
    container_styles,
    icon_picture_common_styles,
    icon_image_common_styles,
    icons: icon_objects,
  } = icons;
  const shouldRenderIcons = icon_objects && icon_objects.length > 0;
  if (!shouldRenderIcons) return null;

  return (
    <div style={container_styles}>
      {icon_objects.map(icon_object => {
        const { filename, icon_picture_styles, icon_image_styles } =
          icon_object;
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

Icons.propTypes = {
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
};

Icons.defaultProps = {
  icons: [],
};

export default Icons;