import { Link } from "react-router-dom";
import Icon from "./Icon";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link className="brand" to="/">
            <span className="brand-icon">
              <Icon name="heart" />
            </span>
            <span>
              Conecta<span className="mint">Saúde</span>
            </span>
          </Link>
          <p>
            Conectar conhecimento.
            <br />
            Transformar o cuidado.
          </p>
          <Link to="/contato">Vamos conversar ↗</Link>
        </div>
        <div className="footer-bottom">
          <span>2026 · Sistemas de Informação · UMC</span>
          <span>Portal independente · Programação para Internet</span>
          <span>Feito para aprender e compartilhar.</span>
        </div>
      </div>
    </footer>
  );
}
