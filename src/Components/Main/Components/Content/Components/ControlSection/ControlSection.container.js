// Modules
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import ControlSectionView from './ControlSection.view';

// Constants
import PRESENTATIONS from 'Constants/presentations';

// Hooks
import useNextPresentationId from 'Hooks/useNextPresentationId/useNextPresentationId';
import usePresentation from 'Hooks/usePresentation/usePresentation';

export function ControlSectionContainer() {
  const { setSelectedPresentation } = usePresentation();

  const nextPresentationId = useNextPresentationId();

  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    if (nextPresentationId === null) return;
    setSelectedPresentation(PRESENTATIONS[nextPresentationId]);
    navigate(`/presentation/${nextPresentationId}`);
  }, [navigate, nextPresentationId, setSelectedPresentation]);

  if (nextPresentationId === null) return null;

  return (
    <ControlSectionView
      onClick={onClickHandler}
    />
  );
}

export default ControlSectionContainer;
