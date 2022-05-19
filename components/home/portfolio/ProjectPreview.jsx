/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { string, arrayOf } from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { desktop_breakpoint } from 'config/constants';
import styles from './portfolio.module.scss';
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

const ProjectPreview = ({ id, preview_image, name, tags, about }) => {
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

  return (
    <li className={styles.project_preview} ref={containerRef}>
      <a href={`/projects/${id}`} className={styles.project_preview_link}>
        <div className={styles.project_preview_top} ref={previewTopRef}>
          <img
            src={preview_image}
            alt={name}
            className={styles.project_preview_image}
          />
        </div>
        <div className={styles.project_preview_info} ref={previewInfoRef}>
          <div className={styles.tags}>
            {tags.map((tag) => {
              return (
                <span
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
          <div className={styles.view_case_study_container}>
            <span className={styles.view_case_study}>View Case Study</span>
            <RightArrowIcon className={styles.right_arrow_icon} color="#fff" />
          </div>
        </div>
      </a>
    </li>
  );
};

ProjectPreview.propTypes = {
  id: string.isRequired,
  preview_image: string.isRequired,
  name: string.isRequired,
  tags: arrayOf(string).isRequired,
  about: string.isRequired,
};

export default ProjectPreview;
