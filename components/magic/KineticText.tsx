"use client";

/* MagicUI-style kinetic text: each letter springs in with blur + rotateX.
   Recreated locally in CSS (the @magicui registry is network-blocked here). */
export default function KineticText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`kinetic ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="kinetic-char"
          aria-hidden="true"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
