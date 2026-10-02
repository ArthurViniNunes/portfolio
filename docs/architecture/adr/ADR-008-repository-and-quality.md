# ADR-008 — Frontend isolado e verificações proporcionais
Status: aceita. Data: 2026-10-01.

## Contexto
A aplicação foi organizada em `frontend/`; documentação de produto, design e arquitetura fica em `docs/`. Documentos anteriores ainda citavam caminhos da raiz.

## Decisão
Executar npm dentro de `frontend/`, com um lockfile e uma aplicação. React Router/Vite geram `frontend/build/client`. Não introduzir monorepo, workspace de pacotes ou servidor vazio. TypeScript verifica contratos; Biome verifica código; Node testa regras de idioma, conteúdo, catálogo e busca; o verificador de build confere HTML e recursos em todos os idiomas. Fluxos de tema, navegação e responsividade devem ser exercitados em navegador quando disponível.

## Alternativas
Ferramentas de monorepo e múltiplos pacotes adicionariam coordenação sem aplicações independentes. Testes que apenas reproduzem componentes não substituem cenários de navegação.

## Consequências e revisão
Cloudflare Pages deve usar `frontend` como diretório raiz do build, comando `npm run build`, saída `build/client`. Publicação não é automática. As metas de Lighthouse do POM-003 continuam critérios a medir, sem presumir aprovação por um build bem-sucedido.
