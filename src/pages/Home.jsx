import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  MousePointer2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import Icon from "../components/Icon";
import GamePreview from "../components/GamePreview";
import { modules } from "../data/project";
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="badge">
            <span className="live-dot" /> SAÚDE, EDUCAÇÃO E TECNOLOGIA
          </span>
          <h1>
            Conhecimento
            <br />
            que conecta.
            <br />
            <span>
              Cuidado que
              <br className="desktop-break" /> transforma.
            </span>
          </h1>
          <p>
            Aprender sobre saúde pode ser mais leve, participativo e
            significativo. Conheça o ConectaSaúde: educação que ganha vida
            através do jogo.
          </p>
          <div className="hero-actions">
            <Button to="/funcionalidades">
              Explore a experiência <ArrowUpRight size={18} />
            </Button>
            <Button to="/sobre" variant="ghost">
              Conheça o projeto <ArrowRight size={17} />
            </Button>
          </div>
          <div className="academic-tag">
            <span className="academic-icon">
              <GraduationCap size={22} />
            </span>
            <div>
              <strong>Da universidade para novas conexões.</strong>
              <span>Projeto de PFC · Sistemas de Informação · UMC</span>
            </div>
          </div>
        </div>
        <GamePreview />
      </section>
      <div className="principle-strip">
        <div className="container">
          <span>
            <Icon name="heart" size={19} /> Educação em saúde
          </span>
          <i />
          <span>
            <Icon name="game" size={19} /> Aprendizagem com gamificação
          </span>
          <i />
          <span>
            <Icon name="users" size={19} /> Conhecimento compartilhado
          </span>
        </div>
      </div>
      <section className="section container">
        <SectionHeader
          eyebrow="APRENDER. JOGAR. EVOLUIR."
          title="Um propósito. Diferentes formas de conectar."
          aside={
            <Link className="text-link" to="/funcionalidades">
              Todas as funcionalidades <ArrowUpRight size={17} />
            </Link>
          }
        >
          Mecânicas que aproximam a informação do cotidiano dos estudantes.
        </SectionHeader>
        <div className="home-features">
          {modules.slice(0, 3).map((item, i) => (
            <Link to="/funcionalidades" className="home-feature" key={item.id}>
              <div className="card-top">
                <Icon name={item.icon} size={29} />
                <span>
                  0{i + 1} <ArrowUpRight size={18} />
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="purpose-section">
        <div className="container purpose-grid">
          <div>
            <span className="eyebrow">MAIS QUE UMA PARTIDA</span>
            <h2>
              A melhor conquista
              <br />é o que você aprende.
            </h2>
          </div>
          <div>
            <p>
              Informação sobre saúde sexual e ISTs merece espaço para perguntas,
              diálogo e descobertas. O ConectaSaúde propõe transformar esse
              encontro em uma experiência ativa.
            </p>
            <Button variant="ghost" to="/sobre">
              Entenda nossa proposta <ArrowRight size={17} />
            </Button>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="cta-panel">
          <div>
            <span className="eyebrow">PRONTO PARA SUA PRIMEIRA CONEXÃO?</span>
            <h2>Uma pergunta pode ser o começo.</h2>
            <p>Experimente nosso mini-quiz. Sem cadastro, no seu ritmo.</p>
          </div>
          <Button to="/funcionalidades">
            <MousePointer2 size={18} /> Quero experimentar{" "}
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </section>
    </>
  );
}
