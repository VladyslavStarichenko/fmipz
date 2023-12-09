// Components
import Presentation from './Components/Presentation';
import PresentationCode from './Components/PresentationCode';

// Hooks
import useIsCodePage from 'Hooks/useIsCodePage';
import useIsPresentationPage from 'Hooks/useIsPresentationPage';

export function ContentRender() {
  const isCodePage = useIsCodePage();

  const isPresentationPage = useIsPresentationPage();

  switch (true) {
    case isCodePage: {
      return <PresentationCode />;
    }
    case isPresentationPage: {
      return <Presentation />;
    }
    default: {
      return null;
    }
  }
}

export default ContentRender;
