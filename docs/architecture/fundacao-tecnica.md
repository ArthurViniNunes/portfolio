# Fundação técnica do portfólio

Atualizado em 2026-10-01. A aplicação existe em `frontend/`; publicação e auditoria completa de acessibilidade/performance permanecem pendentes. A [revisão visual amostral no Chrome](../design/revisao-visual/README.md) registra verificações móveis e desktop. O [índice de ADRs](adr/README.md) concentra as decisões, alternativas e consequências.

## Limites e stack

React + TypeScript compõem a interface. React Router em modo framework e Vite geram páginas estáticas. Node.js executa desenvolvimento, build e verificações; não há API, banco ou servidor de aplicação em produção. A hospedagem prevista continua Cloudflare Pages na raiz do domínio, com diretório de projeto `frontend`, comando `npm run build` e saída `build/client`.

Português usa as URLs existentes; inglês usa `/en`. Ambas as versões têm conteúdo no HTML inicial. A URL determina o idioma, e os links internos o preservam. Tema claro é o padrão; escolha explícita do modo escuro é persistida no navegador.

## Organização

```text
docs/
  pom/                         requisitos e princípios
  design/                      direção visual, inventário e auditoria
  architecture/adr/            decisões arquiteturais
frontend/
  public/images/               capturas e retrato
  public/resumes/              destino previsto dos três PDFs
  src/root.tsx                 documento HTML e layout global
  src/routes.ts                declaração de rotas
  src/routes/                  páginas React
  src/components/              shell, preferências e composição da abertura
  src/content/                 projetos, textos PT/EN, currículos e busca
  src/styles/site.css          tokens, temas e estilos responsivos
  scripts/                     finalização e verificação do build
  tests/                       comportamento de idioma, tema, busca e conteúdo
```

O estudo em `docs/design/estudo-visual-estatico/` continua como registro exploratório separado. A aplicação não depende dos scripts desse estudo.

## Contratos

- Projetos possuem slug estável, texto nos dois idiomas, imagem com descrição, fonte e estado editorial. O smash-or-pass é destaque por escolha do autor, com autoria em equipe explícita.
- Documentos técnicos possuem contexto, decisão e consequências, além de referência à ADR completa.
- A busca deriva dos catálogos e consulta título, tags e texto no idioma atual. Consulta/filtro ficam na URL; resultados não dependem de serviço externo.
- Currículos têm três focos e links provisórios quebrados por pedido explícito do autor. Somente entradas `placeholder` recebem essa exceção no verificador; arquivos disponíveis precisam existir.
- Tema usa tokens CSS, `data-theme` e preferência local. Loops decorativos ficam na Home; entradas de imagens, menu e feedback de interação aparecem nas demais páginas. Controle global persistido e movimento reduzido governam todos os efeitos, conforme ADR-010.
- A geometria da marca é única e gera componente SVG, favicon e variantes exportáveis no build.
- Perfil e comentários usam catálogos PT/EN com fontes registradas. Depoimentos completos estão no HTML inicial, com divulgação progressiva, tradução identificada e original preservado. Ver ADR-011.
- Contato usa canais já conhecidos e cópia progressiva de e-mail; nenhuma mensagem é enviada pela aplicação.

## Verificação e publicação

Executar dentro de `frontend/`: lint, typecheck, testes, build e verify:html. A checagem de HTML verifica os dois idiomas, metadados, conteúdo no primeiro HTML e destinos internos. Testes medem contraste dos tokens; isso não substitui inspeção visual sobre todas as superfícies.

Antes de publicar: rever links provisórios, conteúdo e contribuições individuais; confirmar o domínio para URLs canônicas absolutas; testar 404 PT/EN, teclado, leitor de tela, 320/390/768/1440 px e Lighthouse na hospedagem. As [pendências do POM](../design/auditoria-pom.md) são explícitas e não equivalem a decisões ainda não tomadas.
