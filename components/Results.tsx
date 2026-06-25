export default function Results() {
  return (
    <section className="section results on-ink" id="resultados">
      <div className="container">
        <div className="section-head center reveal">
          <div className="eyebrow center">As metas que perseguimos</div>
          <h2 className="section-title">
            Mais pedidos. Mais margem. Clientes seus.
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Mais conversão no cardápio, menos caos na cozinha e uma base que
            volta a comprar. As metas que perseguimos com cada restaurante.
          </p>
        </div>

        <div className="results-grid">
          <div className="result-card reveal reveal-delay-1">
            <div className="result-val">
              <span className="acc">+</span>25
            </div>
            <div className="result-label">pedidos extras por dia</div>
            <div className="result-sub">meta · 60 dias</div>
          </div>
          <div className="result-card reveal reveal-delay-2">
            <div className="result-val">
              <span className="acc">+</span>60<span className="acc">%</span>
            </div>
            <div className="result-label">clientes que retornam</div>
            <div className="result-sub">meta · 120 dias</div>
          </div>
          <div className="result-card reveal reveal-delay-3">
            <div className="result-val">
              <span className="acc">−</span>30<span className="acc">%</span>
            </div>
            <div className="result-label">tempo médio de preparo</div>
            <div className="result-sub">meta · 45 dias</div>
          </div>
        </div>
      </div>
    </section>
  );
}
