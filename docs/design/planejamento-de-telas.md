# Planejamento de design das telas

Status: direção implementada, com QA visual final pendente.
Data: 2026-10-01.
Base: documentação em `docs/pom/`.

## 1. Leitura do projeto

O repositório contém a especificação do produto, um [estudo visual exploratório em HTML/CSS/JS](estudo-visual-estatico/index.html) e uma aplicação React + TypeScript com Node.js no desenvolvimento e build. A [fundação técnica](../architecture/fundacao-tecnica.md) registra a arquitetura implementada; a [auditoria do POM](auditoria-pom.md) distingue entregas e pendências.

O portfólio apresenta a identidade profissional de Arthur Vinicius Carneiro Nunes como Full Stack Software Engineer. Deve permitir tanto avaliação rápida por recrutadores quanto exploração técnica por lideranças e desenvolvedores.

Diretrizes já estabelecidas no POM:

- Quatro pilares de conteúdo: Products, Engineering, Learning e Career (POM-015).
- Navegação: Home, Work, Engineering, Learning, About, Resume e Contact (POM-016).
- Home como entrada organizada para o conteúdo, com apresentação curta e acesso direto aos módulos (POM-018 e POM-031).
- Conteúdo técnico apresentado em profundidade progressiva (POM-017 e POM-030).
- Busca central, abrangendo títulos, tags e texto completo (POM-020).
- Prioridade ao celular, legibilidade, acessibilidade e velocidade (POM-026 a POM-036).
- Base visual neutra, uma cor de marca e tipografia como elemento principal de expressão (POM-037 a POM-046).
- Blog independente, CV automatizado, mapa global interativo e métricas automatizadas estão fora do MVP (POM-025).

As escolhas de cor, tamanhos, composição, rotas e fases abaixo são propostas. O POM ainda não fixa esses detalhes.

## 2. Direção visual proposta

Uma interface clara, com precisão de alinhamento e espaço suficiente para leitura. A identidade pessoal aparece no nome, na escrita, na seleção dos trabalhos e em uma família de cores reconhecível. O tema claro é a preferência expressa do autor e orienta as propostas abaixo.

### Referência principal de composição: Enzo Esmeraldo

