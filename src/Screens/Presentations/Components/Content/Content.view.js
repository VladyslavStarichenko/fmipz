// Components
import SideBar from '../SideBar';
import ToggleContentPanel from './Components/ToggleContentPanel';

// Hooks
import useIsDesktop from 'Hooks/useIsDesktop';

// Renders
import ContentRender from './Content.render';

// Styles
import s from './Content.module.scss';

export function ContentView() {
  const isDesktop = useIsDesktop();

  return (
    <div className={s['container']}>
      <ToggleContentPanel />
      <ContentRender />
      {!isDesktop && <SideBar />}
    </div>
  );
}

export default ContentView;
