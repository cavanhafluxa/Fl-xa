import TextAnimate from "./magic/TextAnimate";

export default function Case() {
  return (
    <section className="section case on-cream" id="case">
      <div className="container">
        <div className="case-inner">
          <div className="case-left">
            <div className="eyebrow reveal">Prova social</div>
            <TextAnimate
              as="h2"
              className="section-title"
              text="Por que o Lanas Burguer mudou para a Fluxa?"
              highlight={["mudou", "para", "a", "Fluxa?"]}
            />
            <blockquote className="case-quote reveal reveal-delay-2">
              <span className="q-mark">“</span>A cozinha parou de travar, o
              ticket médio subiu e os dados dos clientes agora são nossos.
              <span className="q-mark">”</span>
            </blockquote>
            <div className="case-meta reveal reveal-delay-3">
              <div className="case-avatar">L</div>
              <div>
                <div className="case-meta-name">Lanas Burguer</div>
                <div className="case-meta-role">Cliente Fluxa Foods</div>
              </div>
            </div>
          </div>

          <div className="case-media reveal reveal-delay-2">
            <div className="case-photo">
              <span className="case-photo-hint">Foto do restaurante</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
