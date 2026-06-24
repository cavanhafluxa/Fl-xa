const ITEMS = [
  "Lanchonetes",
  "Pizzarias",
  "Hamburguerias",
  "Restaurantes",
  "Food Parks",
  "Dark Kitchens",
  "Temakerias",
  "Pastelarias",
];

export default function Marquee() {
  // Duplicated list so the -50% translate loop is seamless.
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-bar">
      <div className="marquee-inner">
        {loop.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-sep"></span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
