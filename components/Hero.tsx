export default function Hero() {
  return (
    <section className="hero on-cream">
      <div className="hero-inner">
        <span className="hero-promise reveal">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
          </svg>
          Fluxa Foods · Kitchen + Cardápio
        </span>

        <h1 className="hero-title reveal reveal-delay-1">
          Pare de alugar sistemas que
          <em>travam sua cozinha</em>
        </h1>

        <p className="hero-sub reveal reveal-delay-2">
          O sistema exato que o Lanas Burguer escolheu para organizar a casa,
          construir base própria e parar de pagar taxas abusivas.
        </p>

        <div className="hero-actions reveal reveal-delay-3">
          <a href="#contato" className="btn-primary">
            Quero a tecnologia da Fluxa
          </a>
          <a href="#produto" className="btn-ghost">
            Ver o sistema
          </a>
        </div>
      </div>
    </section>
  );
}
