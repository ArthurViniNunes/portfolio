# Inventário e próximos passos do design

Data: 2026-10-01. A [auditoria do POM](auditoria-pom.md) apresenta o estado de cada requisito. Este arquivo concentra o material editorial e as próximas validações.

| Item | Fonte atual | Estado |
| --- | --- | --- |
| Nome, cargo e retrato | Portfólio anterior em `origin/main` | Recuperados; confirmar apresentação e foto preferida. |
| Smash or Pass | [README e documentação](https://github.com/ArthurViniNunes/smash-or-pass/) | Produto em destaque por escolha do autor. Captura `docs/home-image.png` recuperada; contexto acadêmico e autoria em equipe indicados. Detalhar contribuição individual posteriormente. |
| Plateia Ingressos | Texto e captura históricos | Escopo, stack, links e resultados em revisão. A captura não comprova a implementação. |
| Kanban Realtime | [Repositório público](https://github.com/ArthurViniNunes/kanban-realtime) | Boards e cartões documentados; sincronização em tempo real aparece como planejamento, não como entrega atual. |
| Home Expense Control | [Repositório público](https://github.com/ArthurViniNunes/home-expense-control) | Conteúdo do caso alinhado ao README; confirmar capturas atuais. |
| E-mail, GitHub e LinkedIn | Portfólio anterior | Links usados; confirmar canais preferidos antes da publicação. |
| Currículos, histórico e certificações | PDFs e histórico ainda não fornecidos | Índice de DevOps, Full Stack e Engenharia de Software. Links provisórios quebrados por pedido explícito do autor; não oferecer PDF antigo. |
| Estudos de algoritmos | Não fornecidos nesta versão | Estado vazio em Learning. |

O [estudo visual estático](estudo-visual-estatico/index.html) continua como referência histórica. A aplicação React agora usa uma composição própria com contornos SVG e planos translúcidos, pausa e movimento reduzido, conforme exceção autorizada na revisão do [POM-044](../pom/08-visual-design-system/POM-044-motion-system.md). O estudo do Plateia preserva a indicação de conteúdo ainda não verificado.

## Próximos passos

1. Revisar com o autor nome profissional, cargo, frase de apresentação, retrato e canais de contato.
2. Conferir o código e a documentação do Plateia; atualizar o caso somente com funcionalidades, decisões e links comprovados.
3. Substituir capturas históricas por imagens atuais e consistentes dos projetos.
4. Quando houver material autoral, preencher carreira, formação, certificações e estudos de algoritmos, preservando a estrutura de conteúdo separada dos componentes.
5. Fazer QA visual em 320, 390, 768 e 1440 px; percorrer as rotas por teclado e leitor de tela; medir contraste e Lighthouse no site hospedado. Registrar problemas e corrigir antes de considerar as metas do POM atendidas.
