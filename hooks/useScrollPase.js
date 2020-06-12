import { useState, useEffect } from "react";

export default function useScrollPhase(
  containerRef,
  contentRef,
  min = 50,
  max = 150,
  step = 10
) {
  const [scrollPhase, setScrollPhase] = useState("");
  useEffect(() => {
    const scrollEffectListener = () => {
      if (containerRef?.current && contentRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scaleFactor =
          rect.top / (window.innerHeight || rect.height || 1024);
        const scale = (1 - scaleFactor * 0.25) * 100;
        let phase = Math.ceil(scale / step) * step;
        phase = phase > max ? max : phase;
        phase = phase < min ? min : phase;
        setScrollPhase(phase);
      }
    };
    // set resize listener
    window.addEventListener("scroll", scrollEffectListener);
    // cleanup
    return () => {
      window.removeEventListener("scroll", scrollEffectListener);
    };
  });
  return scrollPhase;
}
