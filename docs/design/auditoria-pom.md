# Auditoria de conformidade com o POM

Data: 2026-10-01. Escopo: aplicação React em `frontend/src/`, documentação e estudo visual em `docs/design/estudo-visual-estatico/`. **Atendido** significa que há implementação observável; **parcial** significa que a estrutura existe, mas conteúdo, validação ou resultado ainda faltam; **pendente** significa que a capacidade descrita ainda não existe. Os requisitos de visão são avaliados por sua expressão no produto, não por uma suposta conclusão definitiva.

| POM | Estado | Evidência e lacuna |
| --- | --- | --- |
| 000 — Controle documental | Parcial | POM e ADRs versionados; esta auditoria precisa acompanhar próximas mudanças. |
| 001 — Visão do produto | Parcial | Home, projetos e engenharia materializam a identidade profissional; falta profundidade autoral em carreira e aprendizado. |
| 002 — Objetivos | Parcial | Projetos, contato e rotas públicas existem; resultados de comunicação e oportunidade só podem ser avaliados após uso real. |
| 003 — Métricas | Pendente | Lint, tipos e build são verificáveis, mas métricas de negócio e Lighthouse ainda não foram medidos em uma publicação. |
| 004 — Posicionamento | Parcial | Abertura e estudos privilegiam engenharia; evidência de trajetória permanece incompleta. |
| 005 — Diferenciais | Parcial | Casos e documento de arquitetura mostram decisões; ainda faltam mais decisões e resultados de projetos verificados. |
| 006 — Princípios do produto | Parcial | Conteúdo verificável e estados honestos implementados; avaliação com usuários ainda não feita. |
| 007 — Personas | Parcial | Percursos para recrutador e avaliador técnico têm destinos; validação desses percursos está pendente. |
| 008 — Princípios orientados por personas | Parcial | Navegação, busca e aprofundamento existem; faltam testes de uso. |
| 009 — Visão de experiência | Parcial | Direção clara e leve aplicada; percepção real precisa de avaliação. |
| 010 — Objetivos de experiência | Parcial | Casos e ADR favorecem rastreabilidade; conteúdo profissional está incompleto. |
| 011 — Atributos de experiência | Parcial | Fonte e incertezas são exibidas; confiança, clareza e demais atributos carecem de validação externa. |
| 012 — Filosofia de navegação | Atendido | Menu por destino, links contextuais, breadcrumbs e retorno aos índices. |
| 013 — Filosofia de conteúdo | Parcial | Conteúdo separado dos componentes e sem resultados inventados; lacunas editoriais abertas. |
| 014 — Visão de longo prazo | Parcial | Arquitetura admite novos conteúdos; evolução futura não é entrega do MVP. |
| 015 — Modelo estrutural | Parcial | Áreas principais têm rotas; Sobre contém trajetória e comentários, mas Learning ainda não tem acervo. |
| 016 — Modelo de navegação | Atendido | Home, Work, Engineering, Learning, About, Resume, Contact e Search possuem rotas. |
| 017 — Profundidade do conteúdo | Parcial | Índice, casos e documento técnico existem; parte dos casos não alcança profundidade técnica desejada. |
| 018 — Princípios de navegação | Atendido | Home orienta entrada, páginas internas têm caminho e próximos passos. |
| 019 — Visão de funcionalidades | Parcial | Base de busca e documentação estruturada existe; maturidade do conteúdo varia. |
| 020 — Busca | Parcial | Índice local por título, tags e texto, com tipos e teste automatizado; não há estudos de aprendizado para indexar. Busca dinâmica requer JavaScript. |
| 021 — Documentação de projetos | Parcial | Casos seguem visão geral, problema, solução, engenharia quando verificada, resultado e fonte; performance, CI/CD e trade-offs específicos ainda exigem evidência. |
| 022 — Learning Hub | Pendente | Rota e estado vazio honestos; o autor informou que ainda não há estudos para publicar. |
| 023 — Carreira e timeline | Parcial | Sobre inclui formação e trajetória PC4, TEVOS, PID e Tatame Cidadão com base nas memórias fornecidas pelo autor. PDFs de currículo continuam provisórios. |
| 024 — Estratégia de conteúdo | Parcial | Dados tipados, separação editorial, biografia e depoimentos com proveniência; faltam estudos e revisão técnica do Plateia. |
| 025 — Escopo e princípios | Atendido | MVP evita blog, painel administrativo e recursos sem necessidade concreta; links têm destinos úteis. |
| 026 — Filosofia UX | Parcial | Conteúdo e tarefas guiam telas; validação com usuários pendente. |
| 027 — Restrição mobile first | Parcial | CSS responsivo implementado; inspeção visual em larguras e aparelhos reais pendente. |
| 028 — Minimalismo visual | Atendido | Paleta contida, espaço, tipografia e poucos elementos por seção. |
| 029 — Hierarquia de informação | Atendido | Abertura, índices, casos e documentos usam títulos e níveis claros. |
| 030 — Divulgação progressiva | Atendido | Home resume e encaminha aos índices; estes encaminham aos detalhes. |
| 031 — Modelo de dashboard | Parcial | Home funciona como visão geral; avaliação de densidade e priorização pendente. |
| 032 — Consistência | Atendido | Shell, cartões, títulos, estados e tokens compartilhados. |
| 033 — Responsividade | Parcial | Breakpoints e menu móvel implementados; QA visual e de toque pendente. |
| 034 — Conteúdo primeiro | Parcial | HTML pré-renderizado para rotas conhecidas e conteúdo legível; áreas sem material autoral permanecem vazias. |
| 035 — Interações | Parcial | Hover, foco, menu e busca têm feedback; teste manual por teclado e toque pendente. |
| 036 — Performance como UX | Parcial | Build estático e imagens WebP; métricas de carregamento em produção pendentes. |
| 037 — Filosofia visual | Parcial | Direção clara e editorial aplicada; revisão visual final pendente. |
| 038 — Linguagem de design | Parcial | Tokens e componentes próprios implementados; avaliação de consistência visual pendente. |
| 039 — Marca pessoal | Parcial | Símbolo AN contínuo, favicon e variantes vetoriais, retrato e biografia implementados. Aprovação estética final e fotos dos depoimentos pendentes. |
| 040 — Cores | Parcial | Temas claro/escuro com preferência persistida; tokens de texto passam no teste AA. Composição sobre todas as superfícies ainda exige inspeção visual. |
| 041 — Tipografia | Parcial | Hierarquia e escala implementadas; inspeção de leitura em aparelhos pendente. |
| 042 — Layout | Parcial | Grid, largura de leitura e ritmo responsivo implementados; QA visual pendente. |
| 043 — Componentes | Atendido | Shell, navegação, cartões, introduções e estados compartilhados. |
| 044 — Movimento | Parcial | Marca, planos e retrato animados na Home; entradas de mídia e feedback nas demais páginas. Controle global persistido, movimento reduzido e pausa dos loops fora da tela implementados. Verificação em navegador e performance pendentes. |
| 045 — Acessibilidade | Parcial | Semântica, skip link, foco, menu por teclado e movimento reduzido; auditoria automática e manual ainda pendentes. |
| 046 — Percepção da marca | Parcial | Projeto visual e narrativa técnica implementados; percepção depende de pessoas reais. |

