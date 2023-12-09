// Modules
import { useLocation } from 'react-router-dom';

// Helpers
import isPresentationPage from 'Helpers/isPresentationPage';

export function useIsPresentationPage() {
  const { pathname } = useLocation();

  return isPresentationPage(pathname);
}

export default useIsPresentationPage;
