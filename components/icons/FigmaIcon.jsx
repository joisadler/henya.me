import { string } from 'prop-types';
import { forwardRef } from 'react';

const FigmaIcon = forwardRef(({ className, color, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      version="1.1"
      id="FigmaIcon_Layer_1"
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
            d="M292.51,15c42.11,0,76.36,34.26,76.36,76.36v201.14c0,42.11-34.26,76.36-76.36,76.36H91.36
			c-42.11,0-76.36-34.26-76.36-76.36V91.36C15,49.26,49.26,15,91.36,15H292.51 M292.51,5H91.36C43.67,5,5,43.67,5,91.36v201.14
			c0,47.7,38.67,86.36,86.36,86.36h201.14c47.7,0,86.36-38.67,86.36-86.36V91.36C378.87,43.67,340.21,5,292.51,5L292.51,5z"
          />
        </g>
        <g>
          <path
            className="st1"
            d="M227.72,155.95h-71.58c-20.15,0-36.49-16.34-36.49-36.49v0c0-20.15,16.34-36.49,36.49-36.49h71.58
			c20.15,0,36.49,16.34,36.49,36.49v0C264.22,139.62,247.88,155.95,227.72,155.95z"
          />
          <path
            className="st1"
            d="M191.94,229.32h-35.79c-20.15,0-36.49-16.34-36.49-36.49v0c0-20.15,16.34-36.49,36.49-36.49h35.79V229.32z"
          />
          <circle className="st1" cx="228.33" cy="191.78" r="35.88" />
          <path
            className="st1"
            d="M191.42,265.02c0,19.82-16.06,35.88-35.88,35.88s-35.88-16.06-35.88-35.88c0-19.82,16.06-35.88,35.88-35.88
			c8.94,0,36.14,0.19,36.14,0.19S191.42,254.15,191.42,265.02z"
          />
        </g>
      </g>
    </svg>
  );
});

FigmaIcon.propTypes = {
  className: string.isRequired,
  color: string,
};

FigmaIcon.defaultProps = {
  color: '#FFFFFF',
};

export default FigmaIcon;
