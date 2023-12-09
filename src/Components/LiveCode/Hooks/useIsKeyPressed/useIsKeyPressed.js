// Modules
import { useEffect, useState } from 'react';

export function useIsKeyPressed(targetKey) {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  function downHandler(event) {
    if (event.key === targetKey) {
      setIsKeyPressed(true);
    }
  }

  function upHandler(event) {
    if (event.key === targetKey) {
      setIsKeyPressed(false);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', downHandler);
    document.addEventListener('keyup', upHandler);

    return () => {
      document.removeEventListener('keydown', downHandler);
      document.removeEventListener('keyup', upHandler);
    };
  });

  return isKeyPressed;
}

export default useIsKeyPressed;
