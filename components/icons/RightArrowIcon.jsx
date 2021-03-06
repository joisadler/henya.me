import { string } from 'prop-types';

const RightArrowIcon = ({ className, color }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g fill={color}>
          <path d="M10.6128994,3.20970461 L10.7071068,3.29289322 L14.7071068,7.29289322 C15.0675907,7.65337718 15.0953203,8.22060824 14.7902954,8.61289944 L14.7071068,8.70710678 L10.7071068,12.7071068 C10.3165825,13.0976311 9.68341751,13.0976311 9.29289322,12.7071068 C8.93240926,12.3466228 8.90467972,11.7793918 9.20970461,11.3871006 L9.29289322,11.2928932 L11.585,9 L2.37064145,9 C1.88979945,9 1.5,8.55228475 1.5,8 C1.5,7.46612474 1.86424593,7.02996387 2.32287179,7.00147968 L2.37064145,7 L11.585,7 L9.29289322,4.70710678 C8.93240926,4.34662282 8.90467972,3.77939176 9.20970461,3.38710056 L9.29289322,3.29289322 C9.65337718,2.93240926 10.2206082,2.90467972 10.6128994,3.20970461 Z" />
        </g>
      </g>
    </svg>
  );
};

RightArrowIcon.propTypes = {
  className: string.isRequired,
  color: string,
};

RightArrowIcon.defaultProps = {
  color: '#19191C',
};

export default RightArrowIcon;
