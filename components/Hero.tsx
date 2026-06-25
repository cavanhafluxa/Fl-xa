export default function Hero() {
  return (
    <section className="hero on-cream">
      {/* floating icon tiles (decorative, like the reference) */}
      <div className="hero-tile tile-1" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="hero-tile tile-2" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M4 16l5-5 4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 8h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="hero-tile tile-3" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="hero-inner">
        <span className="hero-promise reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#produto" className="btn-play">
            <span className="play-circle">
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M3 2.2v7.6L9.5 6 3 2.2Z" fill="currentColor" />
              </svg>
            </span>
            Como funciona
          </a>
        </div>
      </div>
    </section>
  );
}
