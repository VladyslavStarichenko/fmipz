// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import Option from './Components/Option';

// Helpers
import hasOptions from 'Helpers/hasOptions';

export function SideBarRender(props) {
  const { options } = props;

  if (!hasOptions(options)) return null;

  return options.map((option, idx) => {
    return (
      <Option
        idx={idx}
        key={idx}
        title={option.title}
        type={option.type}
      />
    );
  });
}

const optionPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}).isRequired;

SideBarRender.propTypes = {
  options: PropTypes.arrayOf(
    optionPropType,
  ).isRequired,
};

export default memo(SideBarRender);
