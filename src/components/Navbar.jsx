import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../data/project";
import Icon from "./Icon";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link
          to="/"
          className="brand"
          aria-label="ConectaSaúde — início"
          onClick={() => setOpen(false)}
        >
          <span className="brand-icon">
            <Icon name="heart" size={25} />
          </span>
          <span>
            Conecta<span className="mint">Saúde</span>
            <small>CONHECIMENTO QUE CUIDA</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={open ? "nav-links is-open" : "nav-links"}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link className="nav-cta" to="/funcionalidades">
          Experimentar <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
