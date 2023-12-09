// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'Components/Button';

export function CodeEditorButtonView(props) {
  const { onClick } = props;

  return (
    <Button
      onClick={onClick}
      type="button"
    >
      Редактор коду
    </Button>
  );
}

CodeEditorButtonView.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(CodeEditorButtonView);
