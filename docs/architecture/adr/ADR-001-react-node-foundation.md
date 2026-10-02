# ADR-001 — React na interface; Node.js no desenvolvimento e build

- **Status:** Aceita
- **Data:** 2026-09-29
- **Decisão confirmada por:** Arthur Vinicius Carneiro Nunes
- **Escopo:** Primeira implementação do portfólio

## Contexto

O [POM](../../pom/README.md) define objetivos, funcionalidades e experiência, mas não determina a stack de implementação. O [POM-002](../../pom/01-product-vision/POM-002-product-goals.md) pede demonstração do ecossistema TypeScript. A primeira exploração visual foi feita em HTML, CSS e JavaScript sem que a stack tivesse sido confirmada; isso mostrou a necessidade de registrar a arquitetura antes de iniciar a aplicação.

## Decisão

1. A interface do portfólio será construída com **React**.
2. **TypeScript** será a linguagem preferencial para componentes, rotas, modelos de conteúdo e scripts do projeto, alinhada ao POM-002.
3. **Node.js** será usado inicialmente como ambiente de desenvolvimento, execução de ferramentas, processamento de conteúdo e build.
4. A primeira versão **não exige API própria nem processo Node.js permanente em produção**. Conteúdo público será entregue como arquivos estáticos, com páginas geradas no build quando necessário.
5. Uma API Node.js só será adicionada após requisito concreto que não possa ser atendido adequadamente pelo build, pelo navegador ou por serviço existente. Essa mudança exigirá uma nova decisão arquitetural.

## Motivos

- React atende à preferência técnica expressa pelo autor e permite uma interface composta por padrões reutilizáveis.
- TypeScript torna explícitos contratos de conteúdo e ajuda a demonstrar o domínio do ecossistema desejado no POM.
- O conteúdo inicial do portfólio é público e predominantemente editorial. Um servidor de aplicação em produção acrescentaria implantação e operação antes de existir uma necessidade correspondente.
- A busca pode começar com índice produzido no build; o contato pode usar e-mail e links profissionais. Esses mecanismos não exigem API própria na primeira versão.
- Geração de HTML no build preserva conteúdo acessível e indexável sem depender de renderização exclusiva no navegador.

## Consequências

- O projeto precisa de configuração Node.js para desenvolvimento, verificação e build, além de um lockfile de dependências.
- A escolha do framework de rotas, do formato de conteúdo, da hospedagem e da estratégia exata de geração de páginas será documentada antes de inicializar a aplicação. O conjunto deve manter a opção de publicação estática.
- A organização inicial será de **uma aplicação**, sem monorepositório ou pacote de API vazio.
- Componentes visuais e dados de projetos devem permanecer separados para que novos estudos de caso não exijam copiar páginas inteiras.
- O estudo visual em [`docs/design/estudo-visual-estatico/`](../../design/estudo-visual-estatico/index.html) permanece como referência de composição. Ele não é o ponto de partida do código React.

## Revisão da decisão

Reabrir esta ADR se surgirem requisitos como autenticação própria, edição de conteúdo em tempo real, processamento de formulários no servidor ou dados privados. Um requisito de busca maior, por si só, deve primeiro ser avaliado contra a capacidade de indexação no build.

## Referências

- [React — criação de aplicações e opções de renderização](https://react.dev/learn/creating-a-react-app)
- [React Router — renderização estática de rotas](https://reactrouter.com/start/framework/rendering)
