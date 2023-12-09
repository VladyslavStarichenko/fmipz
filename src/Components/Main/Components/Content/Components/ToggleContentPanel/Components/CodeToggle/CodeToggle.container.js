// Modules
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Components
import ToggleOption from '../ToggleOption';

// Hooks
import useIsCodePage from 'Hooks/useIsCodePage';

export function CodeToggleContainer() {
  const { presentationId } = useParams();

  const navigate = useNavigate();

  const onCodeToggleHandler = useCallback(() => {
    navigate(`/presentation/${presentationId}/code`);
  }, [navigate, presentationId]);

  const isCodePage = useIsCodePage();

  return (
    <ToggleOption
      isSelected={isCodePage}
      onToggle={onCodeToggleHandler}
      title="Код"
    />
  );
}

export default CodeToggleContainer;
