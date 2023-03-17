import { useState, useEffect, useRef } from 'react';
import AfterEffectsIcon from 'components/icons/AfterEffectsIcon';
import InDesignIcon from 'components/icons/InDesignIcon';
import AdobeIllustratorIcon from 'components/icons/AdobeIllustratorIcon';
import FigmaIcon from 'components/icons/FigmaIcon';
import PremiereIcon from 'components/icons/PremiereIcon';
import HTMLIcon from 'components/icons/HTMLIcon';
import CSSIcon from 'components/icons/CSSIcon';
import PhotoshopIcon from 'components/icons/PhotoshopIcon';
import useWindowSize from 'hooks/useWindowSize';
import getRandomNumber from 'utils/getRandomNumber';
import styles from './main.module.scss';

const ToolIcons = () => {
  const windowSize = useWindowSize();
  const { width: windowWidth } = windowSize;
  const containerRef = useRef(null);
  const iconContainerRef0 = useRef(null);
  const [iconSize, setIconSize] = useState(0);
  const [delay1, setDelay1] = useState(0);
  const [delay2, setDelay2] = useState(0);
  const [delay3, setDelay3] = useState(0);
  const [delay4, setDelay4] = useState(0);
  const [delay5, setDelay5] = useState(0);
  const [delay6, setDelay6] = useState(0);
  const [delay7, setDelay7] = useState(0);
  const [delay8, setDelay8] = useState(0);
  const [top1, setTop1] = useState(0);
  const [top2, setTop2] = useState(0);
  const [top3, setTop3] = useState(0);
  const [top4, setTop4] = useState(0);
  const [top5, setTop5] = useState(0);
  const [top6, setTop6] = useState(0);
  const [top7, setTop7] = useState(0);
  const [top8, setTop8] = useState(0);
  const [left1, setLeft1] = useState(0);
  const [left2, setLeft2] = useState(0);
  const [left3, setLeft3] = useState(0);
  const [left4, setLeft4] = useState(0);
  const [left5, setLeft5] = useState(0);
  const [left6, setLeft6] = useState(0);
  const [left7, setLeft7] = useState(0);
  const [left8, setLeft8] = useState(0);
  const [visibility1, setVisibility1] = useState('hidden');
  const [visibility2, setVisibility2] = useState('hidden');
  const [visibility3, setVisibility3] = useState('hidden');
  const [visibility4, setVisibility4] = useState('hidden');
  const [visibility5, setVisibility5] = useState('hidden');
  const [visibility6, setVisibility6] = useState('hidden');
  const [visibility7, setVisibility7] = useState('hidden');
  const [visibility8, setVisibility8] = useState('hidden');

  useEffect(() => {
    const iconContainerSize = iconContainerRef0.current.offsetWidth;
    const size = iconContainerSize * 0.8;
    setIconSize(size);
    const distance = iconContainerSize - size;
    setTop1(getRandomNumber(0, distance));
    setTop2(getRandomNumber(0, distance));
    setTop3(getRandomNumber(0, distance));
    setTop4(getRandomNumber(0, distance));
    setTop5(getRandomNumber(0, distance));
    setTop6(getRandomNumber(0, distance));
    setTop7(getRandomNumber(0, distance));
    setTop8(getRandomNumber(0, distance));
    setLeft1(getRandomNumber(0, distance));
    setLeft2(getRandomNumber(0, distance));
    setLeft3(getRandomNumber(0, distance));
    setLeft4(getRandomNumber(0, distance));
    setLeft5(getRandomNumber(0, distance));
    setLeft6(getRandomNumber(0, distance));
    setLeft7(getRandomNumber(0, distance));
    setLeft8(getRandomNumber(0, distance));
    setDelay1(getRandomNumber(-5000, 5000));
    setDelay2(getRandomNumber(-5000, 5000));
    setDelay3(getRandomNumber(-5000, 5000));
    setDelay4(getRandomNumber(-5000, 5000));
    setDelay5(getRandomNumber(-5000, 5000));
    setDelay6(getRandomNumber(-5000, 5000));
    setDelay7(getRandomNumber(-5000, 5000));
    setDelay8(getRandomNumber(-5000, 5000));
    setVisibility1('visible');
    setVisibility2('visible');
    setVisibility3('visible');
    setVisibility4('visible');
    setVisibility5('visible');
    setVisibility6('visible');
    setVisibility7('visible');
    setVisibility8('visible');
  }, [windowWidth]);

  return (
    <div className={styles.tool_icons_container}>
      <div className={styles.tool_icons} ref={containerRef}>
        <div className={styles.tool_icon_container} ref={iconContainerRef0}>
          <AfterEffectsIcon
            className={styles.tool_icon}
            style={{
              top: `${top1}px`,
              left: `${left1}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              visibility: `${visibility1}`,
              '--animationDelay': `${delay1}ms`,
            }}
          />
        </div>
        <div className={styles.tool_icon_container} />
        <div className={styles.tool_icon_container}>
          <AdobeIllustratorIcon
            className={styles.tool_icon}
            style={{
              top: `${top3}px`,
              left: `${left3}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              visibility: `${visibility2}`,
              '--animationDelay': `${delay2}ms`,
            }}
          />
        </div>
        <div className={styles.tool_icon_container} />
        <div className={styles.tool_icon_container} />
        <div className={styles.tool_icon_container}>
          <HTMLIcon
            className={styles.tool_icon}
            style={{
              top: `${top6}px`,
              left: `${left6}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              visibility: `${visibility3}`,
              '--animationDelay': `${delay3}ms`,
            }}
          />
        </div>
        <div className={styles.tool_icon_container} />
        <div className={styles.tool_icon_container}>
          <PhotoshopIcon
            className={styles.tool_icon}
            style={{
              top: `${top8}px`,
              left: `${left8}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              visibility: `${visibility4}`,
              '--animationDelay': `${delay4}ms`,
            }}
          />
        </div>
        <div className={styles.tool_icon_container}>
          <PremiereIcon
            className={styles.tool_icon}
            style={{
              top: `${top5}px`,
              left: `${left5}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              visibility: `${visibility5}`,
              '--animationDelay': `${delay5}ms`,
            }}
          />
        </div>
        <div className={styles.tool_icon_container} />
        <div className={styles.tool_icon_container}>
          <FigmaIcon
            className={styles.tool_icon}
            style={{
              top: `${top4}px`,
              left: `${left4}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              visibility: `${visibility6}`,
              '--animationDelay': `${delay6}ms`,
            }}
          />
        </div>
        <div className={styles.tool_icon_container} />
        <div className={styles.tool_icon_container} />
        <div className={styles.tool_icon_container}>
          <CSSIcon
            className={styles.tool_icon}
            style={{
              top: `${top7}px`,
              left: `${left7}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              visibility: `${visibility7}`,
              '--animationDelay': `${delay7}ms`,
            }}
          />
        </div>
        <div className={styles.tool_icon_container} />
        <div className={styles.tool_icon_container}>
          <InDesignIcon
            className={styles.tool_icon}
            style={{
              top: `${top2}px`,
              left: `${left2}px`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              visibility: `${visibility8}`,
              '--animationDelay': `${delay8}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ToolIcons;
