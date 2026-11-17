# ConectaSaúde — Portal React

Atividade avaliativa independente de **Programação para Internet**, apresentando o PFC de Sistemas de Informação da **Universidade de Mogi das Cruzes (UMC)**.

> Este diretório é um projeto separado. Não é a aplicação original do PFC, não acessa seu banco e não compartilha suas credenciais. O ConectaSaúde local foi consultado somente para leitura. Nenhum comando de Git ou GitHub foi executado durante a criação desta entrega.

## Equipe

- Mateus Pereira da Silva Fernandes
- Nicholas Reginaldo da Fonseca Moura
- Rafael Gastão Trajano Carlos

Orientação: **Professor Bruno Messias Aguiar**.

## Executar

Requisito recomendado: **Node.js 24 LTS** e npm. Ambiente de validação: Node 24.20.0.

No PowerShell:

```powershell
cd C:\Users\Melas\Desktop\conectasaude-portal-react
npm ci
npm run dev
```

Abra a URL exibida pelo Vite. As dependências já foram instaladas nesta entrega; `npm ci` é útil para uma instalação limpa.

Para validar a produção:

```powershell
npm run build
npm run preview
```

A pasta `dist/` contém a saída estática. Não abra o `index.html` diretamente com file://; use o servidor de desenvolvimento ou de prévia.

## Rotas

| Rota               | Página                | Conteúdo e interação                                   |
| ------------------ | --------------------- | ------------------------------------------------------ |
| `/`                | Início                | Proposta, tabuleiro ilustrativo, destaques e navegação |
| `/sobre`           | O projeto             | Contexto, objetivos, público e etapas da gamificação   |
| `/funcionalidades` | Funcionalidades       | Filtros, modal de detalhes e quiz jogável              |
| `/tecnologias`     | Tecnologias           | Stack original, fluxo MVC e separação do portal        |
| `/contato`         | Equipe e contato      | Integrantes, orientação e formulário validado          |
| Qualquer outra     | Página não encontrada | Retorno ao início                                      |

## Organização

```text
public/
  favicon.svg
src/
  components/
    Navbar.jsx        # Menu responsivo e rota ativa
    Footer.jsx
    Button.jsx        # Link ou botão com os mesmos estilos
    Card.jsx
    Icon.jsx
    Modal.jsx         # dialog nativo, foco e Escape
    SectionHeader.jsx # Cabeçalhos de seção e de página
    GamePreview.jsx   # Representação visual do tabuleiro
    QuizDemo.jsx      # Estado, pontuação, feedback e reinício
  pages/
    Home.jsx
    About.jsx
    Features.jsx
    Technologies.jsx
    Contact.jsx       # Formulário controlado e validação
  services/
    api.js            # REST opcional, timeout e fallback local
  data/
    project.js        # Equipe, tecnologias, módulos e navegação
    quiz.js           # Três perguntas demonstrativas
  styles/
    global.css        # Tokens, componentes e breakpoints
  App.jsx             # Rotas, título e foco após navegação
  main.jsx
.env.example
vercel.json
vite.config.js
package.json
package-lock.json
```

## Interações e estado

- `Features`: `useState` filtra os módulos e controla o modal; `useEffect` carrega os dados com cancelamento ao desmontar.
- `QuizDemo`: cada pergunta aceita uma única resposta. A alternativa correta recebe indicação visual e textual. A pontuação conta acertos de 0 a 3; reiniciar limpa todo o estado.
- `Contact`: campos controlados, erros por campo, foco no primeiro erro, nome com 3 caracteres, e-mail válido, assunto obrigatório, mensagem com 10 caracteres e confirmação do caráter demonstrativo.
- O formulário **não envia nem armazena mensagens**. A confirmação explica esse limite; não há envio de e-mail ou gravação em localStorage.
- O Jogo da Velha é ilustrativo neste portal. A demonstração jogável solicitada é o quiz.
- O progresso do quiz é temporário e é reiniciado ao sair da página ou recarregar.
- Menu móvel, link de pular conteúdo, foco visível, `aria-live`, modal com `dialog`, rótulos de formulário e suporte a movimento reduzido.
- As fontes podem ser obtidas pelo Google Fonts. Se a rede estiver indisponível, fontes locais de fallback mantêm a interface utilizável. Ícones Lucide são empacotados localmente.

## API futura

Sem configuração, os dados locais garantem funcionamento estático.

Para experimentar uma API **independente**, copie `.env.example` para `.env.local` neste novo diretório e defina:

```env
VITE_API_BASE_URL=https://sua-api.exemplo.com
```

Essa URL é pública no código do navegador. Nunca coloque senhas, chaves privadas ou a conexão PostgreSQL em variáveis VITE_.

Contratos planejados:

- `GET /modules`: array de objetos com `id`, `category`, `icon`, `title`, `description` e `detail` (strings).
- `GET /quiz`: array com pelo menos três questões contendo `id`, `theme`, `question`, `options` (array de strings), `correct` (índice inteiro válido) e `explanation`.
- Falha HTTP, rede, timeout de 5 segundos ou formato incompatível retorna o conteúdo local.
- Esses contratos **não são os endpoints privados do PFC**. O portal não chama a aplicação original.
- `submitFeedback` está isolado para futura integração. Hoje retorna somente uma confirmação de demonstração. Para envio real, implemente um endpoint com validação no servidor e tratamento adequado de dados.

