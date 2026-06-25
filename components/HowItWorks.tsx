import KitchenMock from "./KitchenMock";

export default function HowItWorks() {
  return (
    <section className="section how on-paper" id="produto">
      <div className="container">
        <div className="how-inner">
          <div className="how-left">
            <div className="eyebrow reveal">O sistema</div>
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
                    O seu app de gestão operacional. Acompanhe os pedidos em
                    tempo real — sem atrasos e sem pesadelo na cozinha nos dias
                    de pico.
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

          <div className="reveal reveal-delay-2">
            <KitchenMock />
          </div>
        </div>
      </div>
    </section>
  );
}
