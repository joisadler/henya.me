import { useState, useEffect } from 'react';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import styles from './scroll_down_button.module.scss';

const ScrollDownButton = () => {
  const isMobileOrTablet = useMediaQuery({
    query: `(max-width: ${desktop_breakpoint}px)`,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(window.innerHeight);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 0) {
        setIsVisible(false);
      } else if (scrolled <= 0) {
        setIsVisible(true);
      }
    };

    if (isMobileOrTablet) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
      window.addEventListener('scroll', toggleVisible);
    }
    return () => window.removeEventListener('scroll', toggleVisible);
  }, [isMobileOrTablet]);

  const scrollToBottom = () => {
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <div
      role="presentation"
      onClick={scrollToBottom}
      aria-label="Scroll down"
      className={styles.scroll_downs}
      style={{ display: isVisible ? 'inline' : 'none' }}
    >
      <div className={styles.mousey}>
        <div className={styles.scroller} />
      </div>
    </div>
  );
};

export default ScrollDownButton;
