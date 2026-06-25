import Iphone from "./magic/Iphone";
import ScreenShot from "./magic/ScreenShot";
import TextAnimate from "./magic/TextAnimate";

export default function CardapioShowcase() {
  return (
    <section className="section cardapio-showcase on-cream" id="cardapio">
      <div className="container">
        <div className="cardapio-inner">
          <div className="cardapio-copy">
            <div className="eyebrow reveal">Fluxa Cardápio</div>
            <TextAnimate
              as="h2"
              className="section-title"
              text="O seu cardápio digital que vende sozinho."
              highlight={["vende", "sozinho."]}
            />
            <p className="section-sub reveal reveal-delay-2">
              Fotos que dão fome, combos no lugar certo e checkout sem fricção.
              O mesmo cardápio que sobe o ticket do Lanas.
            </p>
            <ul className="cardapio-bullets reveal reveal-delay-3">
              <li>Combos e adicionais que aumentam o ticket</li>
              <li>Busca, categorias e itens “Em alta”</li>
              <li>Pedido direto — sem taxa de marketplace</li>
            </ul>
          </div>
          <div className="cardapio-phone reveal reveal-delay-2">
            <Iphone bare>
              <ScreenShot src="/cardapio.png" label="Print do Fluxa Cardápio" />
            </Iphone>
          </div>
          <div className="cardapio-cta-wrap">
            <a href="#contato" className="btn-primary">
              Quero meu cardápio Fluxa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
