const ITEMS = [
  "Fluxa Kitchen",
  "Fluxa Cardápio",
  "Database Marketing",
  "Sem Taxas Abusivas",
  "Seus Dados São Seus",
  "Mais Ticket Médio",
  "Zero Caos no Delivery",
];

export default function Marquee() {
  // Duplicated list so the -50% translate loop is seamless.
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="tape-wrap">
      <div className="marquee-bar">
        <div className="marquee-inner">
          {loop.map((item, i) => (
            <div className="marquee-item" key={i}>
              <span className="marquee-sep"></span> {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
