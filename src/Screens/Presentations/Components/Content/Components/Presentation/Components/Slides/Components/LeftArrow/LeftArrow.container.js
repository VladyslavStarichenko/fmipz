// Modules
import { useCallback } from 'react';
import PropTypes from 'prop-types';

// Components
import LeftArrowView from './LeftArrow.view';

export function LeftArrowContainer(props) {
  const { setSlideIndex, slideIndex } = props;

  const STEP = 1;

  const onLeftArrowClickHandler = useCallback(() => {
    if (slideIndex === 0) return;

    const previousSlideIndex = slideIndex - STEP;
    setSlideIndex(previousSlideIndex);
  }, [setSlideIndex, slideIndex]);

  return (
    <LeftArrowView
      onLeftArrowClick={onLeftArrowClickHandler}
      slideIndex={slideIndex}
    />
  );
}

LeftArrowContainer.propTypes = {
  setSlideIndex: PropTypes.func.isRequired,
  slideIndex: PropTypes.number.isRequired,
};

export default LeftArrowContainer;
