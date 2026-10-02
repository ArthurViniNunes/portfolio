# Portfólio de Arthur Nunes

Este é o repositório do meu portfólio pessoal.

Eu sou Arthur Nunes, desenvolvedor Full Stack e estudante de Ciência da Computação na UFC. Uso este projeto para mostrar o que construo, explicar as decisões por trás de cada produto e compartilhar um pouco de como gosto de trabalhar em equipe.

O portfólio está sendo construído com React e TypeScript. A primeira versão tem português e inglês, tema claro e escuro, busca local, páginas de projetos, documentação de arquitetura e uma Home com movimento controlável.

## O que você encontra aqui

- **Projetos:** casos com problema, solução, decisões técnicas, fontes e estado editorial.
- **Engenharia:** ADRs e documentos que explicam como o próprio portfólio foi construído.
- **Sobre:** trajetória profissional e acadêmica, interesses e comentários de pessoas com quem trabalhei.
- **Currículos:** entradas para as versões DevOps, Full Stack e Engenharia de Software.
- **Contato:** e-mail, GitHub e LinkedIn, sem formulário ou API intermediária.

O projeto em destaque é o [Smash or Pass](https://github.com/ArthurViniNunes/smash-or-pass/), uma aplicação para descobrir e compartilhar receitas. Ele reúne interface, regras de negócio, autenticação, moderação e uma API documentada. Também há uma [demonstração em vídeo](https://youtu.be/u6gNtyVILso).

## Como executar

Você precisa de Node.js 22.22 ou superior.

```bash
cd frontend
npm install
npm run dev
```

Depois, abra o endereço exibido pelo React Router no terminal. No Windows, use `npm.cmd` caso o PowerShell bloqueie `npm.ps1`:

```powershell
npm.cmd run dev
```

## Como verificar

Os comandos abaixo devem ser executados dentro de `frontend/`:

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run verify:html
```

Essas verificações cobrem formatação e lint, tipos, comportamento dos catálogos, idioma, tema, movimento, busca, contraste e HTML pré-renderizado. O build gera `frontend/build/client` com as páginas públicas em português e inglês.

## Decisões técnicas

O navegador recebe arquivos estáticos gerados no build. Node.js participa do desenvolvimento, da geração e das verificações; não existe uma API Node.js em produção.

React Router pré-renderiza as rotas públicas para que projetos, documentos e metadados estejam disponíveis antes da hidratação. O português usa as URLs existentes e o inglês usa o prefixo `/en`.

O conteúdo fica separado dos componentes em `frontend/src/content/`. Isso permite revisar projetos, traduções, currículos e depoimentos sem misturar dados editoriais com a composição visual.

A marca visual é um símbolo vetorial que conecta as letras A e N. A mesma geometria gera o componente SVG, o favicon e as variantes exportáveis. A Home usa contornos, planos translúcidos e o retrato com movimento; o visitante pode pausar as animações, e `prefers-reduced-motion` tem prioridade.

As decisões completas estão no [índice de ADRs](docs/architecture/adr/README.md). A [fundação técnica](docs/architecture/fundacao-tecnica.md) descreve os limites da aplicação e a [identidade visual](docs/design/identidade-e-movimento.md) registra a direção de marca e movimento.

## Organização do repositório

```text
docs/
  architecture/          decisões técnicas e fundação do sistema
  content/                fontes e limites do conteúdo editorial
  design/                 planejamento, auditoria e revisão visual
  pom/                    Product Operating Model
frontend/
  public/                 imagens, marca, favicon e destinos de currículo
  src/components/         shell, navegação e componentes visuais
  src/content/            projetos, perfil, traduções e preferências
  src/routes/              páginas públicas do portfólio
  src/styles/             tokens, temas e layout responsivo
  scripts/                 build final e verificação de HTML
  tests/                   testes de idioma, conteúdo, tema e movimento
```

O diretório `docs/design/estudo-visual-estatico/` é uma exploração visual independente. Ele documenta ideias de composição, mas não é a base da aplicação React.

## Estado atual

O portfólio está funcional para desenvolvimento local e revisão de conteúdo. Ainda há algumas pendências conscientes:

- os três PDFs de currículo são links provisórios até que os arquivos finais sejam adicionados;
- Learning continua com estado vazio até haver estudos autorais prontos para publicação;
- Plateia ainda precisa de revisão técnica antes de receber um estudo de caso completo;
- a revisão visual foi feita em navegador conectado, mas Lighthouse em produção, leitor de tela e testes em aparelhos físicos continuam pendentes.

Essas lacunas aparecem na [auditoria do POM](docs/design/auditoria-pom.md), em vez de serem preenchidas com métricas ou experiências inventadas. As próximas melhorias estão organizadas em [recomendações de produto](docs/design/recomendacoes-de-produto.md).

## Links

- [Portfólio](https://arthurvininunes.github.io/portfolio/)
- [GitHub](https://github.com/ArthurViniNunes)
- [LinkedIn](https://www.linkedin.com/in/arthurvininunes/)

Se você encontrou um problema, quer conversar sobre uma decisão técnica ou tem uma sugestão para o portfólio, pode abrir uma issue ou entrar em contato pelo LinkedIn.
