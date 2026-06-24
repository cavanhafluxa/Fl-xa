export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.fluxa.png" alt="Fluxa" />
            </div>
            <p className="footer-tagline">
              Do primeiro contato ao caixa — a gente cuida do meio.
            </p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Sistema</div>
            <ul>
              <li>
                <a href="#solucao">Aquisição</a>
              </li>
              <li>
                <a href="#solucao">Conversão</a>
              </li>
              <li>
                <a href="#solucao">Retenção</a>
              </li>
              <li>
                <a href="#solucao">Fluxa Kitchen</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Empresa</div>
            <ul>
              <li>
                <a href="#">Sobre a Fluxa</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Cases</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Legal</div>
            <ul>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
              <li>
                <a href="#">Privacidade</a>
              </li>
              <li>
                <a href="#">Contratos</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Fluxa Foods. Todos os direitos reservados.
          </span>
          <div className="footer-legal">
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
