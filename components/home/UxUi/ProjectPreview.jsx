/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import {
  string,
  number,
  // arrayOf,
  bool,
  node,
} from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import {
  desktop_breakpoint,
  // text_red,
} from 'config/constants';
import WebpPicture from 'components/common/WebpPicture';
import styles from './uxui.module.scss';
import RightArrowIcon from '../../icons/RightArrowIcon';

// const tagBackgroundColors = {
//   'UX/UI': '#F3E6FF',
//   Website: '#FCF6E7',
//   Mobile: '#FFE5EA',
//   Rebranding: '#FAFAFB',
// };

// const tagTextColors = {
//   'UX/UI': '#A345FB',
//   Website: '#FBBC41',
//   Mobile: text_red,
//   Rebranding: '#04A5E0',
// };

const UxUiProjectPreview = ({
  id,
  preview_image_filename,
  name,
  // tags,
  short_about,
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
      <a href={`/uxui_project/${id}`}>{children}</a>
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
          <WebpPicture
            containerClassName={styles.project_preview_picture}
            imgClassName={styles.project_preview_image}
            pathname="/images/portfolio/uxui/"
            filename={preview_image_filename}
            alt={name}
          />
        </div>
        <div className={styles.project_preview_info} ref={previewInfoRef}>
          {/* <div className={styles.tags}>
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
          </div> */}
          <h1 className={styles.project_title}>{name}</h1>
          <p className={styles.project_description}>{short_about}</p>
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
  // tags: arrayOf(string).isRequired,
  short_about: string.isRequired,
  comingSoon: bool.isRequired,
};

export default UxUiProjectPreview;
