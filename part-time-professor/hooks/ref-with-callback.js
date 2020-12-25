// https://medium.com/welldone-software/usecallback-might-be-what-you-meant-by-useref-useeffect-773bc0278ae

import { useRef, useCallback } from 'react';

export default function useRefWithCallback(onMounted, onUnmounted) {
  const ref = useRef(null);

  const setRef = useCallback(
    function (node) {
      if (ref.current) {
        onUnmounted(ref.current);
      }

      ref.current = node;

      if (ref.current) {
        onMounted(ref.current);
      }
    },
    [onMounted, onUnmounted]
  );

  return setRef;
}
