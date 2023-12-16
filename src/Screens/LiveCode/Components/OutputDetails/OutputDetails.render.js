// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import OutputDetail from './Components/OutputDetail';

export function OutputDetailsRender(props) {
  const { formattedOutputDetails } = props;

  return formattedOutputDetails.map((formattedOutputDetail, idx) => {
    if (!formattedOutputDetail.value) return null;

    return (
      <OutputDetail
        key={idx}
        title={formattedOutputDetail.title}
        value={formattedOutputDetail.value}
      />
    );
  });
}

const formattedOptionPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
});

OutputDetailsRender.propTypes = {
  formattedOutputDetails: PropTypes.arrayOf(
    formattedOptionPropType,
  ).isRequired,
};

export default memo(OutputDetailsRender);
