// Modules
import { memo } from 'react';

// Components
import ControlSection from '../ControlSection';
import Description from './Components/Description';
import Slides from './Components/Slides';

// Styles
import s from './Presentation.module.scss';

export function PresentationView() {
  return (
    <div className={s['container']}>
      <Slides />
      <Description />
      <ControlSection />
    </div>
  );
}

export default memo(PresentationView);
