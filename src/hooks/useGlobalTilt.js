import { useEffect, useRef } from 'react';

export function useGlobalTilt({
  max = 50,
  smooth = 0.08,
  baseX = -20,
  baseY = 30,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = null;
    let targetX = baseX;
    let targetY = baseY;
    let currentX = baseX;
    let currentY = baseY;
    let hasMoved = false;
    let idleTime = 0;

    const onMove = (event) => {
      hasMoved = true;
      idleTime = 0;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetY = ((event.clientX - cx) / cx) * max + baseY;
      targetX = ((event.clientY - cy) / cy) * -max + baseX;
    };

    let last = performance.now();
    const animate = (now) => {
      const dt = now - last;
      last = now;

      if (!hasMoved) {
        idleTime += dt;
        targetY = baseY + Math.sin(idleTime / 1500) * 18;
        targetX = baseX + Math.cos(idleTime / 1800) * 8;
      }

      currentX += (targetX - currentX) * smooth;
      currentY += (targetY - currentY) * smooth;
      el.style.setProperty('--rx', `${currentX.toFixed(2)}deg`);
      el.style.setProperty('--ry', `${currentY.toFixed(2)}deg`);
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [max, smooth, baseX, baseY]);

  return ref;
}