## Fidelidade ao projeto original

A inspeção foi feita por leitura de README, package.json, app.js, server.js, Config/banco.js, View/css, View/js/jogo.js, rotas e esquema SQL. Não foi necessário ler .env, dados privados ou o Git do PFC.

Constatado no código:

- Educação em saúde sexual e ISTs para estudantes do ensino médio.
- Quiz por tema/dificuldade associado ao Jogo da Velha; partidas contra computador e com colegas.
- Pré-teste de cinco perguntas e pós-teste após pelo menos uma partida; relatórios e histórico.
- Perfis de aluno, professor e administrador; escolas e turmas; envio e moderação de questões.
- MVC com HTML/CSS/JavaScript, Node.js, Express e PostgreSQL via pg.
- bcryptjs, otplib, qrcode e Nodemailer.
- Salas multiplayer em memória com consulta periódica a cada segundo; não foram identificados WebSockets na mecânica consultada.
- Paleta original: `#0d1b2a`, `#14293c`, `#2dd4a8`, `#eafff6` e `#9ab5b0`; família Manrope.

React, Vite e React Router pertencem a **este portal**, não à stack original.

Os objetivos e as etapas da metodologia são uma **síntese editorial da implementação**, não transcrição do texto acadêmico, que não estava entre os arquivos consultados. Não há estatísticas de eficácia, resultados reais de estudantes, fotos ou depoimentos inventados. As perguntas demonstrativas são autorais e tratam de informação confiável, acolhimento e letramento em saúde.

## Publicar manualmente no GitHub

**Os comandos abaixo são apenas instruções para você executar.**

1. Acesse https://github.com/new e crie, na conta `nickk-eng`, um repositório **novo** chamado `conectasaude-portal-react`.
2. Deixe o repositório vazio: não adicione README, licença ou .gitignore pelo GitHub.
3. No PowerShell, confirme que está na pasta nova e execute:

```powershell
cd C:\Users\Melas\Desktop\conectasaude-portal-react
git init
git add .
git commit -m "Cria portal React independente do ConectaSaude"
git branch -M main
git remote add origin https://github.com/nickk-eng/conectasaude-portal-react.git
git push -u origin main
```

Se o Git solicitar identidade, configure seu nome e e-mail para o novo repositório antes de repetir o commit. A autenticação com o GitHub será feita por você. Não execute esses comandos na pasta do PFC original.

## Publicar manualmente na Vercel

1. Entre na Vercel com sua conta e escolha **Add New → Project**.
2. Autorize e importe somente o novo repositório `conectasaude-portal-react`.
3. Use o preset **Vite** e mantenha a raiz do projeto no diretório principal deste novo repositório.
4. Confira: comando de instalação `npm ci`, build `npm run build` e saída `dist`. Se houver escolha de Node.js, use 24.x.
5. Não é necessária variável de ambiente para a versão demonstrativa.
6. Clique em **Deploy** e aguarde a URL de publicação.
7. Abra a URL com `/sobre`, `/funcionalidades`, `/tecnologias` e `/contato`; recarregue cada uma para verificar as rotas.
8. Confira o quiz, o menu no celular e a confirmação do formulário.

O `vercel.json` já contém o rewrite da SPA:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Isso permite que o React Router resolva rotas internas em acessos diretos. Os deploys e as operações de GitHub ficam sob seu controle; nada foi publicado automaticamente.

## Referências técnicas

- Vite: https://vite.dev/guide/
- React Router: https://reactrouter.com/start/declarative/routing
- Vercel (configuração e rewrite): https://vercel.com/docs/project-configuration/vercel-json

## Revisão manual

- Texto, equipe e tecnologias: `src/data/project.js`.
- Perguntas e feedback: `src/data/quiz.js`.
- Paleta e layout: variáveis em `src/styles/global.css`.
- Integração futura: `src/services/api.js`.
- Validação de contato: `src/pages/Contact.jsx`.

## Validação desta entrega

- Build final de produção: aprovado (Vite 8.3.8).
- Navegação das cinco páginas e recarga da rota /tecnologias: verificadas na prévia local.
- Layout desktop de 1440 px; navegação mobile de 390 px; formulário de 320 px: verificados.
- Filtro de aprendizagem: dois módulos; modal de detalhes: abertura e fechamento verificados.
- Quiz: acerto e erro, bloqueio das alternativas, resultado de 2/3 e reinício em zero: verificados no navegador.
- Contato: erros obrigatórios, foco no primeiro erro e confirmação com dados fictícios: verificados.
- Serviço: conteúdo local, falha de rede, HTTP inválido, formato inválido, quiz incompleto, API válida e confirmação demonstrativa: aprovados em verificação isolada.
- Vercel: configuração preparada; publicação e teste na URL de produção dependem da execução manual pelo responsável.
