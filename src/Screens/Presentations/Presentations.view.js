// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import Content from './Components/Content';
import SideBar from './Components/SideBar';

// Contexts
import PresentationContextProvider from 'Context/PresentationContext';

// Styles
import s from './Presentations.module.scss';

export function PresentationsView(props) {
  const { isDesktop } = props;

  return (
    <div className={s['container']}>
      <div className={s['container__content']}>
        <PresentationContextProvider>
          {isDesktop && <SideBar />}
          <Content />
        </PresentationContextProvider>
      </div>
    </div>
  );
}

PresentationsView.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default memo(PresentationsView);
