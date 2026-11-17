import { ArrowUpRight, Target, BookOpen, Users, Lightbulb } from "lucide-react";
import { PageHeader } from "../components/SectionHeader";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
const steps = [
  [
    "01",
    "Entender o contexto",
    "Reconhecer dúvidas e necessidades de aprendizagem sobre saúde sexual e ISTs no ensino médio.",
  ],
  [
    "02",
    "Organizar o conteúdo",
    "Classificar perguntas por tema e dificuldade e estabelecer o fluxo de revisão docente e administrativa.",
  ],
  [
    "03",
    "Conectar conteúdo e jogo",
    "Associar o quiz às jogadas do tabuleiro, com feedback e possibilidade de participação com colegas.",
  ],
  [
    "04",
    "Acompanhar a aprendizagem",
    "Comparar pré e pós-teste e consultar históricos e relatórios para apoiar o acompanhamento pedagógico.",
  ],
];
export default function About() {
  return (
    <>
      <PageHeader
        number="01"
        eyebrow="O PROJETO"
        title={
          <>
            Tecnologia que aproxima.
            <br />
            <span>Educação que faz sentido.</span>
          </>
        }
      >
        Uma proposta acadêmica para tornar o aprendizado sobre saúde mais
        participativo, acessível e conectado à realidade dos estudantes.
      </PageHeader>
      <section className="container section about-intro">
        <div>
          <span className="eyebrow">O PONTO DE PARTIDA</span>
          <h2>
            Como transformar
            <br />
            informação em participação?
          </h2>
        </div>
        <div>
          <p>
            Falar de saúde sexual e infecções sexualmente transmissíveis exige
            espaço para dúvidas e uma abordagem respeitosa. A proposta do
            ConectaSaúde é oferecer um ambiente educativo em que estudantes
            participem ativamente desse aprendizado.
          </p>
          <p>
            Desenvolvido como PFC em Sistemas de Informação na Universidade de
            Mogi das Cruzes (UMC), o sistema reúne perguntas, estratégia e
            acompanhamento pedagógico. Este portal apresenta o trabalho em uma
            atividade independente de Programação para Internet.
          </p>
        </div>
      </section>
      <section className="container section section-tight">
        <div className="objective-grid">
          <article className="objective-main">
            <Target size={31} />
            <span className="eyebrow">OBJETIVO GERAL</span>
            <h2>Aproximar educação em saúde e aprendizagem ativa.</h2>
            <p>
              Oferecer uma plataforma web gamificada sobre saúde sexual e ISTs,
              articulando quiz, Jogo da Velha e acompanhamento da evolução dos
              estudantes.
            </p>
          </article>
          <div className="objective-list">
            {[
              [
                BookOpen,
                "Informar com contexto",
                "Organizar conteúdos educativos por temas e níveis de dificuldade.",
              ],
              [
                Lightbulb,
                "Estimular a participação",
                "Incentivar a aprendizagem com desafios, feedback e estratégia.",
              ],
              [
                Users,
                "Apoiar o acompanhamento",
                "Dar aos professores visibilidade sobre turmas, partidas e avaliações.",
              ],
            ].map(([Symbol, title, text]) => (
              <article key={title}>
                <Symbol size={23} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="note">
          Objetivos e etapas sintetizados a partir da implementação local; não
          constituem transcrição do documento acadêmico do PFC.
        </p>
      </section>
      <section className="method-section">
        <div className="container section">
          <SectionHeader
            eyebrow="DA INTENÇÃO À EXPERIÊNCIA"
            title="Uma jornada guiada pela aprendizagem."
          />
          <div className="method-grid">
            {steps.map(([number, title, text]) => (
              <article key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section audience-grid">
        <div>
          <span className="eyebrow">PARA QUEM CONECTAMOS</span>
          <h2>
            Alunos no centro.
            <br />
            Professores por perto.
          </h2>
          <p>
            O sistema contempla estudantes do 1º ao 3º ano do ensino médio,
            professores e administradores. Cada perfil participa de uma etapa da
            experiência.
          </p>
          <Button to="/funcionalidades">
            Conhecer os módulos <ArrowUpRight size={17} />
          </Button>
        </div>
        <div className="audience-list">
          {[
            [
              "01",
              "Estudantes",
              "Exploram perguntas, jogam e consultam o próprio histórico.",
            ],
            [
              "02",
              "Professores",
              "Organizam turmas, propõem questões e acompanham avaliações.",
            ],
            [
              "03",
              "Administração",
              "Modera conteúdo, aprova acessos e gerencia contas.",
            ],
          ].map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
