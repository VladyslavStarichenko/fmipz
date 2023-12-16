// Modules
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import MainView from './Main.view';

export function MainContainer() {
  const navigate = useNavigate();

  const onBeginLearningClickHandler = useCallback(() => {
    navigate('/presentation/0');
  }, [navigate]);

  return (
    <MainView
      onBeginLearningClick={onBeginLearningClickHandler}
    />
  );
}

export default MainContainer;
