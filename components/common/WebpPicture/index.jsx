import React from 'react';
import { string } from 'prop-types';

const WebpPicture = ({
  pathname,
  filename,
  alt,
  containerClassName,
  imgClassName,
}) => {
  return (
    <picture className={containerClassName}>
      <source srcSet={`${pathname}${filename}.webp`} type="image/webp" />
      <source srcSet={`${pathname}${filename}.png`} type="image/png" />
      <img
        className={imgClassName}
        style={{ width: '100%', height: '100%' }}
        src={`${pathname}${filename}.png`}
        alt={alt || filename}
      />
    </picture>
  );
};

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
