import { useState, useEffect } from 'react';
import { bool } from 'prop-types';
import { desktop_breakpoint } from 'config/constants';
import { useMediaQuery } from 'react-responsive';
import styles from './scroll_down_button.module.scss';

const ScrollDownButton = ({ dark }) => {
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
      role="button"
      aria-label="Scroll down"
      tabIndex={0}
      onClick={scrollToBottom}
      onKeyDown={scrollToBottom}
      className={styles.scroll_downs}
      style={{ display: isVisible ? 'inline' : 'none' }}
    >
      <div className={styles[dark ? 'mousey_dark' : 'mousey']}>
        <div className={styles[dark ? 'scroller_dark' : 'scroller']} />
      </div>
    </div>
  );
};

ScrollDownButton.propTypes = {
  dark: bool,
};

ScrollDownButton.defaultProps = {
  dark: false,
};

export default ScrollDownButton;
