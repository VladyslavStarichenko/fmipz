// Components
import DescriptionView from './Description.view';

// Hooks
import usePresentation from 'Hooks/usePresentation';

export function DescriptionContainer() {
  const { selectedPresentation } = usePresentation();

  return (
    <DescriptionView
      title={selectedPresentation.title}
      type={selectedPresentation.type}
    />
  );
}

export default DescriptionContainer;
