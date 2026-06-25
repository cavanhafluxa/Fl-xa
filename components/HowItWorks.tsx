import KitchenMock from "./KitchenMock";
import TextAnimate from "./magic/TextAnimate";

export default function HowItWorks() {
  return (
    <section className="section how on-paper" id="produto">
      <div className="container">
        <div className="how-inner">
          <div className="how-left">
            <div className="eyebrow reveal">O sistema</div>
            <TextAnimate
              as="h2"
              className="section-title"
              text="Conheça o Fluxa Foods."
              highlight={["Fluxa", "Foods."]}
            />
            <p className="section-sub reveal reveal-delay-2">
              Não é mais um sistema que você aluga. É a tecnologia que organiza a
              casa, vende mais e te devolve o controle.
            </p>
            <div className="steps">
              <div className="step reveal reveal-delay-1">
                <div className="step-num">K</div>
                <div className="step-content">
                  <span className="step-eyebrow">App de cozinha</span>
                  <h4>Fluxa Kitchen</h4>
                  <p>
                    Gestão operacional em tempo real. Sem atrasos e sem caos na
                    cozinha nos dias de pico.
                  </p>
                </div>
              </div>
              <div className="step reveal reveal-delay-2">
                <div className="step-num">C</div>
                <div className="step-content">
                  <span className="step-eyebrow">Cardápio digital</span>
                  <h4>Fluxa Cardápio</h4>
                  <p>
                    Cardápio com engenharia de conversão: transforma visitantes
                    em compradores e aumenta o seu ticket médio.
                  </p>
                </div>
              </div>
              <div className="step highlight reveal reveal-delay-3">
                <div className="step-num">DB</div>
                <div className="step-content">
                  <span className="step-eyebrow">O grande diferencial</span>
                  <h4>Database Marketing</h4>
                  <p>
                    Os dados dos clientes ficam com VOCÊ. Crie ofertas
                    personalizadas e faça o cliente voltar sempre.
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
