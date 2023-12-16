// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Components
import LeftArrow from './Components/LeftArrow';
import RightArrow from './Components/RightArrow';

// Styles
import s from './Slides.module.scss';

export function DocumentViewerView(props) {
  const {
    setSlideIndex,
    slideIndex,
    slides,
    slidesQuantity,
  } = props;

  return (
    <div className={s['container']}>
      <div className={s['container__image-wrapper']}>
        <img
          alt="Slide"
          className={s['container__image-wrapper__image']}
          src={slides[slideIndex]}
        />
        <LeftArrow
          setSlideIndex={setSlideIndex}
          slideIndex={slideIndex}
        />
        <RightArrow
          setSlideIndex={setSlideIndex}
          slideIndex={slideIndex}
          slidesQuantity={slidesQuantity}
        />
      </div>
      <div className={s['container__controls']}>
        {slides.map((_, idx) => {
          const className = cx(s['container__controls__control'], {
            [s['container__controls__control--selected']]: slideIndex === idx,
          });

          return (
            <button
              className={className}
              key={idx}
              onClick={() => setSlideIndex(idx)}
              type="button"
            >
            </button>
          );
        })}
      </div>
    </div>
  );
}

DocumentViewerView.propTypes = {
  setSlideIndex: PropTypes.func.isRequired,
  slideIndex: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  slidesQuantity: PropTypes.number.isRequired,
};

export default memo(DocumentViewerView);
