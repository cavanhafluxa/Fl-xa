import TextAnimate from "./magic/TextAnimate";

export default function Problem() {
  return (
    <section className="section problem on-cream" id="dor">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow center reveal">O inimigo</div>
          <TextAnimate
            as="h2"
            className="section-title"
            text="Sistemas ultrapassados estão te travando."
            highlight={["te", "travando."]}
          />
          <p className="section-sub">
            Pedidos 10, MultiPedidos ou 100% iFood. O resultado vem todo mês —
            na fatura e no caixa.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card reveal reveal-delay-1">
            <div className="p-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 16 16 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="9.2" cy="9.2" r="1.4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="14.8" cy="14.8" r="1.4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <h3>Até 30% de taxa por pedido</h3>
            <p>
              A cada R$ 100 vendidos, até R$ 30 vão pra plataforma. Sua margem
              financiando o crescimento deles.
            </p>
          </div>

          <div className="problem-card reveal reveal-delay-2">
            <div className="p-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="15" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h3>Eles ficam com os seus clientes</h3>
            <p>
              A plataforma guarda os dados de quem comprou. Você nunca sabe quem
              é o seu cliente nem consegue trazê-lo de volta.
            </p>
          </div>

          <div className="problem-card reveal reveal-delay-3">
            <div className="p-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 3 22 20H2L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="16.8" r="1.1" fill="currentColor" />
              </svg>
            </div>
            <h3>Caos na cozinha nos picos</h3>
            <p>
              Sistemas que não integram viram pesadelo no pico: pedido atrasado,
              erro de comanda, cliente insatisfeito.
            </p>
          </div>
        </div>

        <div className="reframe reveal">
          <span className="eyebrow">A virada</span>
          <h3>
            O problema não é o seu restaurante. É o <em>canal</em> que você usa.
          </h3>
          <p>
            O futuro é de quem constrói relação direta com o cliente — dono da
            própria base, margem e operação.
          </p>
        </div>
      </div>
    </section>
  );
}
