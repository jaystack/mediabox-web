import React from 'react';
import { useAnimation } from "framer-motion";


export function useAutoHeightAnimation(fn, deps) {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const height = React.useRef(null);

  React.useEffect(() => {
    ref.current.style.height = "auto";
    const newHeight = ref.current.offsetHeight;

    if (height.current !== null) {
      controls.set({ height: height.current });
      controls.start({ height: newHeight }, fn);
    }

    height.current = newHeight;
  }, [ref, controls, ...deps]);

  return [controls, ref];
}