A pedido do autor, o [portfólio de Enzo Esmeraldo](https://enzoesmeraldo.dev/) passa a ser a principal referência de composição. A inspeção de 2026-09-28 contemplou a abertura, o tema claro “Side B” e a área de trabalhos.

O tema claro observado combina fundo `#F4F4F1`, texto `#0A0A0A` e texto secundário `#60605C`. Usa Syne em títulos e assinatura, fonte de sistema no corpo e Space Mono na navegação. A abertura tem título grande à esquerda e perfil compacto à direita. Há fotografia de fundo, blocos pessoais, trajetória e uma vitrine de projetos com seletor, mídia ampla e explicações de problema, decisão e resultado. O seletor de discos e o player fazem parte da identidade pessoal de Enzo.

**Direção para Arthur:** uma composição editorial clara, com tipografia expressiva, apresentação assimétrica e projetos demonstrados em imagens grandes. O ameixa do portfólio anterior permanece como assinatura discreta. A referência orienta proporção, ritmo e hierarquia; os textos, fotos, interesses e evidências serão de Arthur.

| Aspecto | Adaptação proposta para Arthur |
| --- | --- |
| Título com presença visual | Uma frase curta e específica sobre sua atuação, alinhada à esquerda, com título inteiro em grafite |
| Perfil lateral | Retrato, nome, cargo e links profissionais em um grupo compacto, sem estatísticas decorativas |
| Espaço entre blocos | Aumentar o respiro entre seções e reduzir caixas ao redor de conteúdo que pode ficar solto na página |
| Projetos em evidência | Um projeto principal com imagem ampla e contexto; dois trabalhos secundários visíveis abaixo |
| Explicação do trabalho | Resumo de problema, contribuição pessoal e resultado, com acesso ao estudo de caso completo |
| Trajetória | Linha do tempo vertical em About, com experiências reais e detalhes expansíveis quando necessários |
| Personalidade | Foto, texto autoral e, quando fornecido, um pequeno bloco de interesses ou estudo atual |
| Identidade cromática | Grandes áreas claras, texto grafite, ameixa nas ações e amarelo concentrado na fotografia, caso ela seja mantida |

A abertura usa uma composição vetorial de contornos sobrepostos e planos translúcidos, com um único movimento ambiente e resposta ao ponteiro. A escolha reforça a ideia de construção por camadas e preserva título e retrato como conteúdo principal. A referência de Enzo orienta presença e profundidade; a arte é própria. Não há player de áudio nem seleção obrigatória de tema.

### Relação entre a referência e o POM

A Home continua oferecendo acesso direto a Projects, Engineering, Learning e Career. O modelo de dashboard descrito no POM é interpretado como organização e descoberta de conteúdo. A composição visual pode ter a força tipográfica da referência e continuar objetiva.

A apresentação terá um título curto, um parágrafo de duas ou três linhas e ações claras. Evitar ocupar obrigatoriamente uma tela inteira antes de apresentar projetos. A arquitetura de páginas e o aprofundamento técnico definidos neste documento permanecem válidos; a Home apresenta uma seleção desse conteúdo.

### Referência: identidade do portfólio anterior

No [portfólio anterior](https://arthurvininunes.github.io/portfolio/), inspecionado em 2026-09-28, o tema claro utiliza fundo branco `#FFFFFF`, texto próximo do preto `#111111` e ameixa `#733C55` no destaque do título e nos links sociais. O retrato acrescenta um amarelo intenso, criando contraste com os tons de ameixa da interface e da camisa.

A recomendação é preservar essa associação entre ameixa e calor visual. A proposta anterior de azul com cinza frio não aproveitava essa identidade já existente. Podemos evoluir a composição com fundos claros levemente quentes, neutros que acompanhem a cor de marca e um acento dourado muito pontual.

Os valores do branco, texto e ameixa acima foram conferidos nos estilos aplicados no navegador. As combinações a seguir são novas propostas de design; não são paletas extraídas integralmente do site antigo.

### Três combinações para o tema claro

| Direção | Combinação | Relação com sua identidade | Quando escolher |
| --- | --- | --- | --- |
| **A — Ameixa, marfim e mel · recomendada** | Ameixa `#733C55`, marfim `#FAF7F2`, branco e mel `#E7BB55` | Preserva exatamente a cor principal do tema claro anterior e reinterpreta o amarelo em um tom mais contido | Para uma evolução reconhecível, com personalidade e conforto de leitura |
| **B — Vinho, porcelana e champanhe** | Vinho `#843D4F`, porcelana rosada `#FBF7F7`, branco e champanhe `#D9B87A` | Aproxima o ameixa de um vinho mais quente, mantendo a relação com o retrato | Para uma apresentação mais editorial, com ênfase em trajetória e estudos de caso |
| **C — Petróleo, névoa e ouro suave** | Petróleo `#245C57`, névoa `#F7F8F5`, branco e ouro `#DDBA60` | Mantém a base clara e o acento quente, mas muda a cor principal | Para uma mudança maior de identidade, com uma direção visual mais fria e discreta |

Essas percepções são intenções de design a validar nas telas. As três opções são alternativas completas: escolher uma família para a interface, sem atribuir uma paleta diferente a cada seção.

### Cores por função

| Função | A — Ameixa e marfim | B — Vinho e porcelana | C — Petróleo e névoa |
| --- | --- | --- | --- |
| Fundo da página | `#FAF7F2` | `#FBF7F7` | `#F7F8F5` |
| Superfície de leitura, menus e campos | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| Texto principal | `#29232A` | `#30252A` | `#233331` |
| Texto secundário | `#655C64` | `#6B5961` | `#566660` |
| Marca, links e botão principal | `#733C55` | `#843D4F` | `#245C57` |
| Hover do botão principal | `#5B2E43` | `#692F3E` | `#194640` |
| Texto sobre o botão principal | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| Fundo suave de seleção | `#F1E5EB` | `#F5E7EB` | `#E4EFEB` |
| Texto sobre seleção | `#733C55` | `#843D4F` | `#245C57` |
| Divisor discreto, sem função de controle | `#E5DBE0` | `#E7D9DE` | `#DAE3DD` |
| Borda de campo ou controle | `#8D7885` | `#947781` | `#758B82` |
| Foco externo, separado por espaço claro | `#733C55` | `#843D4F` | `#245C57` |
| Acento quente pontual | `#E7BB55` | `#D9B87A` | `#DDBA60` |
| Fundo de destaque quente | `#F6EDD9` | `#F7EFDF` | `#F6EED9` |
| Texto sobre destaque quente | `#765512` | `#73541B` | `#725616` |

O acento quente é opcional e subordinado à cor principal, em linha com o uso limitado de cores secundárias previsto no POM-040. Ele pode identificar um projeto selecionado ou um detalhe da assinatura. Se o retrato com fundo amarelo for mantido, ele já fornece esse contraste: reduzir o dourado no restante da primeira dobra.

### Aplicação recomendada nas telas: opção A

- **Home:** fundo marfim, nome e título inteiro em `#29232A`, links e botão principal em ameixa com texto branco no botão. A fotografia pode concentrar a presença do amarelo. A dimensão e a composição do título geram o destaque visual.
- **Projetos:** imagens com suas cores originais, títulos escuros e links em ameixa. Separar os itens por espaço e divisores suaves. Reservar o fundo rosado `#F1E5EB` para seleção ou um destaque específico.
- **Engineering e Learning:** superfícies claras e tipografia escura, com ameixa em links, item atual do sumário e controles. Os neutros dominam as páginas de leitura longa.
- **About e Resume:** fundo marfim, texto escuro e marcadores de trajetória em ameixa. Usar o mesmo sistema de cores dos projetos.
- **Contact:** ação principal ameixa, campos brancos e bordas `#8D7885`. Mensagens de erro e sucesso usam cores semânticas próprias, acompanhadas de texto ou ícone.
- **Navegação:** links inativos escuros; item atual em ameixa com sublinhado ou marcador. O estado selecionado também precisa ser identificável sem depender apenas da cor.

A personalidade virá da repetição coerente do ameixa e dos neutros quentes. Manter grandes áreas claras e concentrar a cor nos pontos de decisão. Não é necessário preencher todos os cards, títulos e bordas com a cor de marca.

### Contraste e estados

Contrastes calculados por luminância relativa sRGB para cores sólidas, sem transparência. Valores exibidos com duas casas decimais:

| Par verificado | A | B | C |
| --- | --- | --- | --- |
| Texto principal / fundo da página | 14,36:1 | 13,87:1 | 12,40:1 |
| Texto secundário / fundo da página | 6,01:1 | 6,12:1 | 5,69:1 |
| Link de marca / fundo da página | 7,84:1 | 7,15:1 | 7,18:1 |
| Texto branco / botão principal | 8,38:1 | 7,60:1 | 7,65:1 |
| Texto de marca / fundo suave de seleção | 6,84:1 | 6,34:1 | 6,50:1 |
| Borda de controle / superfície branca | 4,07:1 | 4,03:1 | 3,64:1 |
| Texto de destaque / fundo de destaque quente | 5,86:1 | 6,10:1 | 5,94:1 |

Os pares de texto listados superam o mínimo de 4,5:1 para texto comum descrito na [WCAG 2.2, contraste de texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). As bordas de controle listadas superam 3:1 contra branco e também contra os respectivos fundos de página, atendendo ao limiar de [contraste não textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) para esse uso.

Esses cálculos validam somente os pares indicados; a acessibilidade da interface completa depende da aplicação e dos estados reais.

- Divisores suaves organizam o conteúdo, mas não devem ser a única indicação dos limites de um campo ou botão.
- Mel, champanhe e ouro suave são cores de preenchimento ou acento; não usar como texto pequeno sobre branco. Usar o texto escuro da paleta sobre esses preenchimentos.
- Links dentro de parágrafos recebem sublinhado. O foco usa contorno de marca com espaço claro ao redor, inclusive em botões preenchidos.
- Hover escurece o botão sem reduzir a opacidade do texto. Validar também pressionado, desabilitado, erro e sucesso ao desenhar os componentes.
- Cores semânticas de erro, sucesso e aviso são independentes da marca. O acento mel, por exemplo, não comunica automaticamente um aviso.

### Demais fundamentos visuais

| Elemento | Proposta inicial | Aplicação |
| --- | --- | --- |
| Tema | Claro como direção principal | Preferência confirmada; tema escuro pode ser avaliado depois |
| Tipografia de títulos | Syne, pesos 500–600, como candidata principal | Aproximação deliberada da referência escolhida; validar acentos, quebras e legibilidade com os textos de Arthur |
| Tipografia de corpo | Sans-serif de sistema, peso 400; 500–600 para ênfase | Leitura neutra e consistente em descrições e estudos de caso |
| Código | Monoespaçada | Trechos de código e identificadores técnicos |
| Escala da abertura | Título 40–48 px no celular e 64–88 px no desktop; entrelinha 1,05–1,15 | Ajustar ao conteúdo, sem cortar palavras ou impor altura de viewport; metadados e navegação a partir de 14 px |
| Escala de leitura | Corpo 16–18 px, entrelinha 1,5–1,7; títulos internos 28–40 px | Reservar os tamanhos expressivos à abertura e às entradas principais |
| Espaçamento | Escala 4, 8, 12, 16, 24, 32, 48, 64 px | Ritmo consistente entre componentes e seções |
| Largura | Conteúdo até 1200 px; leitura até cerca de 70 caracteres por linha | Equilibrar exploração e leitura longa |
| Bordas | Controles com raios de 6–8 px; mídia com 12–16 px; texto em blocos abertos | Diferenciar funções e evitar uma grade de cards idênticos; sombras reservadas a sobreposições |
| Movimento | Composição vetorial animada na abertura, com pausa; feedback breve nos controles e indicador de leitura | Exceção do POM-044 autorizada em 01/10/2026, detalhada na ADR-006; respeitar movimento reduzido |

A opção A é a recomendação para os próximos wireframes visuais, aplicada à composição inspirada em Enzo. As opções B e C permanecem como alternativas de cor. A prioridade agora é validar a combinação de tipografia, proporções e conteúdo com a opção A, antes de ampliar a exploração de paletas.

Usar imagens reais dos projetos quando disponíveis. Diagramas devem explicar sistemas concretos. Evitar gráficos de proficiência, números sem evidência e elementos decorativos que disputem atenção com os trabalhos.

### Movimento e áudio

A abertura deve ter profundidade semelhante à sensação de transparência da referência de Enzo, com arte própria e identidade de Arthur. Por solicitação explícita de 01/10/2026, a produção agora inclui contornos SVG animados e planos translúcidos. Um botão permite pausar; movimento reduzido, aba oculta e saída da tela interrompem o efeito. Texto, retrato e ações permanecem estáveis e legíveis. A ADR-006 e o POM-044 registram essa revisão.

Imagens de projetos recebem um pequeno deslocamento no hover e no foco por teclado. No estudo de caso e na leitura técnica, uma linha fina mostra o progresso de leitura conforme a rolagem. Essas respostas devem ser verificadas em aparelhos modestos e não podem bloquear navegação ou atrasar o acesso ao conteúdo. Com `prefers-reduced-motion: reduce`, remover as transições decorativas; a informação continua completa.

Áudio não é necessário para a primeira versão: não há uma ação no portfólio que precise de som para ser compreendida. Se surgir uma proposta concreta de experiência sonora, ela deve começar muda, exigir ativação explícita, oferecer controle persistente para silenciar e nunca substituir feedback visual ou textual.

## 3. Estrutura compartilhada

### Navegação global

No desktop, cabeçalho horizontal leve, com assinatura pessoal à esquerda e navegação à direita, seguindo o alinhamento do conteúdo. Links principais e busca ficam visíveis; Resume e Contact continuam acessíveis como ações utilitárias. Usar rótulos legíveis, a partir de 14 px, sem reproduzir o tamanho reduzido da navegação da referência. Ajustar a composição quando os rótulos não couberem, sem reduzir excessivamente a tipografia.

No celular, cabeçalho com assinatura, botão de busca e menu com rótulos textuais. O menu contém todos os destinos. Não depender de ícones sem identificação ou de gestos para navegar.

Começar sem barra lateral global. Reservar navegação lateral para documentação extensa, onde ela ajuda a localizar seções e páginas relacionadas.

O rodapé repete contato e links profissionais. Em páginas internas, breadcrumbs e títulos deixam explícito o contexto. Links e botões têm estados padrão, hover, foco, ativo e indisponível quando aplicável.

### Padrões reutilizáveis

- Cabeçalho de página: contexto, título, descrição curta e uma ação principal quando necessária.
- Resumo de projeto: título, problema resolvido, contribuição pessoal, tecnologias essenciais e acesso ao estudo de caso.
- Item técnico: título, tipo, projeto associado e resumo da decisão ou aprendizado.
- Metadados: data, categoria e status apenas quando informativos.
- Leitura: sumário, texto, imagens com legenda, código, referências e próximo conteúdo.
- Busca e filtros: rótulos explícitos, resultado da operação e ação para limpar.
- Estados: carregamento quando houver espera real, vazio, nenhum resultado, erro e página não encontrada.

## 4. Inventário de telas

| Tela / rota proposta | Pergunta do visitante | Hierarquia e conteúdo | Próximo passo |
| --- | --- | --- | --- |
| Home `/` | Quem é você e por onde começo? | Nome e cargo; apresentação curta; currículo e contato; projetos selecionados; acessos a Engineering, Learning e Career | Abrir um projeto |
| Work `/work` | O que você já construiu? | Título e contexto; projetos; filtros por competência conforme o acervo justificar | Ler estudo de caso |
| Projeto `/work/:slug` | Qual problema você resolveu e como contribuiu? | Resumo; imagem real; contexto e papel; solução; resultados verificáveis; acesso à engenharia | Explorar arquitetura ou repositório |
| Engineering `/engineering` | Como você toma decisões técnicas? | Introdução curta; documentos agrupados por projeto; tipos como arquitetura, decisões e qualidade | Abrir documento técnico |
| Documento `/work/:slug/engineering/:doc` | Qual foi o raciocínio e quais são as evidências? | Contexto do projeto; sumário; explicação ou decisão; diagramas/código; alternativas; referências | Voltar ao projeto ou ler documento relacionado |
| Learning `/learning` | Como você estuda e desenvolve raciocínio? | Categorias; problemas resolvidos e notas técnicas contextualizadas | Abrir estudo |
| Estudo `/learning/:slug` | Como a solução foi construída? | Problema; abordagem; solução; análise; exemplos e referências | Explorar tema relacionado |
| About `/about` | Qual é sua trajetória? | Apresentação pessoal; experiências; contribuições; marcos e certificações relevantes | Ver currículo ou contato |
| Resume `/resume` | Posso avaliar e guardar seu perfil rapidamente? | Resumo profissional; experiências; competências com evidências; formação; download do PDF mantido manualmente | Baixar currículo |
| Contact `/contact` | Como iniciar uma conversa? | Mensagem objetiva; e-mail e links profissionais reais | Abrir e-mail ou canal escolhido |
| Busca `/search?q=...` | Onde está o conteúdo que procuro? | Consulta; quantidade de resultados; filtros por tipo; título, trecho e contexto de cada resultado | Abrir o conteúdo no contexto original |
| Não encontrada | Como retomar a navegação? | Explicação curta; retorno à Home; busca e Work | Encontrar outro conteúdo |

Manter Career representada principalmente em About e Resume, conforme o menu já definido. Engineering funciona como índice transversal; cada documento tem um endereço canônico vinculado ao projeto, evitando versões duplicadas.

Os rótulos em inglês refletem o POM. Confirmar o idioma público antes de escrever a versão final; se for português, aplicar Início, Projetos, Engenharia, Aprendizado, Sobre, Currículo e Contato de forma consistente.

## 5. Composição das telas prioritárias

### Home

Ordem inicial no celular:

1. Cabeçalho com navegação e busca.
2. Nome e cargo, seguidos de um título expressivo e uma descrição curta sobre atuação, escritos a partir da experiência real.
3. Ações “Ver projetos” e “Currículo”, com contato também fácil de localizar.
4. Perfil compacto com retrato e links profissionais, seguido do primeiro projeto selecionado, evidenciando o problema e a contribuição.
5. Demais projetos selecionados, limitados inicialmente a dois ou três no total.
6. Acessos diretos a Engineering, Learning e trajetória.
7. Rodapé com contato e links profissionais.

No desktop, a abertura usa uma grade de 12 colunas: apresentação em aproximadamente 8 e perfil nas 4 restantes. Título e parágrafo ficam alinhados à esquerda; o perfil se alinha ao conjunto de texto, sem parecer um painel administrativo. Em larguras intermediárias, empilhar antes de apertar o título ou o retrato.

O primeiro projeto ocupa a largura principal, com imagem grande e resumo. Os dois seguintes podem formar duas colunas. Engineering, Learning e Career aparecem como acessos compactos com títulos e descrições de uma linha. A Home permanece curta o suficiente para trazer trabalhos para perto do início da página.

Esquema de composição, sem representar medidas finais:

```text
DESKTOP
Arthur Nunes                      Navegação / busca / currículo

Nome e atuação
Título expressivo,                 Retrato
alinhado à esquerda.               Perfil e links profissionais
Descrição curta.
[Ver projetos] [Currículo]

Projeto selecionado
Imagem ampla do produto
Problema / contribuição / resultado              [Ver estudo]

Projeto secundário                 Projeto secundário
Imagem + resumo                    Imagem + resumo

Engineering               Learning                  Career
Contato / rodapé

CELULAR
Arthur Nunes                   Busca / menu
Nome e atuação
Título
Descrição curta
[Ver projetos] [Currículo]
Perfil compacto / links
Projeto principal: imagem + resumo + estudo
Demais projetos em sequência
Engineering / Learning / Career
Contato / rodapé
```

Uma frase como “Desenvolvo produtos web, da interface à arquitetura.” pode servir apenas como rascunho para testar as quebras. Substituir pela formulação que melhor represente o trabalho de Arthur antes da publicação. Disponibilidade profissional, cargo atual e marcos de carreira só aparecem quando confirmados.

### Work e estudo de caso

A listagem prioriza qualidade dos resumos. Com poucos projetos, mostrar todos; evitar filtros que não reduzam esforço real. Frontend, Backend e DevOps funcionam como filtros secundários, preservando a organização principal por produto.

Na Home, adotar a escala visual da vitrine da referência: screenshot amplo, título, contexto e ação para o estudo. Na página Work, manter todos os trabalhos descobríveis. Um seletor de projeto pode ser avaliado depois para a vitrine, mas não deve ser o único modo de encontrar o acervo.

Para mídia, começar com screenshot estático real. Galeria abre por ação do visitante, com controles e legendas; vídeo, quando existir, começa pausado. Nunca recortar a parte essencial da interface apenas para preencher uma proporção visual.

No estudo de caso, separar visualmente três camadas:

1. **Visão rápida:** o que é, para quem, qual foi o papel de Arthur, estado do projeto e links disponíveis.
2. **Contexto e entrega:** problema, restrições, solução, imagens e resultados. Identificar claramente projetos pessoais e contribuições em equipe.
3. **Engenharia:** atalhos explícitos para arquitetura, decisões, trade-offs, testes, performance, CI/CD e evolução, conforme existirem.

O resumo permanece sempre visível na entrada. O leitor escolhe abrir o aprofundamento. Não criar abas ou links vazios para completar a estrutura. Resultados qualitativos são válidos quando ainda não houver métricas verificadas.

### About e trajetória

No desktop, combinar retrato e introdução em proporções diferentes, seguidos de trajetória vertical e um bloco menor de estudo atual. No celular, preservar a sequência apresentação → trajetória → aprendizado. Interesses pessoais só entram quando Arthur fornecer esse conteúdo e houver relação com a apresentação que deseja construir.

Experiências usam cargo, organização, período e uma contribuição concreta. Detalhes adicionais podem expandir no próprio item. O objetivo é permitir reconhecimento rápido da trajetória e acesso opcional à explicação completa.

### Leitura técnica

No desktop, sumário lateral e coluna principal de leitura. No celular, sumário expansível antes do texto. Diagramas incluem explicação textual; código e tabelas extensas podem ter rolagem local sem causar rolagem horizontal na página inteira.

O topo identifica o projeto de origem e o assunto. Uma decisão técnica apresenta contexto, alternativas, escolha e consequências. O final oferece retorno ao projeto e conteúdo relacionado.

### Busca

Oferecer entrada visível em todas as páginas. Uma página de resultados é a base; uma sobreposição e atalho de teclado podem ser adicionados depois como conveniência.

Desenhar os estados: consulta inicial, buscando, resultados, nenhum resultado e falha. Em ausência de resultados, manter a consulta, permitir remover filtros e oferecer navegação por área. Resultados de documentos incluem o projeto de origem.

### Contato e currículo

Contato direto por e-mail e links profissionais resolve a primeira versão sem exigir formulário. Se houver função de copiar e-mail, mostrar confirmação e permitir selecionar o endereço quando a cópia falhar.

Currículos funciona como índice de três versões mantidas manualmente: DevOps, Desenvolvimento Full Stack e Engenharia de Software. Cada entrada tem foco, descrição, temas e destino de PDF. **Exceção solicitada pelo autor em 01/10/2026:** manter os três links quebrados por ora, identificando na interface que o arquivo ainda não foi adicionado. Isso substitui a orientação anterior de ocultar links sem arquivo; a ADR-007 registra a exceção.

## 6. Responsividade e acessibilidade

- Desenhar primeiro em 390 px e verificar reflow também em 320 px; revisar depois em 768 e 1440 px.
- Começar com uma coluna. Expandir para duas colunas apenas quando houver espaço confortável para títulos e resumos.
- Usar margens móveis de aproximadamente 16–24 px e espaçamento proporcional em telas maiores.
- Preservar a ordem semântica de leitura entre os tamanhos de tela.
- Garantir alvos de toque confortáveis, foco visível, rótulos e acesso por teclado.
- Menus e sobreposições devem fechar por ação explícita e Escape, com retorno de foco ao acionador.
- Informações essenciais ficam disponíveis sem hover; estados não dependem apenas de cor.
- Verificar ampliação de texto, contraste, títulos longos, navegação por teclado e preferência por movimento reduzido.
- Carregar conteúdo de leitura sem animações que atrasem seu acesso.

## 7. Ordem de trabalho e estado atual

O [inventário e registro de execução](inventario-e-proximos-passos.md) mostra as fontes e validações editoriais restantes. A estratégia de renderização foi registrada na ADR-002 e a primeira versão das telas já existe. A sequência abaixo permanece como referência de design, com as validações finais ainda abertas.

1. **Inventário de conteúdo:** selecionar um projeto real, reunir problema, papel, imagens, evidências e documentação; reunir currículo e contatos.
2. **Wireframes móveis:** Home, Work, estudo de caso e leitura técnica. Validar o percurso Home → projeto → evidência → contato.
3. **Direção visual:** aplicar a opção A, a tipografia expressiva e a composição assimétrica à Home e ao estudo de caso. Comparar com a referência de Enzo em hierarquia, espaço e escala das imagens, mantendo conteúdo e identidade de Arthur.
4. **Componentes e desktop:** extrair padrões das telas aprovadas e adaptar a composição para larguras maiores.
5. **Demais telas:** Engineering, Learning, estudo, About, Resume, Contact e busca, reutilizando os padrões.
6. **Estados e revisão:** revisar vazio, erro, ausência de imagem, títulos longos, links indisponíveis e comportamento do menu.

As fases representam ordem de design, sem retirar funcionalidades do escopo definido pelo POM. A busca faz parte do planejamento desde o início.

## 8. Critérios para avaliar os wireframes

- Na Home, alguém identifica nome, atuação, projetos, currículo e contato sem explicação externa.
- Um recrutador consegue navegar de um projeto até currículo ou contato sem perder orientação.
- Uma liderança técnica encontra papel individual, decisão técnica e evidência a partir do estudo de caso.
- A Home apresenta acessos claros aos quatro pilares do conteúdo.
- O visitante distingue apresentação geral e aprofundamento técnico antes de abrir cada link.
- O mesmo conteúdo funciona no celular, em desktop e por teclado.
- Nenhum dado ilustrativo é publicado como experiência, métrica ou resultado real.
- A semelhança com a referência é perceptível na hierarquia tipográfica, na abertura assimétrica e na escala dos projetos.
- Ameixa, retrato e escrita de Arthur mantêm a identidade própria da composição.
- O título grande não impede localizar projetos, currículo ou acesso às áreas técnicas, inclusive com texto ampliado.

## 9. Decisões ainda abertas

- Português e inglês implementados, com botão PT/EN e URLs próprias. Revisão editorial das traduções continua possível.
- Paleta A no tema claro e paleta escura em noite/rosa, com botão persistido. Os tokens de texto passaram na medição de contraste; inspeção visual em dispositivos reais permanece pendente.
- Nome de apresentação e uso de retrato.
- Projetos e estudos disponíveis para o lançamento.
- Revisão final da biografia fornecida em `ARTHUR_CONTEXT.md` e entrega dos PDFs de currículo. Canais profissionais já estão configurados.

## 10. Plano executado em 01/10/2026

- **Home:** destaque concentrado em um desenho de contornos e planos; manter título à esquerda, retrato lateral e leitura estável. Smash or Pass abre a vitrine, seguido por Home Expense Control e Kanban; Plateia continua disponível em Work.
- **Sobre:** saudação e apresentação, retrato, narrativa apoiada nos projetos e três perspectivas de trabalho ligadas a evidências. Trajetória sem datas ou cargos inventados aparece ao final, com encaminhamento para currículos.
- **Currículos:** três documentos com a mesma hierarquia, sem sugerir que o nome do foco comprova experiência profissional. Links provisórios visíveis por escolha expressa do autor.
- **Contato:** título amplo, área principal semelhante a uma carta, endereço selecionável, envio por e-mail e cópia com retorno acessível. LinkedIn, GitHub e currículos são caminhos secundários.
- **Tema:** marfim #FAF7F2, grafite #29232A e ameixa #733C55 no claro; noite #19151C, texto #F5EDF2 e rosa #E9A9C8 no escuro. O amarelo do retrato mantém a assinatura pessoal. Syne concentra expressão nos títulos; fonte de sistema mantém leitura longa.
- **Idioma:** toda página, metadado, estado e descrição de projeto possui versão PT/EN. O botão mantém o destino e a consulta; screenshots dos produtos conservam seu conteúdo original.

Revisão do plano: a personalidade fica concentrada na abertura e no retrato. Sobre evita uma sequência de estatísticas ou experiências sem fonte; Contato organiza uma ação principal em vez de repetir cartões equivalentes. A inspeção visual final ainda depende de navegador disponível.

## 11. Evolução: marca, movimento e confiança

O pedido de uma identidade mais própria e de movimento mais perceptível foi aplicado à composição React. O [plano de identidade e movimento](identidade-e-movimento.md) define o símbolo AN contínuo, o uso no favicon/cabeçalho/abertura, as cores e os limites dos efeitos.

- A Home tem maior amplitude e contraste no fundo, marca ampliada, planos translúcidos, movimento do retrato e resposta ao ponteiro. Um controle global persistido aparece também no cabeçalho.
- Imagens dos projetos entram brevemente ao aparecer na tela, e links, controles e menu têm feedback. Movimento reduzido desativa os efeitos. O texto não precisa esperar animações para ser lido.
- Evidências de produto, decisões e colaboração dão caminhos concretos para avaliar o trabalho. Comentários de Rhyan e Marcos aparecem em Home e Sobre, com excerto, autoria, contexto, data e texto completo expansível. Fotos serão adicionadas depois; inglês identifica tradução e conserva o original.
- Sobre usa as memórias enviadas pelo autor: Fortaleza, Ciência da Computação na UFC, PC4, TEVOS, PID, Tatame Cidadão, ensino e pesquisa em andamento. A [proveniência](../content/fontes-do-perfil.md) explicita limites e divergências documentais.
- Os [próximos aprimoramentos](recomendacoes-de-produto.md) priorizam contribuição individual nos casos, PDFs reais e QA em aparelhos.

## Referências principais

Revisão posterior no Chrome conectado: [resultados, correções responsivas e capturas](revisao-visual/README.md). O destaque de Smash or Pass passou a oferecer demonstração direta; Sobre ganhou atalhos de leitura. O reflow em 320 px foi corrigido sem esconder o transbordamento com `overflow: hidden`.

- [Enzo Esmeraldo — referência principal de composição, tipografia e apresentação de projetos](https://enzoesmeraldo.dev/)
- [Portfólio anterior — referência de identidade e tema claro](https://arthurvininunes.github.io/portfolio/)
- [Personas](../pom/03-personas/POM-007-personas.md)
- [Modelo de navegação](../pom/05-information-architecture/POM-016-navigation-model.md)
- [Profundidade de conteúdo](../pom/05-information-architecture/POM-017-content-depth-model.md)
- [Busca](../pom/06-feature-especifications/POM-020-search-system.md)
- [Padrão de documentação de projetos](../pom/06-feature-especifications/POM-021-project-documentation-standard.md)
- [Estratégia de conteúdo](../pom/06-feature-especifications/POM-024-content-strategy.md)
- [Escopo do MVP](../pom/06-feature-especifications/POM-025-feature-scope-and-principles.md)
- [Modelo de dashboard](../pom/07-ux-guidelines/POM-031-dashboard-model.md)
- [Fundamentos visuais](../pom/08-visual-design-system/POM-038-design-language-foundation.md)
