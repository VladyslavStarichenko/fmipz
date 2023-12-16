// Modules
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import PresentationsView from './Presentations.view';

// Hooks
import useIsCodePage from 'Hooks/useIsCodePage';
import useIsDesktop from 'Hooks/useIsDesktop';
import useIsPresentationPage from 'Hooks/useIsPresentationPage';

export function PresentationsContainer() {
  const navigate = useNavigate();

  const isCodePage = useIsCodePage();

  const isPresentationPage = useIsPresentationPage();

  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (isPresentationPage || isCodePage) return;
    navigate('/presentation/0');
  }, [isCodePage, isPresentationPage, navigate]);

  return (
    <PresentationsView
      isDesktop={isDesktop}
    />
  );
}

export default PresentationsContainer;
