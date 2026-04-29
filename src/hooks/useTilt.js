import { useCallback, useRef } from 'react';

export function useTilt({ max = 8, perspective = 1000, scale = 1.015 } = {}) {
  const ref = useRef(null);
  const frame = useRef(null);

  const onMouseMove = useCallback(
    (event) => {
      const el = ref.current;
      if (!el) return;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const px = x / rect.width;
        const py = y / rect.height;
        const rotateX = (py - 0.5) * -max * 2;
        const rotateY = (px - 0.5) * max * 2;

        el.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
        el.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
        el.style.setProperty('--tilt-mx', `${(px * 100).toFixed(2)}%`);
        el.style.setProperty('--tilt-my', `${(py * 100).toFixed(2)}%`);
        el.style.setProperty('--tilt-scale', String(scale));
        el.style.setProperty('--tilt-perspective', `${perspective}px`);
      });
    },
    [max, perspective, scale]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
    el.style.setProperty('--tilt-scale', '1');
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
