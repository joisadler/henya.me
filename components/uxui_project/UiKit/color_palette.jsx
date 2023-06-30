import { arrayOf, string } from 'prop-types';

import styles from './ui_kit.module.scss';

const ColorPalette = ({ color_palette }) => {
  const shouldRenderColorPalette = color_palette && color_palette.length > 0;
  if (!shouldRenderColorPalette) return null;

  return (
    <>
      <h3 className={styles.color_palette_title}>COLOR PALETTE</h3>
      <div className={styles.color_palette}>
        {color_palette.map(color => (
          <div
            className={styles.color}
            key={color}
            aria-label={color}
            style={{ '--color': color }}
          />
        ))}
      </div>
    </>
  );
};

ColorPalette.propTypes = {
  color_palette: arrayOf(string),
};

ColorPalette.defaultProps = {
  color_palette: [],
};

export default ColorPalette;
