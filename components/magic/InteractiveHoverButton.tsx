/* MagicUI interactive-hover-button: a dot expands and the label slides to
   reveal an arrow on hover. Pure CSS; renders as a link. */
export default function InteractiveHoverButton({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a href={href} className={`ihb ${className}`}>
      <span className="ihb-dot" aria-hidden="true" />
      <span className="ihb-label">{label}</span>
      <span className="ihb-reveal" aria-hidden="true">
        {label}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
