// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

export function RightArrowIcon(props) {
  const { fill } = props;

  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 19.5L12.4425 18.4425L18.1275
        12.75H3V11.25H18.1275L12.4425 5.5575L13.5
        4.5L21 12L13.5 19.5Z"
        fill={fill}
      />
    </svg>
  );
}

RightArrowIcon.propTypes = {
  fill: PropTypes.string,
};

RightArrowIcon.defaultProps = {
  fill: '#000000',
};

export default memo(RightArrowIcon);
