export default function FinalCta() {
  return (
    <section className="section final-cta on-red">
      <div className="container">
        <div className="final-cta-inner reveal">
          <h2>
            Pare de alugar. <em>Comece a crescer.</em>
          </h2>
          <p>
            Construa sua base própria, organize a cozinha e venda mais com a
            tecnologia que o Lanas Burguer já escolheu.
          </p>
          <div className="cta-actions">
            <a href="#contato" className="btn-primary">
              Agendar uma demonstração gratuita do Fluxa Foods
            </a>
            <a href="#produto" className="btn-text">
              Ver o sistema
              <svg className="chev" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 3l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p className="cta-note">
            Demonstração gratuita · Sem compromisso · Fluxa Kitchen + Cardápio
          </p>
        </div>
      </div>
    </section>
  );
}
