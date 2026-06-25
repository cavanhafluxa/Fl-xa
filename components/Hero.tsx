import KitchenMock from "./KitchenMock";

export default function Hero() {
  return (
    <section className="hero on-cream">
      <div className="hero-inner">
        <span className="hero-promise reveal">
          <span className="dot" />
          Fluxa Foods · Kitchen + Cardápio
        </span>

        <h1 className="hero-title reveal reveal-delay-1">
          Pare de alugar sistemas que <em>travam sua cozinha.</em>
        </h1>

        <p className="hero-sub reveal reveal-delay-2">
          O sistema exato que o Lanas Burguer escolheu para organizar a casa,
          construir base própria e parar de pagar taxas abusivas.
        </p>

        <div className="hero-actions reveal reveal-delay-3">
          <a href="#contato" className="btn-primary">
            Quero a tecnologia da Fluxa
          </a>
          <a href="#produto" className="btn-text">
            Ver o sistema
            <svg className="chev" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.5 3l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <p className="hero-note reveal reveal-delay-3">
          Seus clientes e seus dados ficam com você.
        </p>
      </div>

      <div className="hero-mock-wrap reveal reveal-delay-2">
        <KitchenMock />
      </div>
    </section>
  );
}
