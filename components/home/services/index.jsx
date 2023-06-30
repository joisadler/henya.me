import { arrayOf, number, shape, string } from 'prop-types';

import ServiceCard from './ServiceCard';

import styles from './services.module.scss';

const Services = ({ services }) => {
  return (
    <section className={styles.services_container}>
      <ul className={styles.services}>
        {services.map(({ id, ...props }) => (
          <ServiceCard key={id} {...props} />
        ))}
      </ul>
    </section>
  );
};

Services.propTypes = {
  services: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      description: string.isRequired,
      pathname: string.isRequired,
      filename: string.isRequired,
    })
  ).isRequired,
};

export default Services;
