// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'Components/Button';

export function PresentationsButtonView(props) {
  const { onClick } = props;

  return (
    <Button
      onClick={onClick}
      type="button"
    >
      Презентації
    </Button>
  );
}

PresentationsButtonView.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(PresentationsButtonView);
