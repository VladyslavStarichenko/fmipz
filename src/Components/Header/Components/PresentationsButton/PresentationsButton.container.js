// Modules
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import PresentationsButtonView from './PresentationsButton.view';

export function PresentationsButtonContainer() {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate('/presentation/0');
  }, [navigate]);

  return (
    <PresentationsButtonView
      onClick={onClickHandler}
    />
  );
}

export default PresentationsButtonContainer;
