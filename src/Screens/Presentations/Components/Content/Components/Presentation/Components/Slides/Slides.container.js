// Modules
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import SlidesView from './Slides.view';

// Helpers
import hasOptions from 'Helpers/hasOptions';

// Hooks
import usePresentation from 'Hooks/usePresentation';

export function SlidesContainer() {
  const { pathname } = useLocation();

  const [slideIndex, setSlideIndex] = useState(0);

  const { selectedPresentation } = usePresentation();

  const { slides } = selectedPresentation;

  useEffect(() => {
    return () => setSlideIndex(0);
  }, [pathname]);

  if (!hasOptions(slides)) return null;

  return (
    <SlidesView
      setSlideIndex={setSlideIndex}
      slideIndex={slideIndex}
      slides={slides}
      slidesQuantity={slides?.length}
    />
  );
}

export default SlidesContainer;
