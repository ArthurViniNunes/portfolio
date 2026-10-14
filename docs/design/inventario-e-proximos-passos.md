# Inventário e próximos passos do design

Atualizado em 2026-10-14. A [auditoria do POM](auditoria-pom.md) apresenta o estado de cada requisito. Este arquivo concentra o material editorial e as próximas validações.

| Item | Fonte atual | Estado |
| --- | --- | --- |
| Nome, cargo e retrato | Portfólio anterior, memórias e duas fotos fornecidas pelo autor em 14/10/2026 | Foto frontal na Home e foto levemente lateral em Sobre; cargo atual de DevOps na IGEOS desde outubro de 2026. Confirmar a frase profissional final. |
| Smash or Pass | [README e documentação](https://github.com/ArthurViniNunes/smash-or-pass/) | Produto em destaque por escolha do autor. Captura `docs/home-image.png` recuperada; contexto acadêmico e autoria em equipe indicados. Detalhar contribuição individual posteriormente. |
| Plateia Ingressos | [Repositório, ADRs e testes](https://github.com/ArthurViniNunes/plateia); [demonstração](https://plateia-ingressos.vercel.app/) | Escopo, stack e decisões técnicas revistos em 14/10/2026; MVP documentado. Captura histórica ainda requer comparação visual. |
| Kanban Realtime | [Repositório público](https://github.com/ArthurViniNunes/kanban-realtime) | Frontend usa Socket.IO para sincronizar boards e receber eventos; acesso por membros e movimentação de cards conferidos no código. Captura histórica pendente. |
| Home Expense Control | [Repositório público](https://github.com/ArthurViniNunes/home-expense-control) | Decisão sobre centavos e filtros conferida na documentação de arquitetura; confirmar captura atual. |
| E-mail, GitHub e LinkedIn | Portfólio anterior | Links usados; confirmar canais preferidos antes da publicação. |
| Currículos, histórico e certificações | Memórias do autor e atualização sobre a IGEOS; PDFs ainda não fornecidos | Trajetória inicial publicada em Sobre. Índice de DevOps, Full Stack e Engenharia de Software com links provisórios quebrados por pedido explícito do autor; não oferecer PDF antigo. |
| Estudos de algoritmos | Não fornecidos nesta versão | Estado vazio em Learning. |

O [estudo visual estático](estudo-visual-estatico/index.html) continua como referência histórica e não acompanha automaticamente as revisões editoriais do React. A aplicação React usa uma composição própria com contornos SVG e planos translúcidos, pausa e movimento reduzido, conforme exceção autorizada na revisão do [POM-044](../pom/08-visual-design-system/POM-044-motion-system.md).

## Próximos passos

1. Revisar com o autor nome profissional, cargo, frase de apresentação e canais de contato. Os dois retratos já têm função definida nas páginas.
2. Confirmar com o autor as contribuições individuais no Smash or Pass; manter distinção entre decisões documentadas do projeto e autoria pessoal.
3. Substituir capturas históricas por imagens atuais e consistentes dos projetos.
4. Quando houver entregas publicáveis, detalhar o escopo da atuação na IGEOS; revisar continuidade das demais atividades e fornecer os três currículos. Publicar estudos de algoritmos quando houver material autoral, preservando a estrutura de conteúdo separada dos componentes. Ver [pendências editoriais](../content/pendencias-editoriais.md).
5. Fazer QA visual em 320, 390, 768 e 1440 px; percorrer as rotas por teclado e leitor de tela; medir contraste e Lighthouse no site hospedado. Registrar problemas e corrigir antes de considerar as metas do POM atendidas.
