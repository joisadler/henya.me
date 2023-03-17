import { string } from 'prop-types';
import { forwardRef } from 'react';

const PremiereIcon = forwardRef(({ className, color, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      version="1.1"
      id="PremiereIcon_Layer_1"
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
            d="M104.64,261.46V122.41h40.53c9.96,0,18.8,1.31,26.51,3.93c7.71,2.62,13.75,7.01,18.12,13.16
    c4.37,6.16,6.55,14.47,6.55,24.94c0,10.05-2.15,18.33-6.45,24.84c-4.3,6.51-10.27,11.36-17.91,14.54
    c-7.64,3.18-16.31,4.78-26,4.78h-20.47v52.86H104.64z M125.51,191.19h18.42c10.78,0,18.76-2.19,23.95-6.58
    c5.18-4.38,7.78-11.11,7.78-20.17c0-9.34-2.73-15.78-8.19-19.32c-5.46-3.54-13.58-5.31-24.36-5.31h-17.6V191.19z"
          />
          <path
            className="st0"
            d="M220.49,261.46V157.65h16.99l1.64,18.68h0.61c3.55-6.79,7.81-12.03,12.79-15.71
    c4.98-3.68,10.2-5.52,15.66-5.52c2.46,0,4.54,0.14,6.24,0.42c1.7,0.29,3.31,0.85,4.81,1.7l-3.68,18.68
    c-1.64-0.56-3.17-0.99-4.61-1.27c-1.43-0.28-3.24-0.42-5.42-0.42c-4.09,0-8.36,1.67-12.79,4.99c-4.44,3.33-8.29,9.17-11.57,17.51
    v64.75H220.49z"
          />
        </g>
      </g>
    </svg>
  );
});

PremiereIcon.propTypes = {
  className: string.isRequired,
  color: string,
};

PremiereIcon.defaultProps = {
  color: '#FFFFFF',
};

export default PremiereIcon;
