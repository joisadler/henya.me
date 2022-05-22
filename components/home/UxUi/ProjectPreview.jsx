/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { string, number, arrayOf, bool, node } from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { desktop_breakpoint } from 'config/constants';
import styles from './uxui.module.scss';
import RightArrowIcon from '../../icons/RightArrowIcon';

const tagBackgroundColors = {
  'UX/UI': '#F3E6FF',
  Website: '#FCF6E7',
  Mobile: '#FFE5EA',
  Rebranding: '#FAFAFB',
};

const tagTextColors = {
  'UX/UI': '#A345FB',
  Website: '#FBBC41',
  Mobile: '#FF2E59',
  Rebranding: '#04A5E0',
};

const UxUiProjectPreview = ({
  id,
  preview_image_filename,
  name,
  tags,
  about,
  comingSoon,
}) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${desktop_breakpoint}px)`,
  });

  const previewTopRef = useRef(null);
  const previewInfoRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    if (isMobile) return;
    if (!previewTopRef?.current || !previewInfoRef?.current) return;
    const previewHeight = containerRef.current.offsetHeight;
    const previewTopHeight = previewTopRef.current.offsetHeight;
    previewInfoRef.current.style.minHeight = `${previewTopHeight}px`;
    previewInfoRef.current.style.height = `${
      previewHeight - previewTopHeight
    }px`;
  }, [window.offsetHeight, window.offsetWigth, isMobile]);

  const buttonText = comingSoon ? 'Coming soon...' : 'View Case Study';

  const Wrapper = ({ children }) =>
    !comingSoon ? (
      <a href={`/uxui_projects/${id}`}>{children}</a>
    ) : (
      <div>{children}</div>
    );

  Wrapper.propTypes = {
    children: node.isRequired,
  };

  return (
    <li className={styles.project_preview} ref={containerRef}>
      <Wrapper className={styles.project_preview_link}>
        <div className={styles.project_preview_top} ref={previewTopRef}>
          <picture className={styles.project_preview_image}>
            <source
              srcSet={`${preview_image_filename}.webp`}
              type="image/webp"
            />
            <source srcSet={`${preview_image_filename}.png`} type="image/png" />
            <img
              style={{ width: '100%', height: '100%' }}
              src={`${preview_image_filename}.png`}
              alt={name}
            />
          </picture>
        </div>
        <div className={styles.project_preview_info} ref={previewInfoRef}>
          <div className={styles.tags}>
            {tags.map((tag) => {
              return (
                <span
                  key={tag}
                  className={styles.tag}
                  style={{
                    color: tagTextColors[tag],
                    backgroundColor: tagBackgroundColors[tag],
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <h1 className={styles.project_title}>{name}</h1>
          <p className={styles.project_description}>{about}</p>
          <div
            className={styles.view_case_study_container}
            data-autowidth={Boolean(comingSoon)}
          >
            <span className={styles.view_case_study}>{buttonText}</span>
            {!comingSoon && (
              <RightArrowIcon
                className={styles.right_arrow_icon}
                color="#fff"
              />
            )}
          </div>
        </div>
      </Wrapper>
    </li>
  );
};

UxUiProjectPreview.propTypes = {
  id: number.isRequired,
  preview_image_filename: string.isRequired,
  name: string.isRequired,
  tags: arrayOf(string).isRequired,
  about: string.isRequired,
  comingSoon: bool.isRequired,
};

export default UxUiProjectPreview;
