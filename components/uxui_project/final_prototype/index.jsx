import { shape, string } from 'prop-types';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import styles from './final_prototype.module.scss';

const FinalPrototype = ({ final_prototype }) => {
  const isDesktop = useMediaQuery({
    minWidth: desktop_breakpoint,
  });
  const shouldRenderFinalPrototype =
    final_prototype && final_prototype.src.length > 0;
  if (!shouldRenderFinalPrototype) return null;

  const { src } = final_prototype;

  return (
    <section className={styles.final_prototype}>
      <h2 className={styles.title}>
        Final&nbsp;<span className={styles.text_red}>Prototype</span>
      </h2>
      <div className={styles.prototype_container}>
        <iframe
          className={styles.prototype}
          title="Final Prototype"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="100%"
          height={isDesktop ? '800px' : ''}
          src={src}
          allowFullScreen
        />
      </div>
    </section>
  );
};

FinalPrototype.propTypes = {
  final_prototype: shape({
    src: string,
    device_type: string,
  }),
};

FinalPrototype.defaultProps = {
  final_prototype: {
    src: '',
    device_type: '',
  },
};

export default FinalPrototype;
