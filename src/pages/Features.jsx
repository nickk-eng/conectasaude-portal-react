import { useEffect, useState } from "react";
import { ArrowDown, Gamepad2 } from "lucide-react";
import { PageHeader } from "../components/SectionHeader";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Modal from "../components/Modal";
import QuizDemo from "../components/QuizDemo";
import { getModules } from "../services/api";
export default function Features() {
  const [modules, setModules] = useState([]);
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    getModules({ signal: controller.signal })
      .then(({ data }) => setModules(data))
      .catch(() => {});
    return () => controller.abort();
  }, []);
  const visible = modules.filter(
    (item) => filter === "Todos" || item.category === filter,
  );
  return (
    <>
      <PageHeader
        number="02"
        eyebrow="FUNCIONALIDADES & DEMONSTRAÇÃO"
        title={
          <>
            Aprender também
            <br />
            <span>é entrar no jogo.</span>
          </>
        }
      >
        Explore os módulos do PFC e experimente uma pequena amostra da
        aprendizagem interativa, diretamente no navegador.
      </PageHeader>
      <section className="container section">
        <SectionHeader
          eyebrow="POR DENTRO DA PLATAFORMA"
          title="Cada módulo, uma nova conexão."
          aside={
            <a className="text-link" href="#demo">
              Ir para a demonstração <ArrowDown size={17} />
            </a>
          }
        />
        <div
          className="filters"
          role="group"
          aria-label="Filtrar funcionalidades"
        >
          {["Todos", "Aprendizagem", "Acompanhamento", "Gestão"].map(
            (category) => (
              <button
                key={category}
                aria-pressed={filter === category}
                className={filter === category ? "active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ),
          )}
        </div>
        <p className="sr-only" aria-live="polite">
          {visible.length} módulos exibidos.
        </p>
        <div className="features-grid">
          {visible.map((item) => (
            <Card
              key={item.id}
              item={item}
              index={modules.indexOf(item)}
              onDetails={setSelected}
            />
          ))}
        </div>
      </section>
      <section id="demo" className="demo-section">
        <div className="container section demo-grid">
          <div className="demo-copy">
            <span className="icon-box">
              <Gamepad2 size={27} />
            </span>
            <span className="eyebrow">SUA VEZ DE EXPERIMENTAR</span>
            <h2>
              Três perguntas.
              <br />
              Novas descobertas.
            </h2>
            <p>
              Escolha uma alternativa, receba um retorno imediato e acompanhe
              sua pontuação. Você pode recomeçar quantas vezes quiser.
            </p>
            <ol className="demo-steps">
              <li>
                <span>01</span> Leia e escolha sua resposta
              </li>
              <li>
                <span>02</span> Descubra o porquê de cada alternativa
              </li>
              <li>
                <span>03</span> Veja seu resultado e tente novamente
              </li>
            </ol>
            <div className="demo-note">
              Esta é uma demonstração independente. Não acessa contas, partidas
              ou avaliações do ConectaSaúde original.
            </div>
          </div>
          <QuizDemo />
        </div>
      </section>
      <Modal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
