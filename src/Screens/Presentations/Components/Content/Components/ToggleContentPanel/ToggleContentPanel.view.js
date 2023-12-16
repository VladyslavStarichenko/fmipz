// Modules
import { memo } from 'react';

// Components
import CodeToggle from './Components/CodeToggle';
import PresentationToggle from './Components/PresentationToggle';

// Styles
import s from './ToggleContentPanel.module.scss';

export function ToggleContentPanelView() {
  return (
    <div className={s['container']}>
      <PresentationToggle />
      <CodeToggle />
    </div>
  );
}

export default memo(ToggleContentPanelView);
