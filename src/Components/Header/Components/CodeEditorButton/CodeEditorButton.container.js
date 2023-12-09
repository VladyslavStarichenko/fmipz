// Modules
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import CodeEditorButtonView from './CodeEditorButton.view';

export function CodeEditorButtonContainer() {
  const navigate = useNavigate();

  const onClickHandler = useCallback(() => {
    navigate('/live-code');
  }, [navigate]);

  return (
    <CodeEditorButtonView
      onClick={onClickHandler}
    />
  );
}

export default CodeEditorButtonContainer;
