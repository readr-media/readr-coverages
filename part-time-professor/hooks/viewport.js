import { useState, useEffect, useRef } from 'react';

export default function useViewport() {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
  });

  const timeoutId = useRef(null);
  const startTime = useRef(new Date());

  useEffect(function mount() {
    updateViewport();

    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationChange', updateViewport);

    return function cleanup() {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationChange', updateViewport);
    };

    function updateViewport() {
      clearTimeout(timeoutId.current);

      const currentTime = new Date();

      if (currentTime - startTime.current >= 100) {
        update();

        startTime.current = currentTime;
      } else {
        timeoutId.current = setTimeout(update, 100);
      }

      function update() {
        setViewport({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }
  }, []);

  return viewport;
}
