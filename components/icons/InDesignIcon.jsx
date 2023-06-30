import { forwardRef } from 'react';
import { string } from 'prop-types';

const InDesignIcon = forwardRef(({ className, color, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      version="1.1"
      id="InDesignIcon_Layer_1"
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
            d="M292.51,15c42.11,0,76.36,34.26,76.36,76.37v201.14c0,42.11-34.26,76.36-76.36,76.36H91.36
			c-42.11,0-76.36-34.26-76.36-76.36V91.36C15,49.26,49.26,15,91.36,15H292.51 M292.51,5H91.36C43.67,5,5,43.67,5,91.36v201.14
			c0,47.7,38.67,86.36,86.36,86.36h201.14c47.7,0,86.36-38.67,86.36-86.36V91.36C378.87,43.67,340.21,5,292.51,5L292.51,5z"
          />
        </g>
        <g>
          <path className="st0" d="M125.3,265.92V126.87h20.26v139.05H125.3z" />
          <path
            className="st0"
            d="M211.5,268.47c-12.05,0-21.72-4.78-29-14.33c-7.28-9.55-10.92-22.89-10.92-40.02
			c0-11.32,1.95-21.05,5.86-29.19c3.9-8.14,9.04-14.4,15.39-18.79c6.36-4.38,13.11-6.58,20.26-6.58c5.69,0,10.53,1.03,14.5,3.08
			c3.97,2.05,7.88,4.92,11.72,8.6l-0.79-17.2V115.4h20.06v150.52h-16.48l-1.59-11.68h-0.6c-3.57,3.82-7.81,7.15-12.71,9.98
			C222.29,267.05,217.06,268.47,211.5,268.47z M216.27,250.64c4.1,0,7.98-1.06,11.62-3.18c3.64-2.12,7.18-5.31,10.63-9.55v-50.95
			c-3.58-3.54-7.12-6.01-10.63-7.43c-3.51-1.41-7.12-2.12-10.82-2.12c-4.5,0-8.64,1.45-12.41,4.35c-3.77,2.9-6.79,7.11-9.04,12.63
			c-2.25,5.52-3.38,12.03-3.38,19.53c0,11.75,2.12,20.8,6.36,27.17C202.83,247.45,208.72,250.64,216.27,250.64z"
          />
        </g>
      </g>
    </svg>
  );
});

InDesignIcon.propTypes = {
  className: string.isRequired,
  color: string,
};

InDesignIcon.defaultProps = {
  color: '#FFFFFF',
};

export default InDesignIcon;
