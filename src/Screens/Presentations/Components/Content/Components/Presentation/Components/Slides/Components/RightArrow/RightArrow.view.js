// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Assets
import RightArrowIcon from 'Assets/SVG/RightArrowIcon';

// Styles
import s from './RightArrow.module.scss';

export function RightArrowView(props) {
  const { lastSlideIdx, onRightArrowClick, slideIndex } = props;

  const containerClassNames = cx(s['container'], {
    [s['container--disabled']]: slideIndex === lastSlideIdx,
  });

  return (
    <div
      className={containerClassNames}
      onClick={onRightArrowClick}
      role="presentation"
    >
      <button
        className={s['container__button']}
        type="button"
      >
        <RightArrowIcon fill="#F1F3F6" />
      </button>
    </div>
  );
}

RightArrowView.propTypes = {
  lastSlideIdx: PropTypes.number.isRequired,
  onRightArrowClick: PropTypes.func.isRequired,
  slideIndex: PropTypes.number.isRequired,
};

export default memo(RightArrowView);
