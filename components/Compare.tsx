const ROWS = [
  "Os dados do cliente são seus",
  "Cardápio com engenharia de conversão",
  "Gestão de cozinha em tempo real",
  "Database marketing e ofertas personalizadas",
  "Follow-up para o cliente voltar",
  "Marca e base de clientes próprias",
  "Sem dependência de plataforma",
];

export default function Compare() {
  return (
    <section className="section compare on-cream" id="comparativo">
      <div className="container">
        <div className="compare-head reveal">
          <div className="eyebrow center">Comparativo</div>
          <h2 className="section-title">
            Fluxa vs. <em>o sistema que você aluga</em>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Cada pedido que sai pelo iFood ou pelos sistemas antigos financia a
            plataforma deles — e deixa você sem dados, sem margem e sem controle.
          </p>
        </div>

        <div className="compare-table-wrap reveal reveal-delay-1">
          <div className="table-scroll-hint">← deslize para ver tudo →</div>
          <table className="compare-table">
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Recurso</th>
                <th>iFood / Pedidos 10</th>
                <th className="th-fluxa">Fluxa Foods</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comissão / taxa por pedido</td>
                <td>
                  <span className="commission-comp">até 30%</span>
                </td>
                <td className="td-fluxa">
                  <span className="commission-fluxa">10%</span>
                </td>
              </tr>
              {ROWS.map((label) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>
                    <span className="cx">—</span>
                  </td>
                  <td className="td-fluxa">
                    <span className="ck">✓</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
