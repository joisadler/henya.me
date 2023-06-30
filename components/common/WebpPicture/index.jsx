import { forwardRef } from 'react';
import { number, objectOf, oneOfType, string } from 'prop-types';

const WebpPicture = forwardRef((props, ref) => {
  const {
    pathname,
    filename,
    alt,
    containerClassName,
    imgClassName,
    containerStyles,
    imgStyles,
    ...restProps
  } = props;

  const canConstructSrc =
    pathname && pathname.length > 0 && filename && filename.length > 0;

  const webpSrc = canConstructSrc ? `${pathname}${filename}.webp` : '';
  const pngSrc = canConstructSrc ? `${pathname}${filename}.png` : '';
  const jpgSrc = canConstructSrc ? `${pathname}${filename}.jpg` : '';

  return (
    <picture
      className={containerClassName}
      style={containerStyles}
      {...restProps}
      ref={ref}
    >
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={pngSrc} type="image/png" />
      <source srcSet={jpgSrc} type="image/jpg" />
      <img
        className={imgClassName}
        style={imgStyles}
        src={pngSrc}
        alt={alt || filename}
      />
    </picture>
  );
});

WebpPicture.propTypes = {
  pathname: string.isRequired,
  filename: string.isRequired,
  alt: string,
  containerClassName: string,
  imgClassName: string,
  containerStyles: objectOf(oneOfType([string, number])),
  imgStyles: objectOf(oneOfType([string, number])),
};

WebpPicture.defaultProps = {
  alt: '',
  containerClassName: '',
  imgClassName: '',
  containerStyles: {},
  imgStyles: {},
};

export default WebpPicture;
