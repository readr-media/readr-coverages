import { useState, useEffect } from 'react';

export default function useScrollDirection(initialDirection = 'up') {
  const [direction, setDirection] = useState(initialDirection);

  useEffect(function mount() {
    window.addEventListener('scroll', detectScrollDirection);

    let beforeScrollY = window.pageYOffset;
    function detectScrollDirection() {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY - beforeScrollY > 0) {
        setDirection('down');
      } else {
        setDirection('up');
      }

      beforeScrollY = currentScrollY;
    }

    return function cleanup() {
      window.removeEventListener('scroll', detectScrollDirection);
    };
  }, []);

  return direction;
}
