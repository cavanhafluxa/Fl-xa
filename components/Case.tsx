export default function Case() {
  return (
    <section className="section case on-cream" id="case">
      <span className="bg-word" aria-hidden="true">
        Lanas
      </span>
      <div className="container">
        <div className="case-inner">
          <div className="case-left">
            <div className="tag reveal">Prova social</div>
            <h2 className="section-title reveal reveal-delay-1">
              Por que o Lanas Burguer <em>mudou para a Fluxa?</em>
            </h2>
            <blockquote className="case-quote reveal reveal-delay-2">
              <span className="q-mark">“</span>Saímos dos sistemas antigos e
              paramos de depender só do iFood. A cozinha parou de travar nos
              picos, o cardápio novo subiu nosso ticket médio e — pela primeira
              vez — os dados dos nossos clientes são nossos.<span className="q-mark">”</span>
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
            <div className="case-media-placeholder">
              <span className="cm-big">Print da transição do Lanas</span>
              <span className="cm-small">
                adicione a imagem em public/case-lanas.jpg
              </span>
            </div>
            <span className="case-badge">Migração real · operação ao vivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
