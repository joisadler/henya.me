import { string } from 'prop-types';
import { forwardRef } from 'react';

const HTMLIcon = forwardRef(({ className, color, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      version="1.1"
      id="HTMLIcon_Layer_1"
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
            d="M101.85,149.28v85.31H86.73V196.8H49.06v37.79H33.88v-85.31h15.18v35.39h37.68v-35.39H101.85z"
          />
          <path
            className="st0"
            d="M180.13,161.53h-26.54v73.07h-15.12v-73.07h-26.25v-12.25h41.37h26.54V161.53z"
          />
          <path
            className="st0"
            d="M279.04,234.59h-15.12v-27.54l1.46-37.91l-24.84,65.45H229.7l-24.84-65.39l1.52,37.85v27.54H191.2v-85.31
			h12.89h6.8l24.26,64.92l24.2-64.92h19.69V234.59z"
          />
          <path
            className="st0"
            d="M349.99,222.41v12.19h-42.6h-11.13v-85.31h15.18v73.12H349.99z"
          />
        </g>
        <g>
          <path
            className="st0"
            d="M292.51,15c42.11,0,76.36,34.26,76.36,76.36v201.14c0,42.11-34.26,76.36-76.36,76.36H91.36
			c-42.11,0-76.36-34.26-76.36-76.36V91.37C15,49.26,49.26,15,91.36,15H292.51 M292.51,5H91.36C43.67,5,5,43.67,5,91.37v201.14
			c0,47.7,38.67,86.36,86.36,86.36h201.14c47.7,0,86.36-38.67,86.36-86.36V91.37C378.87,43.67,340.21,5,292.51,5L292.51,5z"
          />
        </g>
      </g>
    </svg>
  );
});

HTMLIcon.propTypes = {
  className: string.isRequired,
  color: string,
};

HTMLIcon.defaultProps = {
  color: '#FFFFFF',
};

export default HTMLIcon;
