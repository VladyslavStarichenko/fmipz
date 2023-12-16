// Modules
import { useCallback, useState } from 'react';

// Components
import HamburgerMenuView from './HamburgerMenu.view';

export function HamburgerMenuContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenuOpen = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <HamburgerMenuView
      isMenuOpen={isMenuOpen}
      onToggleMenuOpen={onToggleMenuOpen}
    />
  );
}

export default HamburgerMenuContainer;
