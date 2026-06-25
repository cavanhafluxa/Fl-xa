import KitchenMock from "./KitchenMock";

export default function Hero() {
  return (
    <section className="hero on-cream">
      <div className="hero-inner">
        <span className="hero-promise reveal">
          <span className="dot" />
          Pare de alugar sistemas que travam sua cozinha
        </span>

        <h1 className="hero-title reveal reveal-delay-1">
          O sistema exato que o <em>Lanas Burguer</em> escolheu para organizar a
          casa, construir <em>base própria</em> e parar de pagar{" "}
          <em>taxas abusivas.</em>
        </h1>

        <p className="hero-sub reveal reveal-delay-2">
          Conheça o Fluxa Foods. A união perfeita entre um Cardápio Digital que
          converte visitantes em compradores e um App de Cozinha que acaba com o
          caos no delivery.
        </p>

        <div className="hero-actions reveal reveal-delay-3">
          <a href="#contato" className="btn-primary">
            Quero a tecnologia da Fluxa no meu restaurante
          </a>
          <a href="#produto" className="btn-text">
            Ver o sistema
            <svg className="chev" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.5 3l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <p className="hero-note reveal reveal-delay-3">
          Fluxa Kitchen + Fluxa Cardápio · Os dados dos seus clientes ficam com
          você.
        </p>
      </div>

      <div className="hero-mock-wrap reveal reveal-delay-2">
        <KitchenMock />
      </div>
    </section>
  );
}
