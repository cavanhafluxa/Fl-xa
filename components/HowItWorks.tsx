export default function HowItWorks() {
  return (
    <section className="section how on-ink" id="produto">
      <span className="bg-word" aria-hidden="true">
        Fluxa
      </span>
      <div className="container">
        <div className="how-inner">
          <div className="how-left">
            <div className="tag reveal">O sistema</div>
            <h2 className="section-title reveal reveal-delay-1">
              Conheça o <em>Fluxa Foods.</em>
            </h2>
            <p className="section-sub reveal reveal-delay-2">
              Não é mais um sistema que você aluga. É a tecnologia que organiza a
              casa, vende mais e devolve o controle do seu negócio para você.
            </p>
            <div className="steps">
              <div className="step reveal reveal-delay-1">
                <div className="step-num">K</div>
                <div className="step-content">
                  <span className="step-eyebrow">App de cozinha</span>
                  <h4>Fluxa Kitchen</h4>
                  <p>
                    Seu app de gestão operacional. Acompanhe os pedidos em tempo
                    real, sem atrasos e sem pesadelo na cozinha nos dias de pico.
                  </p>
                </div>
              </div>
              <div className="step reveal reveal-delay-2">
                <div className="step-num">C</div>
                <div className="step-content">
                  <span className="step-eyebrow">Cardápio digital</span>
                  <h4>Fluxa Cardápio</h4>
                  <p>
                    Um cardápio inteligente, desenhado com engenharia de
                    conversão — não só para mostrar fotos, mas para transformar
                    visitantes em compradores e aumentar o seu ticket médio.
                  </p>
                </div>
              </div>
              <div className="step highlight reveal reveal-delay-3">
                <div className="step-num">DB</div>
                <div className="step-content">
                  <span className="step-eyebrow">O grande diferencial</span>
                  <h4>Database Marketing</h4>
                  <p>
                    Ao usar a Fluxa, os dados dos clientes ficam com VOCÊ. Você
                    constrói o seu próprio banco de dados para criar ofertas
                    personalizadas e fazer o cliente voltar sempre.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fluxa Kitchen mock */}
          <div className="kitchen-mock reveal reveal-delay-2">
            <div className="mock-titlebar">
              <div className="mock-dots">
                <div className="mock-dot mock-dot-r"></div>
                <div className="mock-dot mock-dot-y"></div>
                <div className="mock-dot mock-dot-g"></div>
              </div>
              <div className="mock-title-text">Fluxa Kitchen</div>
              <div className="mock-live">
                <span className="mock-live-dot"></span> Ao vivo
              </div>
            </div>
            <div className="mock-body">
              <div className="mock-metrics-row">
                <div className="m-metric">
                  <div className="m-val red">42</div>
                  <div className="m-label">pedidos hoje</div>
                </div>
                <div className="m-metric">
                  <div className="m-val">R$53</div>
                  <div className="m-label">ticket médio</div>
                </div>
                <div className="m-metric">
                  <div className="m-val green">9min</div>
                  <div className="m-label">tempo preparo</div>
                </div>
              </div>
              <div className="order-list">
                <div className="o-card">
                  <div className="o-top">
                    <span className="o-name">Mesa 4 — João M.</span>
                    <span className="o-badge b-new">Novo</span>
                  </div>
                  <div className="o-items">2× X-Bacon · 1× Batata G · 2× Refri</div>
                  <div className="o-footer">
                    <span className="o-time">agora mesmo</span>
                    <span className="o-price">R$ 68,00</span>
                  </div>
                </div>
                <div className="o-card">
                  <div className="o-top">
                    <span className="o-name">Delivery — Ana P.</span>
                    <span className="o-badge b-prep">Em preparo</span>
                  </div>
                  <div className="o-items">1× Frango Grelhado · 1× Suco Natural</div>
                  <div className="o-footer">
                    <span className="o-time">há 7 min</span>
                    <span className="o-price">R$ 42,50</span>
                  </div>
                </div>
                <div className="o-card">
                  <div className="o-top">
                    <span className="o-name">Mesa 1 — Carlos R.</span>
                    <span className="o-badge b-done">Pronto</span>
                  </div>
                  <div className="o-items">1× Pizza Média · 2× Cerveja Long Neck</div>
                  <div className="o-footer">
                    <span className="o-time">há 21 min</span>
                    <span className="o-price">R$ 87,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
