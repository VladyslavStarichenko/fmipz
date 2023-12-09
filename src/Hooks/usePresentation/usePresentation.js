// Modules
import { useContext } from 'react';

// Contexts
import { PresentationContext } from 'Context/PresentationContext/Presentation.context';

export function usePresentation() {
  const presentationContext = useContext(PresentationContext);

  if (!presentationContext) {
    throw new Error('usePresentation must be used within a PresentationProvider.');
  }

  return presentationContext;
}

export default usePresentation;
