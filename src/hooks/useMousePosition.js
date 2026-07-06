import { useEffect, useRef } from "react";

/**
 * Tracks the mouse position and writes it into CSS custom properties
 * (--mx, --my as viewport fractions 0..1) on <body>. Cheaper than
 * re-rendering React on every mousemove.
 */
export default function useMousePosition() {
  const frame = useRef(null);

  useEffect(() => {
    function handleMove(e) {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.body.style.setProperty("--mx", x.toFixed(4));
        document.body.style.setProperty("--my", y.toFixed(4));
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);
}
