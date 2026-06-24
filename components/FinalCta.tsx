export default function FinalCta() {
  return (
    <section className="section final-cta on-red">
      <span className="bg-word" aria-hidden="true">
        Fluxa
      </span>
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
              Agendar uma demonstração gratuita
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#produto" className="btn-outline">
              Ver o sistema →
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
