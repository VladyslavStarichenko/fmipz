// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Assets
import LeftArrowIcon from 'Assets/SVG/LeftArrowIcon';

// Styles
import s from './LeftArrow.module.scss';

export function LeftArrowView(props) {
  const { onLeftArrowClick, slideIndex } = props;

  const containerClassNames = cx(s['container'], {
    [s['container--disabled']]: slideIndex === 0,
  });

  return (
    <div
      className={containerClassNames}
      onClick={onLeftArrowClick}
      role="presentation"
    >
      <button
        className={s['container__button']}
        type="button"
      >
        <LeftArrowIcon fill="#F1F3F6" />
      </button>
    </div>
  );
}

LeftArrowView.propTypes = {
  onLeftArrowClick: PropTypes.func.isRequired,
  slideIndex: PropTypes.number.isRequired,
};

export default memo(LeftArrowView);
