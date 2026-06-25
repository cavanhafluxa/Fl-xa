const ITEMS = [
  "Seus dados são seus",
  "Sem taxas abusivas",
  "Mais ticket médio",
  "Zero caos no delivery",
  "Base de clientes própria",
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3.2 3.2L13 4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Marquee() {
  return (
    <div className="strip">
      <div className="strip-inner">
        {ITEMS.map((item, i) => (
          <span className="strip-item" key={item}>
            <Check />
            {item}
            {i < ITEMS.length - 1 && <span className="strip-sep" aria-hidden="true" />}
          </span>
        ))}
      </div>
    </div>
  );
}
