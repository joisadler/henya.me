import { string } from 'prop-types';
import WebpPicture from 'components/common/WebpPicture';
import styles from './logo_image.module.scss';

const LogoImage = ({ name, short_about, logo_image_filename }) => {
  const isLogoImageShown =
    logo_image_filename && logo_image_filename.length > 0;

  return (
    <section className={styles.container}>
      {isLogoImageShown && (
        <WebpPicture
          containerClassName={styles.logo_picture}
          imgClassName={styles.logo_image}
          pathname="/images/portfolio/uxui/"
          filename={logo_image_filename}
          alt={name}
        />
      )}
      <h1 className={styles.heading}>
        {name}&nbsp;&mdash;&nbsp;{short_about}
      </h1>
    </section>
  );
};

LogoImage.propTypes = {
  name: string.isRequired,
  short_about: string.isRequired,
  logo_image_filename: string,
};

LogoImage.defaultProps = {
  logo_image_filename: '',
};

export default LogoImage;
