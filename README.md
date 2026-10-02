# Portfólio de Arthur Nunes

Portfólio em React e TypeScript com páginas públicas pré-renderizadas. Node.js é usado no desenvolvimento e no build; não há API ou servidor de aplicação em produção. A [ADR-002](docs/architecture/adr/ADR-002-static-react-router-and-hosting.md) registra rotas, geração estática e hospedagem prevista. O [POM](docs/pom/README.md) é a especificação do produto, e a [auditoria de conformidade](docs/design/auditoria-pom.md) mostra o que já está implementado e o que permanece pendente.

## Executar localmente

Requer Node.js 22.22 ou superior. No Windows, use `npm.cmd` se a política do PowerShell impedir `npm.ps1`.

```sh
cd frontend
npm install
npm run dev
```

## Verificar

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run verify:html
```

Execute as verificações dentro de `frontend/`. O build gera `frontend/build/client`, com HTML para as versões portuguesa e inglesa das rotas públicas. Na Cloudflare Pages, o diretório raiz do projeto deve ser `frontend`, o comando `npm run build` e a saída `build/client`. O projeto não foi publicado por este fluxo.

Projetos e outros textos editáveis ficam em `frontend/src/content/`, separados das páginas e dos componentes. O catálogo usa português e inglês; o botão de idioma conserva a página atual. Tema claro é o padrão e o modo escuro pode ser ativado e persistido. Smash or Pass é o produto em destaque, com contexto de equipe e fontes no caso.

O caso Plateia ainda precisa de revisão técnica; Learning permanece sem estudos fornecidos. Sobre apresenta a trajetória profissional e acadêmica com base nas memórias enviadas pelo autor. Currículos indexa DevOps, Full Stack e Engenharia de Software. Por solicitação do autor, os três links de PDF são provisórios e quebrados até receberem arquivos em `frontend/public/resumes/`; a interface informa essa condição.

O [índice de ADRs](docs/architecture/adr/README.md) reúne as decisões de stack, hospedagem, conteúdo, idiomas, temas, movimento, currículos, organização e contato. O [planejamento de telas](docs/design/planejamento-de-telas.md) registra a evolução visual. A composição animada da Home tem pausa e respeita movimento reduzido; a revisão do [POM-044](docs/pom/08-visual-design-system/POM-044-motion-system.md) registra a exceção autorizada pelo autor.

A [identidade visual](docs/design/identidade-e-movimento.md) inclui um símbolo AN contínuo, favicon e variantes SVG geradas da mesma geometria. O controle de movimento é global e persistido. Comentários de Rhyan e Marcos aparecem na Home e em Sobre, com originais, contexto e traduções identificadas. As [fontes do perfil](docs/content/fontes-do-perfil.md) e as [recomendações para evolução do produto](docs/design/recomendacoes-de-produto.md) documentam conteúdo e próximos passos.
