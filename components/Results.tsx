export default function Results() {
  return (
    <section className="section results on-red" id="resultados">
      <span className="bg-word" aria-hidden="true">
        Lucro
      </span>
      <div className="container">
        <div className="reveal">
          <div className="tag">O resultado</div>
          <h2 className="section-title">
            Mais pedidos. Mais margem. <em>Clientes seus.</em>
          </h2>
          <p className="section-sub">
            Quando você para de alugar e passa a operar com a Fluxa, o jogo
            muda: mais conversão no cardápio, menos caos na cozinha e uma base
            que volta a comprar.
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
