export default function Hero() {
  return (
    <section className="hero on-ink">
      <div className="hero-bg-photo" />
      <div className="hero-scrim" />
      <span className="bg-word" aria-hidden="true">
        Foods
      </span>

      <div className="hero-inner">
        <div className="hero-content">
          <span className="kicker">
            Pare de alugar sistemas que sequestram seus clientes
          </span>

          <h1 className="hero-title">
            O sistema que o <em>Lanas Burguer</em> escolheu para organizar a
            casa, construir base própria e parar de pagar{" "}
            <span className="ember">taxas abusivas.</span>
          </h1>

          <p className="hero-sub">
            Conheça o Fluxa Foods. A união perfeita entre um Cardápio Digital
            que converte visitantes em compradores e um App de Cozinha que acaba
            com o caos no delivery.
          </p>

          <div className="hero-actions">
            <a href="#contato" className="btn-primary">
              Quero a tecnologia da Fluxa no meu restaurante
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#produto" className="btn-outline">
              Ver o sistema →
            </a>
          </div>

          <p className="hero-note">
            Fluxa Kitchen + Fluxa Cardápio · Os dados dos seus clientes ficam com
            você.
          </p>
        </div>
      </div>

      <div className="sticker">
        <span className="sticker-big">DEMO</span>
        <span className="sticker-small">100% grátis</span>
      </div>
    </section>
  );
}
