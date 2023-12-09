// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Renders
import OutputDetailsRender from './OutputDetails.render';

// Styles
import s from './OutputDetails.module.scss';

export function OutputDetailsView(props) {
  const { formattedOutputDetails } = props;

  return (
    <div className={s['container']}>
      <OutputDetailsRender
        formattedOutputDetails={formattedOutputDetails}
      />
    </div>
  );
}

const formattedOptionPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
});

OutputDetailsView.propTypes = {
  formattedOutputDetails: PropTypes.arrayOf(
    formattedOptionPropType
  ).isRequired,
};

export default memo(OutputDetailsView);
