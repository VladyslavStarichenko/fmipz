// Modules
import { createContext, useState } from 'react';

// Constants
import PRESENTATIONS from 'Constants/presentations';

export const PresentationContext = createContext({});

const PresentationProvider = PresentationContext.Provider;

export function PresentationContextProvider(props) {
  const { children } = props;

  const [selectedPresentation, setSelectedPresentation] = useState(() => {
    return PRESENTATIONS[0];
  });

  const contextValue = {
    selectedPresentation,
    setSelectedPresentation,
  };

  return (
    <PresentationProvider value={contextValue}>
      {children}
    </PresentationProvider>
  );
}

export default PresentationContextProvider;
