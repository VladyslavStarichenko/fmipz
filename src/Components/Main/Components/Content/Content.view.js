// Components
import ToggleContentPanel from './Components/ToggleContentPanel';

// Renders
import ContentRender from './Content.render';

// Styles
import s from './Content.module.scss';

export function ContentView() {
  return (
    <div className={s['container']}>
      <ToggleContentPanel />
      <ContentRender />
    </div>
  );
}

export default ContentView;
