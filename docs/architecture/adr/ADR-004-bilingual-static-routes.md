# ADR-004 — Português e inglês com URLs próprias
Status: aceita. Data: 2026-10-01. Complementa ADR-002.

## Contexto
O autor solicitou tradução completa e botão de idioma. O HTML público precisa continuar útil antes do JavaScript.

## Decisão
Português usa as URLs atuais; inglês usa o prefixo `/en`. As duas versões são pré-renderizadas. O idioma vem da URL, inclusive no primeiro HTML, títulos, descrições, atributos de acessibilidade e estados vazios. O botão alterna a rota equivalente preservando consulta e âncora; navegação interna conserva o idioma. Links alternativos usam `hreflang`. Slugs de produtos são estáveis entre idiomas.

Não redirecionar automaticamente pelo navegador nem por localStorage: um link compartilhado deve abrir no idioma solicitado. O botão representa uma escolha explícita. Dicionários tipados e catálogos locais são suficientes para dois idiomas sem biblioteca adicional.

## Alternativas
Trocar apenas textos após hidratação deixaria o HTML inglês indexado em português. Subdomínios aumentariam a configuração. Traduzir slugs introduziria mapeamento adicional sem benefício necessário agora.

## Consequências e revisão
O número de páginas estáticas duplica. Novos textos e conteúdos devem ter paridade PT/EN; a verificação do build cobre ambas as árvores. O domínio canônico absoluto depende da hospedagem definitiva. Avaliar biblioteca de i18n se surgirem mais idiomas, pluralização complexa ou tradução por equipe externa.

## Referências
[Rotas React Router](https://reactrouter.com/start/framework/routing) e [pré-renderização](https://reactrouter.com/how-to/pre-rendering).
