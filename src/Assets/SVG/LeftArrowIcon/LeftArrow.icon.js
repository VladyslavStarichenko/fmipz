// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

export function LeftArrowIcon(props) {
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
        d="M10.5 19.5L11.5575 18.4425L5.8725
        12.75H21V11.25H5.8725L11.5575 5.5575L10.5
        4.5L3 12L10.5 19.5Z"
        fill={fill}
      />
    </svg>
  );
}

LeftArrowIcon.propTypes = {
  fill: PropTypes.string,
};

LeftArrowIcon.defaultProps = {
  fill: '#000000',
};

export default memo(LeftArrowIcon);
