export default function Problem() {
  return (
    <section className="section problem on-cream" id="dor">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">O inimigo</div>
          <h2 className="section-title">
            Sistemas ultrapassados estão <em>te travando.</em>
          </h2>
          <p className="section-sub">
            A maioria dos restaurantes usa sistemas ultrapassados como Pedidos
            10 ou MultiPedidos — ou pior, dependem 100% do iFood. O resultado vem
            todo mês, na fatura e no caixa.
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
              A cada R$ 100 que você vende, a plataforma fica com até R$ 30. É a
              sua margem financiando o crescimento deles — não o seu.
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
              é o seu cliente — e não consegue trazê-lo de volta.
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
              Sistemas que não integram direito viram pesadelo em dias de
              movimento: pedido atrasado, erro de comanda, cliente insatisfeito.
            </p>
          </div>
        </div>

        <div className="reframe reveal">
          <span className="eyebrow">A virada</span>
          <h3>
            O problema não é o seu restaurante. É o <em>canal</em> que você usa.
          </h3>
          <p>
            O futuro pertence aos restaurantes que constroem relacionamento
            direto com seus clientes — donos da própria base, da própria margem
            e da própria operação.
          </p>
        </div>
      </div>
    </section>
  );
}
