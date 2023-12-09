// Modules
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useRedirectToFirstPresentation() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/presentation/0');
    }
  }, [navigate, pathname]);
}

export default useRedirectToFirstPresentation;
