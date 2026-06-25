import TextAnimate from "./magic/TextAnimate";

const ROWS = [
  "Dados do cliente são seus",
  "Cardápio que converte",
  "Database marketing",
  "Marca e base próprias",
];

export default function Compare() {
  return (
    <section className="section compare on-cream" id="comparativo">
      <div className="container">
        <div className="compare-head">
          <div className="eyebrow center reveal">Comparativo</div>
          <TextAnimate
            as="h2"
            className="section-title"
            text="Fluxa vs. o sistema alugado"
            highlight={["Fluxa"]}
          />
        </div>

        <div className="vs reveal reveal-delay-1">
          <div className="vs-head">
            <span>Recurso</span>
            <span>Alugado</span>
            <span className="vs-h-fluxa">Fluxa</span>
          </div>

          <div className="vs-row">
            <span className="vs-feat">Comissão por pedido</span>
            <span className="vs-old">até 30%</span>
            <span className="vs-new vs-fluxa-col">10%</span>
          </div>

          {ROWS.map((label) => (
            <div className="vs-row" key={label}>
              <span className="vs-feat">{label}</span>
              <span className="vs-cell vs-x">—</span>
              <span className="vs-cell vs-ck vs-fluxa-col">✓</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
