# Pendências editoriais do portfólio

Atualizado em 27/10/2026. Este checklist separa o que já foi resolvido com fontes públicas do que depende de informação, material ou validação de Arthur. Textos publicáveis devem permanecer em português e inglês.

## Resolvido nesta revisão

- [x] **Plataforma de Exames de Judô:** promovida a produto principal da vitrine. O estudo de caso agora cobre as jornadas atuais, explicita o monólito modular no edge e oferece acesso direto a ADRs selecionadas, diagramas e runbook, sem inventar métricas de adoção.
- [x] **Plateia:** repositório, README, ADRs, testes e endereço da demonstração encontrados. O estudo de caso agora descreve o MVP, o pagamento simulado, as reservas temporárias e a validação dos ingressos; não atribui métricas de uso. A captura continua identificada como histórica.
- [x] **Kanban Realtime:** código atual conferido. O frontend já recebe eventos Socket.IO, sincroniza o board ao conectar e mostra participantes; a movimentação de cards valida acesso e ordem em uma transação. O texto antigo que tratava toda a colaboração em tempo real como plano foi corrigido.
- [x] **Home Expense Control:** o caso explica por que o projeto persiste dinheiro em centavos, a consequência para filtros e totais e a conversão necessária na API.
- [x] **Posicionamento inicial:** os textos PT/EN já apresentam o cargo atual de DevOps na IGEOS junto à experiência em desenvolvimento Full Stack. É uma formulação provisória coerente, aberta à sua revisão de tom.
- [x] **IGEOS:** cargo e início em outubro de 2026 constam do perfil; o texto permanece genérico porque a atuação começou agora.

## O que Arthur precisa fornecer ou confirmar

### Prioridade alta

- [ ] **Currículos:** enviar os PDFs finais de DevOps, Full Stack e Engenharia de Software. Conferir datas, contatos, experiências e competências de cada versão. Os três links em `frontend/src/content/resumes.ts` seguem quebrados por escolha explícita do autor; depois, colocar os arquivos em `frontend/public/resumes/` e mudar o status para `available`.
- [ ] **Smash or Pass:** listar suas contribuições individuais em 2–4 pontos concretos: o que você liderou, implementou e decidiu, com arquivos, PRs ou registros que sustentem cada ponto. Se houver resultado verificável, indicar a fonte; se não, manter o estado de produto em desenvolvimento. A autoria em equipe permanece explícita.
- [ ] **Trajetória:** confirmar se a monitoria PID e o Tatame Cidadão continuam ativos, as datas de PC4 e TEVOS e a previsão de conclusão da Ciência da Computação na UFC. Informar qualquer mudança desde o CV de 25/09/2026.

### Prioridade média

- [ ] **IGEOS:** quando houver experiência divulgável, enviar 2–3 responsabilidades reais, ferramentas efetivamente usadas e uma entrega que possa ser descrita sem dados internos. Até lá, a descrição genérica é a mais fiel.
- [ ] **Capturas:** fornecer ou aprovar imagens atuais de Plateia, Home Expense Control e Kanban Realtime. As três imagens do site vieram do portfólio anterior e ainda não foram comparadas visualmente com as versões públicas atuais.
- [x] **Retratos:** a foto frontal fornecida pelo autor foi aplicada à Home; a levemente lateralizada aparece em Sobre. Ambas foram conferidas nas composições clara e escura e em tela móvel.
- [ ] **Posicionamento e contato:** aprovar a frase de apresentação e indicar o canal preferido para receber propostas. Confirmar se e-mail, GitHub e LinkedIn ainda são os destinos desejados.
- [ ] **Recomendações:** se desejar links diretos para os depoimentos, fornecer as URLs específicas e confirmar a autorização de uso dos retratos. Os links atuais levam aos perfis de Rhyan e Marcos; o texto foi fornecido por Arthur.

### Para evolução de conteúdo

- [ ] **Learning:** enviar um estudo próprio reproduzível, com problema, abordagem, código, testes, limites e referências. A página permanece em estado vazio até existir material publicável; o tema de pesquisa não é tratado como artigo concluído.
- [ ] **Revisão final:** ler a versão PT e EN das páginas, conferir nomes, cargos, links, textos alternativos e afirmações pessoais. Informar resultados mensuráveis somente com fonte ou método de medição.

As decisões técnicas dos casos descrevem o projeto como um todo. Para apresentar uma decisão como contribuição pessoal de Arthur, ainda é preciso confirmar a autoria individual. A [proveniência dos projetos](fontes-dos-projetos.md) e a [proveniência do perfil](fontes-do-perfil.md) registram as fontes; o [inventário](../design/inventario-e-proximos-passos.md) acompanha as validações de design e QA.
