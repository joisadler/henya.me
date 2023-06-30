import { forwardRef } from 'react';
import { string } from 'prop-types';

const AdobeIllustratorIcon = forwardRef(
  ({ className, color, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        version="1.1"
        id="AdobeIllustratorIcon_Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 383.87 383.87"
        style={{ 'enable-background:new': '0 0 383.87 383.87;' }}
        xmlSpace="preserve"
        {...props}
      >
        <style type="text/css">
          {`.st0{fill:${color};}`}
          {`.st1{fill:none;stroke:${color};stroke-width:12;stroke-linecap:round;stroke-miterlimit:10;}`}
        </style>
        <g>
          <g>
            <path
              className="st0"
              d="M292.51,15c42.11,0,76.36,34.26,76.36,76.36v201.14c0,42.11-34.26,76.37-76.36,76.37H91.36
			c-42.11,0-76.36-34.26-76.36-76.37V91.37C15,49.26,49.26,15,91.36,15H292.51 M292.51,5H91.36C43.67,5,5,43.67,5,91.37v201.14
			c0,47.7,38.67,86.37,86.36,86.37h201.14c47.7,0,86.36-38.67,86.36-86.37V91.37C378.87,43.67,340.21,5,292.51,5L292.51,5z"
            />
          </g>
          <g>
            <path
              className="st0"
              d="M208.07,266.2h23.87l-47.96-138.58H157.9L109.94,266.2h22.98l12.42-39.56h50.42L208.07,266.2z M150.73,209.5
			l5.85-18.62c2.5-7.62,4.86-15.27,7.07-22.96c2.21-7.69,4.34-15.41,6.41-23.17h0.88c2.21,7.76,4.45,15.48,6.74,23.17
			c2.28,7.69,4.6,15.34,6.96,22.96l5.79,18.62H150.73z"
            />
            <path
              className="st0"
              d="M260.23,143.28c-3.83,0-7.07-1.23-9.72-3.7c-2.65-2.47-3.98-5.53-3.98-9.2c0-3.81,1.33-6.88,3.98-9.2
			c2.65-2.33,5.89-3.49,9.72-3.49c4.12,0,7.44,1.16,9.95,3.49c2.5,2.33,3.76,5.4,3.76,9.2c0,3.67-1.25,6.74-3.76,9.2
			C267.67,142.04,264.35,143.28,260.23,143.28z M248.96,266.2V162.74h22.32V266.2H248.96z"
            />
          </g>
        </g>
      </svg>
    );
  }
);

AdobeIllustratorIcon.propTypes = {
  className: string.isRequired,
  color: string,
};

AdobeIllustratorIcon.defaultProps = {
  color: '#FFFFFF',
};

export default AdobeIllustratorIcon;
