// Modules
import { useLocation } from 'react-router-dom';

// Helpers
import isCodePage from 'Helpers/isCodePage';

export function useIsCodePage() {
  const { pathname } = useLocation();

  return isCodePage(pathname);
}

export default useIsCodePage;
