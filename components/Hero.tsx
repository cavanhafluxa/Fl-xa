import KineticText from "./magic/KineticText";
import WordRotate from "./magic/WordRotate";
import InteractiveHoverButton from "./magic/InteractiveHoverButton";

export default function Hero() {
  return (
    <section className="hero hero-photo on-ink">
      <div className="hero-photo-bg" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-inner">
        <span className="hero-promise reveal">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
          </svg>
          Kitchen + Cardápio
        </span>

        <h1 className="hero-title">
          <KineticText text="Fluxa Foods" />
        </h1>

        <p className="hero-headline reveal reveal-delay-1">
          Pare de alugar sistemas que <em>travam sua cozinha.</em>
        </p>

        <p className="hero-sub reveal reveal-delay-2">
          O sistema que o Lanas Burguer usa para vender mais e parar de pagar
          taxas abusivas.
        </p>

        <div className="hero-rotate reveal reveal-delay-2">
          Feito para{" "}
          <WordRotate
            words={[
              "hamburguerias",
              "pizzarias",
              "sushibars",
              "lanchonetes",
              "dark kitchens",
              "açaiterias",
            ]}
          />
        </div>

        <div className="hero-actions reveal reveal-delay-3">
          <InteractiveHoverButton
            href="#contato"
            label="Quero a tecnologia da Fluxa"
          />
          <a href="#produto" className="btn-ghost-light">
            Ver o sistema
          </a>
        </div>
      </div>
    </section>
  );
}
