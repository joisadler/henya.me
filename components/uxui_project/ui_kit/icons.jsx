import {
  arrayOf,
  shape,
  string,
  number,
  objectOf,
  oneOfType,
} from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';

const Icons = ({ icons }) => {
  if (!icons) return null;
  const {
    container_styles,
    icon_picture_styles,
    icon_image_styles,
    filenames,
  } = icons;
  const shouldRenderIcons = filenames && filenames.length > 0;
  if (!shouldRenderIcons) return null;

  return (
    <div style={container_styles}>
      {filenames.map((filename) => (
        <WebpPicture
          containerStyles={icon_picture_styles}
          imgStyles={icon_image_styles}
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
  icons: shape({
    container_styles: objectOf(oneOfType([string, number])),
    icon_picture_styles: objectOf(oneOfType([string, number])),
    icon_image_styles: objectOf(oneOfType([string, number])),
    filenames: arrayOf(string),
  }),
};

Icons.defaultProps = {
  icons: {},
};

export default Icons;
