import { forwardRef } from 'react';
import { string } from 'prop-types';

const WebpPicture = forwardRef((props, ref) => {
  const {
    pathname,
    filename,
    alt,
    containerClassName,
    imgClassName,
    ...restProps
  } = props;

  const canConstructSrc =
    pathname && pathname.length > 0 && filename && filename.length > 0;

  const webpSrc = canConstructSrc ? `${pathname}${filename}.webp` : '';
  const pngSrc = canConstructSrc ? `${pathname}${filename}.jpg` : '';

  return (
    <picture className={containerClassName} {...restProps} ref={ref}>
      <source srcSet={webpSrc} type="image/webp" />
      <source srcSet={pngSrc} type="image/png" />
      <img className={imgClassName} src={pngSrc} alt={alt || filename} />
    </picture>
  );
});

WebpPicture.propTypes = {
  pathname: string.isRequired,
  filename: string.isRequired,
  alt: string,
  containerClassName: string,
  imgClassName: string,
};

WebpPicture.defaultProps = {
  alt: '',
  containerClassName: '',
  imgClassName: '',
};

export default WebpPicture;
