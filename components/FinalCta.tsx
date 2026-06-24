export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="cta-radial"></div>
      <div className="cta-lines"></div>
      <div className="container">
        <div className="final-cta-inner reveal">
          <h2>
            Crescimento
            <br />
            <em>estruturado.</em>
          </h2>
          <p>
            Mais pedidos consistentes. Menos dependência de dias bons. Maior
            controle sobre o faturamento.
          </p>
          <div className="cta-actions">
            <a href="#contato" className="btn-primary">
              Quero gerar pedidos todos os dias
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#solucao" className="btn-outline">
              Ver o sistema →
            </a>
          </div>
          <p className="cta-note">
            Diagnóstico gratuito · Sem compromisso · Só avançamos se se fizer
            sentido
          </p>
        </div>
      </div>
    </section>
  );
}
