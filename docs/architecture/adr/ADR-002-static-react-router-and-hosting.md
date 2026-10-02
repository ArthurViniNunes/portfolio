# ADR-002 — Rotas React com pré-renderização estática

Status: aceito para a implementação inicial.
Data: 2026-09-29.

## Contexto

O POM exige navegação profunda, busca, acesso rápido ao conteúdo e páginas públicas legíveis e indexáveis. A [ADR-001](ADR-001-react-node-foundation.md) fixa React + TypeScript e Node.js apenas no desenvolvimento e no build. O portfólio anterior usa GitHub Pages em `/portfolio/`, mas a combinação de `basename` com pré-renderização no React Router 8.4 não concluiu o build nesta verificação. Hospedar na raiz evita esse desvio de caminhos.

## Decisão

- Usar React Router em **framework mode**, com rotas declaradas e componentes React em TypeScript.
- Gerar HTML estático para todas as rotas públicas conhecidas no build (`ssr: false` com `prerender`). Conteúdo e links principais devem constar no HTML, antes da hidratação.
- Usar arquivos versionados e tipados como fonte inicial de projetos e documentos. A busca consulta esse mesmo conteúdo no navegador; não há API nem banco no MVP.
- Preparar o build para hospedagem estática na raiz de um projeto Cloudflare Pages. A pasta de publicação é `build/client`; não há Pages Functions nem servidor de aplicação.
- Não publicar automaticamente. A publicação depende de revisão de conteúdo, links e configuração do repositório.

## Complementos de 01/10/2026

A aplicação está em `frontend/`; a saída completa é `frontend/build/client`. As ADRs [004](ADR-004-bilingual-static-routes.md) e [008](ADR-008-repository-and-quality.md) registram URLs PT/EN, pré-renderização derivada dos catálogos e diretório de build da hospedagem. A rota de documento técnico agora usa `/engineering/:doc`. Páginas 404 são geradas nos dois idiomas; o fallback da hospedagem deve ser conferido na publicação.

## Consequências

Uma nova rota de conteúdo precisa entrar na lista de pré-renderização. A busca com parâmetro `q` começa na página estática de busca e calcula resultados no navegador; a página ainda tem título, instruções e navegação sem JavaScript. Não haverá servidor Node.js atendendo visitantes. Uma futura migração de hospedagem deverá verificar novamente o comportamento do prefixo de rota antes de publicar.

Rotas sem conteúdo autoral verificado permanecem com estado vazio honesto. Isso mantém a arquitetura pronta, mas não equivale a afirmar que a área editorial do POM esteja concluída.

## Referências

- [React Router — Pre-Rendering](https://reactrouter.com/how-to/pre-rendering)
- [React Router — Configuração e basename](https://reactrouter.com/api/framework-conventions/react-router.config.ts)
- [Cloudflare Pages — publicação de HTML estático](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)
- [POM-016 — Navegação](../../pom/05-information-architecture/POM-016-navigation-model.md)
- [POM-020 — Busca](../../pom/06-feature-especifications/POM-020-search-system.md)
