// import Image from 'next/image';
import commonStyles from 'styles/common.module.scss';
import styles from './main.module.scss';

const Main = () => {
  return (
    <section className={commonStyles.section_container}>
      <div className={styles.container} />
    </section>
  );
};

export default Main;
