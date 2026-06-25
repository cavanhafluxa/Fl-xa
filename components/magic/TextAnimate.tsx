"use client";

import { ElementType, Ref, useEffect, useRef, useState } from "react";

/* MagicUI text-animate (blur-in by word) on scroll into view. */
export default function TextAnimate({
  text,
  highlight = [],
  className = "",
  as: Tag = "h2" as ElementType,
}: {
  text: string;
  highlight?: string[];
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  // Visible by default (fail-open): if JS never runs, the heading still shows.
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Arm the animation (hide), then reveal on scroll into view.
    setShown(false);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    // safety net: never leave it hidden
    const fb = window.setTimeout(() => setShown(true), 1800);
    return () => {
      io.disconnect();
      window.clearTimeout(fb);
    };
  }, []);

  const norm = (w: string) => w.replace(/[.,]/g, "");
  const hi = new Set(highlight.map(norm));
  const words = text.split(" ");

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`text-animate ${shown ? "in" : ""} ${className}`}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className={`ta-word${hi.has(norm(w)) ? " ta-accent" : ""}`}
          style={{ transitionDelay: `${i * 0.07}s` }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
