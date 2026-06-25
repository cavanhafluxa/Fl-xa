"use client";

import { useEffect, useState } from "react";

/* Rotating word with a vertical slide+fade swap (MagicUI word-rotate). */
export default function WordRotate({
  words,
  interval = 2100,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span className={`word-rotate ${className}`}>
      <span key={i} className="word-rotate-item">
        {words[i]}
      </span>
    </span>
  );
}
