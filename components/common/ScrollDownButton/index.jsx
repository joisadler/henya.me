import { useState, useEffect } from 'react';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import styles from './scroll_down_button.module.scss';

const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [top, setTop] = useState(0);
  const isDesktop = useMediaQuery({
    query: `(min-width: ${desktop_breakpoint}px)`,
  });

  useEffect(() => {
    setTop(window.innerHeight);
  }, []);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 0) {
        setIsVisible(false);
      } else if (scrolled <= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  if (!isDesktop) return null;
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
