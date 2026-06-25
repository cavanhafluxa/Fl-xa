"use client";

import { useState } from "react";

/* Renders a screenshot image; if the file isn't in /public yet, shows a clean
   placeholder telling which file to add (so nothing looks broken). */
export default function ScreenShot({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const [ok, setOk] = useState(true);
  if (!ok) {
    return (
      <div className="shot-fallback">
        <span className="shot-fallback-t">{label}</span>
        <span className="shot-fallback-s">
          adicione <b>{src}</b> em /public
        </span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="shot" src={src} alt={label} onError={() => setOk(false)} />
  );
}
