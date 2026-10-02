# ADR-010: marca vetorial e controle global de movimento

Status: aceita. Data: 2026-10-01. Complementa a ADR-006.

## Contexto

Arthur solicitou uma marca própria e animações mais perceptíveis. A abertura anterior tinha pouco contraste e amplitude. As preferências de idioma, tema e movimento precisam permanecer coerentes entre páginas pré-renderizadas e após hidratação.

## Decisão

O símbolo liga as iniciais A e N por um traço contínuo. Sua geometria é definida em `src/content/brand.ts`, consumida pelo componente SVG e por `scripts/generate-brand.mjs`. O build gera favicon e três variantes de símbolo. Não há dependência de imagem raster ou de fonte para desenhar a marca.

SVG e CSS animam contornos, símbolo, planos translúcidos e retrato na Home. A resposta ao ponteiro usa `requestAnimationFrame` e somente mouse. O observador da abertura pausa os loops fora da tela e quando a aba fica oculta.

`data-motion` possui os estados `full`, `paused` e `reduced`. Um script inicial aplica a escolha persistida antes da hidratação; `useSyncExternalStore` fornece uma leitura consistente aos controles. A preferência do sistema por movimento reduzido prevalece sobre a escolha local. Storage indisponível não impede o controle durante a sessão. Cabeçalho e Home compartilham o estado, inclusive entre abas quando o armazenamento está disponível.

Fora da Home, há entradas breves de imagens usando Web Animations API e IntersectionObserver, abertura de menu e feedback em links e cartões. Texto permanece visível desde o HTML inicial. Entradas são executadas uma vez por ativação da página, sem bloquear leitura. Mudança de rota ou preferência cancela animações pendentes. Loops não são adicionados aos depoimentos.

## Alternativas

- Biblioteca de animação ou WebGL: maior custo de integração sem necessidade de simulação ou cena 3D.
- Animação em cada parágrafo: aumenta distração e repetição.
- Estado local em cada controle: permitiria divergência entre cabeçalho e Home e perderia a escolha ao navegar.

## Consequências e validação

Não há nova dependência de produção. A marca fica consistente entre assets e componentes, mas sua aprovação estética permanece com o autor. O sistema inclui testes de prioridade de preferência, bootstrap e armazenamento bloqueado. Inspeção visual e medição de fluidez em aparelho real continuam pendentes, pois nenhum navegador estava conectado à ferramenta de revisão nesta sessão.

Priorizar transformações e opacidade segue a orientação de [animações de alto desempenho do web.dev](https://web.dev/articles/animations-guide). O comportamento da preferência do sistema segue a documentação de [`prefers-reduced-motion` da MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).
