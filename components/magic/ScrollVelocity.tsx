"use client";

import { useEffect, useRef } from "react";

/* Marquee that scrolls continuously and speeds up with scroll velocity
   (MagicUI scroll-based-velocity), recreated with requestAnimationFrame. */
export default function ScrollVelocity({
  items,
  baseSpeed = 0.7,
  direction = -1,
}: {
  items: string[];
  baseSpeed?: number;
  direction?: 1 | -1;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const vel = useRef(0);
  const lastY = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      vel.current += Math.min(Math.abs(y - lastY.current), 70) * 0.12;
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      const el = rowRef.current;
      if (el) {
        const half = el.scrollWidth / 2 || 1;
        x.current += direction * (baseSpeed + vel.current);
        if (x.current <= -half) x.current += half;
        if (x.current >= 0) x.current -= half;
        el.style.transform = `translate3d(${x.current}px,0,0)`;
        vel.current *= 0.9;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [baseSpeed, direction]);

  const loop = [...items, ...items];
  return (
    <div className="velocity-section">
      <div className="velocity-row" ref={rowRef}>
        {loop.map((it, i) => (
          <span className="velocity-item" key={i}>
            {it}
            <span className="velocity-dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
