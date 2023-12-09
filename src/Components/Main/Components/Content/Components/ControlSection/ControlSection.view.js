// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'Components/Button';

// Styles
import s from './ControlSection.module.scss';

export function ControlSectionView(props) {
  const { onClick } = props;

  return (
    <div className={s['container']}>
      <Button
        onClick={onClick}
        type="button"
      >
        Наступна презентація
      </Button>
    </div>
  );
}

ControlSectionView.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(ControlSectionView);
