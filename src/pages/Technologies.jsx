import {
  ArrowLeftRight,
  Code2,
  Database,
  Server,
  Layers,
  Braces,
  ArrowUpRight,
} from "lucide-react";
import { PageHeader } from "../components/SectionHeader";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import { technologies } from "../data/project";
export default function Technologies() {
  return (
    <>
      <PageHeader
        number="03"
        eyebrow="ARQUITETURA & TECNOLOGIAS"
        title={
          <>
            Por trás da experiência,
            <br />
            <span>conexões bem construídas.</span>
          </>
        }
      >
        Uma visão da stack real do PFC, da interface ao banco de dados, e das
        escolhas deste portal independente.
      </PageHeader>
      <section className="container section">
        <SectionHeader
          eyebrow="ARQUITETURA DO PFC ORIGINAL"
          title="Da interação à informação."
        >
          A aplicação organiza as responsabilidades em MVC, com serviços e
          middlewares de apoio.
        </SectionHeader>
        <div
          className="architecture"
          aria-label="Fluxo bidirecional entre interface, API Express e banco PostgreSQL"
        >
          <article>
            <Code2 size={31} />
            <span className="eyebrow">01 · INTERFACE</span>
            <h3>Front-End</h3>
            <p>HTML · CSS · JavaScript</p>
            <small>Eventos, telas e chamadas fetch</small>
          </article>
          <span className="architecture-arrow">
            <ArrowLeftRight />
            <small>HTTP / JSON</small>
          </span>
          <article>
            <Server size={31} />
            <span className="eyebrow">02 · REGRAS</span>
            <h3>API & servidor</h3>
            <p>Node.js · Express</p>
            <small>Rotas, autorização e controllers</small>
          </article>
          <span className="architecture-arrow">
            <ArrowLeftRight />
            <small>Consultas SQL</small>
          </span>
          <article>
            <Database size={31} />
            <span className="eyebrow">03 · DADOS</span>
            <h3>PostgreSQL</h3>
            <p>Modelos · driver pg</p>
            <small>Contas, perguntas e resultados</small>
          </article>
        </div>
        <div className="request-flow">
          <span>UMA REQUISIÇÃO POR DENTRO</span>
          <p>
            View <b>→</b> Routes <b>→</b> Middleware <b>→</b> Controller{" "}
            <b>→</b> Model <b>→</b> PostgreSQL
          </p>
          <small>
            O retorno percorre o caminho de volta, e a interface apresenta o
            resultado.
          </small>
        </div>
      </section>
      <section className="container section section-tight">
        <SectionHeader
          eyebrow="ESCOLHAS QUE SUSTENTAM O SISTEMA"
          title="Tecnologias com responsabilidades claras."
        />
        <div className="tech-grid">
          {technologies.map((item, i) => (
            <article
              key={item.name}
              className={
                item.layer === "portal" ? "tech-card portal-card" : "tech-card"
              }
            >
              <div className="card-top">
                <span className="tech-index">0{i + 1}</span>
                <Braces size={21} />
              </div>
              <span className="eyebrow">{item.label}</span>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="method-section">
        <div className="container section split-info">
          <div>
            <Layers size={31} className="mint" />
            <h2>
              Separar responsabilidades
              <br />
              para evoluir com clareza.
            </h2>
            <p>
              No PFC, o SQL fica nos modelos e scripts de banco; controllers
              coordenam regras e respostas; rotas ligam URLs aos controllers.
              Serviços apoiam autenticação, e-mail e salas.
            </p>
          </div>
          <div className="technical-notes">
            <article>
              <h3>Multiplayer por consulta periódica</h3>
              <p>
                Salas ficam na memória de uma instância e são atualizadas por
                consultas a cada segundo. Reiniciar o servidor encerra salas
                abertas; resultados concluídos são persistidos.
              </p>
            </article>
            <article>
              <h3>Este portal funciona de forma estática</h3>
              <p>
                React e React Router cuidam da apresentação. O serviço de dados
                usa conteúdo local e aceita uma futura API REST opcional, com
                fallback em caso de falha.
              </p>
            </article>
            <article>
              <h3>Fidelidade ao código consultado</h3>
              <p>
                Fontes locais: package.json, app.js, Config/banco.js, Routes,
                View, scripts SQL e README. Não há conexão deste portal com o
                banco original.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="cta-panel">
          <div>
            <span className="eyebrow">DO CÓDIGO PARA A EXPERIÊNCIA</span>
            <h2>Veja essas ideias em movimento.</h2>
          </div>
          <Button to="/funcionalidades">
            Experimentar o quiz <ArrowUpRight size={17} />
          </Button>
        </div>
      </section>
    </>
  );
}
