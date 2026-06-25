"use client";

import { useEffect, useRef, useState } from "react";

/* MagicUI text-reveal: a tall section that pins a phrase and lights its words
   word-by-word as you scroll — the scroll "holds" on it until it finishes. */
export default function TextReveal({
  text,
  eyebrow,
}: {
  text: string;
  eyebrow?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const passed = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? passed / total : 1);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const words = text.split(" ");
  const lit = progress * (words.length + 4);

  return (
    <section className="text-reveal-wrap on-ink" ref={wrapRef}>
      <div className="text-reveal-sticky">
        <div className="container">
          {eyebrow && <div className="eyebrow center">{eyebrow}</div>}
          <p className="text-reveal-text">
            {words.map((w, i) => (
              <span
                key={i}
                className="tr-word"
                style={{ opacity: Math.min(Math.max(lit - i, 0.14), 1) }}
              >
                {w}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
