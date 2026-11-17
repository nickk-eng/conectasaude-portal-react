export const navigation = [
  { to: "/", label: "Início", title: "Conhecimento que cuida" },
  { to: "/sobre", label: "O projeto", title: "Sobre o projeto" },
  {
    to: "/funcionalidades",
    label: "Funcionalidades",
    title: "Explore e experimente",
  },
  {
    to: "/tecnologias",
    label: "Tecnologias",
    title: "Arquitetura e tecnologias",
  },
  { to: "/contato", label: "Equipe & contato", title: "Equipe e contato" },
];

export const modules = [
  {
    id: "quiz",
    category: "Aprendizagem",
    icon: "quiz",
    title: "Quiz educativo",
    description:
      "Cada pergunta é uma oportunidade de aprender. Conteúdos sobre saúde sexual e ISTs, organizados por tema e dificuldade.",
    detail:
      "No projeto original, as perguntas são enviadas por professores, revisadas pela administração e disponibilizadas por dificuldade e tema. Esta demonstração usa três questões locais e feedback imediato.",
  },
  {
    id: "game",
    category: "Aprendizagem",
    icon: "game",
    title: "Jogo da Velha temático",
    description:
      "Conhecimento e estratégia no mesmo tabuleiro. Acerte uma pergunta para conquistar sua próxima jogada.",
    detail:
      "O jogo original conecta respostas corretas ao direito de marcar uma casa. Há partidas contra o computador e salas com código para jogar com um colega. O tabuleiro deste portal é uma representação visual dessa mecânica.",
  },
  {
    id: "progress",
    category: "Acompanhamento",
    icon: "chart",
    title: "Evolução que aparece",
    description:
      "Pré-teste, partidas e pós-teste tornam o percurso de aprendizagem visível para alunos e professores.",
    detail:
      "O pré-teste original sorteia cinco perguntas aprovadas. Depois de pelo menos uma partida, o pós-teste reutiliza as questões para comparar resultados. Relatórios permitem filtrar por escola, ano, turma e período. Não há resultados reais de alunos neste portal.",
  },
  {
    id: "class",
    category: "Acompanhamento",
    icon: "users",
    title: "Turmas conectadas",
    description:
      "Professores organizam escolas e turmas e acompanham os estudantes vinculados ao seu trabalho.",
    detail:
      "O sistema original tem perfis de aluno, professor e administrador. O acesso de professores depende de aprovação administrativa. Turmas e escolas organizam o acompanhamento pedagógico.",
  },
  {
    id: "review",
    category: "Gestão",
    icon: "shield",
    title: "Conteúdo com revisão",
    description:
      "Um fluxo de envio, aprovação e categorização mantém as perguntas organizadas para as partidas.",
    detail:
      "Professores enviam questões; administradores aprovam ou recusam. O banco de perguntas inclui temas de ISTs e níveis de dificuldade. O portal não reproduz o painel administrativo.",
  },
  {
    id: "access",
    category: "Gestão",
    icon: "lock",
    title: "Acesso e privacidade",
    description:
      "Autenticação em duas etapas, controle de perfis e solicitações de privacidade fazem parte da aplicação original.",
    detail:
      "A implementação original utiliza bcryptjs para senhas, TOTP ou código por e-mail no login, autorização por perfil, sessões e auditoria. A presença desses recursos não equivale a uma certificação de segurança ou conformidade.",
  },
];

export const team = [
  {
    initials: "MP",
    name: "Mateus Pereira da Silva Fernandes",
    role: "Integrante do PFC",
  },
  {
    initials: "NM",
    name: "Nicholas Reginaldo da Fonseca Moura",
    role: "Integrante do PFC",
  },
  {
    initials: "RC",
    name: "Rafael Gastão Trajano Carlos",
    role: "Integrante do PFC",
  },
];
export const advisor = "Professor Bruno Messias Aguiar";

export const technologies = [
  {
    name: "HTML · CSS · JavaScript",
    label: "Interface original",
    text: "Páginas sem framework, estilos próprios e consumo de endpoints com fetch.",
    layer: "front",
  },
  {
    name: "Node.js · Express 5",
    label: "Servidor e API",
    text: "Rotas, middlewares e controllers processam as requisições da aplicação.",
    layer: "api",
  },
  {
    name: "PostgreSQL · pg",
    label: "Persistência",
    text: "Modelos acessam usuários, perguntas, partidas, avaliações, escolas e turmas.",
    layer: "data",
  },
  {
    name: "bcryptjs · otplib · QRCode",
    label: "Autenticação",
    text: "Hash de senhas e configuração do segundo fator por aplicativo autenticador.",
    layer: "api",
  },
  {
    name: "Nodemailer",
    label: "Mensageria",
    text: "Envio por SMTP de códigos de login e de recuperação de senha.",
    layer: "api",
  },
  {
    name: "React · Vite · React Router",
    label: "Este portal independente",
    text: "Componentes, estado e navegação SPA. Funciona estaticamente, sem banco de dados.",
    layer: "portal",
  },
];
