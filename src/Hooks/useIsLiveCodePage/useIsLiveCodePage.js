// Modules
import { useLocation } from 'react-router-dom';

export function useIsLiveCodePage() {
  const { pathname } = useLocation();

  return pathname === '/live-code';
}

export default useIsLiveCodePage;
