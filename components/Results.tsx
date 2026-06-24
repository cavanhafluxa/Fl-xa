export default function Results() {
  return (
    <section className="results" id="resultados">
      <div className="container">
        <div className="reveal">
          <div className="tag">O resultado</div>
          <h2 className="section-title">
            O resultado é
            <br />
            <em>previsibilidade.</em>
          </h2>
          <p className="section-sub">
            Mais pedidos consistentes. Menos dependência de dias bons. Maior
            controle sobre o faturamento. Crescimento estruturado.
          </p>
        </div>
        <div className="results-grid">
          <div className="result-card reveal reveal-delay-1">
            <div className="result-val">
              <span className="acc">+</span>25
            </div>
            <div className="result-label">pedidos extras por dia</div>
            <div className="result-sub">meta 60 dias</div>
          </div>
          <div className="result-card reveal reveal-delay-2">
            <div className="result-val">
              <span className="acc">+</span>60<span className="acc">%</span>
            </div>
            <div className="result-label">clientes que retornam</div>
            <div className="result-sub">meta 120 dias</div>
          </div>
          <div className="result-card reveal reveal-delay-3">
            <div className="result-val">
              <span className="acc">-</span>30<span className="acc">%</span>
            </div>
            <div className="result-label">tempo médio de preparo</div>
            <div className="result-sub">meta 45 dias</div>
          </div>
        </div>
      </div>
    </section>
  );
}
