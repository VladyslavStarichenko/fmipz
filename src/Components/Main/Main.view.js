// Components
import Content from './Components/Content';
import SideBar from './Components/SideBar';

// Contexts
import PresentationContextProvider from 'Context/PresentationContext';

// Styles
import s from './Main.module.scss';

export function MainView() {
  return (
    <div className={s['container']}>
      <div className={s['container__content']}>
        <PresentationContextProvider>
          <SideBar />
          <Content />
        </PresentationContextProvider>
      </div>
    </div>
  );
}

export default MainView;
