// Modules
import { useCallback } from 'react';
import PropTypes from 'prop-types';

// Components
import RightArrowView from './RightArrow.view';

export function RightArrowContainer(props) {
  const {
    setSlideIndex,
    slideIndex,
    slidesQuantity,
  } = props;

  const STEP = 1;

  const LAST_SLIDE_IDX = slidesQuantity - 1;

  const onRightArrowClickHandler = useCallback(() => {
    if (slideIndex === LAST_SLIDE_IDX) return;

    const nextSlideIndex = slideIndex + STEP;
    setSlideIndex(nextSlideIndex);
  }, [LAST_SLIDE_IDX, setSlideIndex, slideIndex]);

  return (
    <RightArrowView
      lastSlideIdx={LAST_SLIDE_IDX}
      onRightArrowClick={onRightArrowClickHandler}
      slideIndex={slideIndex}
    />
  );
}

RightArrowContainer.propTypes = {
  setSlideIndex: PropTypes.func.isRequired,
  slideIndex: PropTypes.number.isRequired,
};

export default RightArrowContainer;
