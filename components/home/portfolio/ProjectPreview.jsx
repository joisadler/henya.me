import React, { useRef, useEffect } from 'react';
import { string, arrayOf } from 'prop-types';
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
  const previewTopRef = useRef(null);
  const previewInfoRef = useRef(null);
  useEffect(() => {
    if (!previewTopRef?.current || !previewInfoRef?.current) return;
    const height = previewTopRef.current.offsetHeight;
    previewInfoRef.current.style.minHeight = `${height}px`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.offsetHeight, window.offsetWigth]);

  return (
    <li className={styles.project_preview}>
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
          <span className={styles.view_case_study}>View Case Study</span>
          <RightArrowIcon className={styles.right_arrow_icon} />
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
