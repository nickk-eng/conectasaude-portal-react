import { useEffect, useRef } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";
import { navigation } from "./data/project";

export default function App() {
  const { pathname } = useLocation();
  const main = useRef(null);
  const firstRender = useRef(true);
  useEffect(() => {
    const page = navigation.find((item) => item.to === pathname);
    document.title =
      (page?.title || "Página não encontrada") + " | ConectaSaúde";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (!firstRender.current) main.current?.focus({ preventScroll: true });
    firstRender.current = false;
  }, [pathname]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/funcionalidades" element={<Features />} />
          <Route path="/tecnologias" element={<Technologies />} />
          <Route path="/contato" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="container not-found">
                <span className="eyebrow">ERRO 404</span>
                <h1>Essa conexão não existe.</h1>
                <p>
                  O endereço pode ter mudado. Continue explorando o projeto.
                </p>
                <Link className="button button--primary" to="/">
                  Voltar ao início
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
