// Modules
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Components
import ToggleOption from '../ToggleOption';

// Hooks
import useIsPresentationPage from 'Hooks/useIsPresentationPage';

export function PresentationToggleContainer() {
  const { presentationId } = useParams();

  const navigate = useNavigate();

  const onPresentationToggleHandler = useCallback(() => {
    navigate(`/presentation/${presentationId}`);
  }, [navigate, presentationId]);

  const isPresentationPage = useIsPresentationPage();

  return (
    <ToggleOption
      isSelected={isPresentationPage}
      onToggle={onPresentationToggleHandler}
      title="Презентація"
    />
  );
}

export default PresentationToggleContainer;