## Bloqueios editoriais e de validação

1. **Aprendizado e currículos:** Learning permanece sem estudos publicáveis e os PDFs ainda não foram fornecidos. A trajetória em Sobre passou a usar as memórias enviadas em 01/10/2026, com fontes registradas em `docs/content/fontes-do-perfil.md`.
2. **Plateia:** há uma captura do portfólio anterior, mas o escopo técnico, os links e os resultados não foram confirmados. O caso e o estudo visual indicam a incerteza.
3. **Imagens e apresentação:** revisar a nova marca, adicionar as fotos dos autores das recomendações e produzir capturas atuais dos projetos. Formação e experiências usam o contexto enviado pelo autor.
4. **QA antes de publicar:** testar teclado, leitor de tela, contraste, 320/390/768/1440 px e fluxos de busca/contato; medir Lighthouse em hospedagem real e registrar os resultados frente às metas do POM-003.

O build estático e os testes automatizados cobrem estrutura e conteúdo mínimo das páginas. Eles não substituem a avaliação visual, a auditoria de acessibilidade nem dados reais de uso.

### Atualização após conexão do Chrome

Foi realizada uma [revisão visual amostral](revisao-visual/README.md) em 320, 390, 768 e 1440 px, cobrindo Home, Sobre, Contato e busca, temas, troca de idioma, menu por Escape, expansão de depoimento, cópia de e-mail e pausa dos loops fora da abertura. Corrigidos dois casos de transbordamento em telas pequenas. Isso reduz as lacunas dos POM-027, 033, 035, 039 e 044; os estados permanecem parciais porque não houve auditoria integral com leitor de tela, aparelhos físicos e métricas de produção. As observações anteriores de navegador indisponível descrevem a rodada anterior.

## Evolução de 01/10/2026

Implementados PT/EN com páginas pré-renderizadas, seletor de tema claro/escuro, Home com composição animada controlável, smash-or-pass como destaque e reformulação de Sobre, Currículos e Contato. As onze ADRs estão indexadas em `docs/architecture/adr/README.md`.

O histórico profissional foi enriquecido com `ARTHUR_CONTEXT.md`; comentários usam os dois textos integrais fornecidos pelo autor, com versões inglesas identificadas como traduções. A descrição do caso smash-or-pass mantém as fontes do repositório; a liderança técnica declarada nas memórias aparece na biografia sem atribuir toda a implementação a Arthur. Os estudos permanecem pendentes. Por pedido explícito, os três PDFs de currículo possuem **links provisórios quebrados**; isso é uma exceção temporária documentada na ADR-007, não uma falha silenciosa do verificador. A interface informa a ausência dos arquivos.

Os testes cobrem paridade de idiomas, URLs, busca, catálogo, script de tema e contraste dos tokens. O navegador de revisão não estava disponível nesta sessão; inspeção visual, fluxos reais por teclado e Lighthouse não foram declarados concluídos.
