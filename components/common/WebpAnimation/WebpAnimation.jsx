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
  return (
    <picture className={containerClassName} {...restProps} ref={ref}>
      <source srcSet={`${pathname}${filename}.webp`} type="image/webp" />
      <source srcSet={`${pathname}${filename}.gif`} type="image/gif" />
      <img
        className={imgClassName}
        src={`${pathname}${filename}.gif`}
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
};

WebpPicture.defaultProps = {
  alt: '',
  containerClassName: '',
  imgClassName: '',
};

export default WebpPicture;
