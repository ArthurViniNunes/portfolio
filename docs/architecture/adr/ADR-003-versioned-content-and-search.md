# ADR-003 — Conteúdo tipado e busca local
Status: aceita. Data: 2026-10-01.

## Contexto
O POM-013, 020 e 024 pedem evidência, busca de texto completo e conteúdo consistente. O acervo é pequeno e mantido pelo autor.

## Decisão
Projetos, documentos, textos de interface e currículos ficam em módulos TypeScript versionados em `frontend/src/content/`. Campos traduzíveis possuem versões PT/EN verificáveis pelo compilador. Identificadores, tags técnicas, slugs e URLs são estáveis. A busca deriva desses dados, opera no idioma da página, normaliza acentos e combina todos os termos. Seus filtros usam identificadores independentes do idioma. Estado de filtros e consulta pode ser compartilhado por URL.

O autor identificou smash-or-pass como seu produto mais maduro; ele abre a vitrine. Essa prioridade editorial não comprova funcionalidades, métricas ou stack. O README e as convenções arquiteturais do repositório sustentam o conteúdo técnico. Fontes e lacunas permanecem explícitas; os links de currículos ausentes seguem a exceção autorizada na ADR-007.

## Alternativas
CMS, banco e serviço externo de busca foram considerados desnecessários para o acervo atual. Markdown/MDX pode ser adotado quando o volume de textos longos justificar um fluxo editorial específico.

## Consequências e revisão
Atualizações exigem build. Índice e páginas usam a mesma fonte. Ao crescer o acervo, medir tamanho do índice e custo de busca antes de adotar carregamento separado ou serviço remoto. Testes verificam paridade de projetos e busca nos dois idiomas.
