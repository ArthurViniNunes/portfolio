# ADR-011: perfil e depoimentos com proveniência editorial

Status: aceita. Data: 2026-10-01.

## Contexto

O autor forneceu duas recomendações do LinkedIn e um arquivo de memórias para melhorar a apresentação profissional. O conteúdo deve transmitir confiança com fatos rastreáveis, preservar os textos originais e ter versões PT/EN sem depender de acesso ao LinkedIn no navegador.

## Decisão

`src/content/profile.ts` reúne biografia, trajetória e modo de trabalhar. `src/content/recommendations.ts` reúne identificador, nome, iniciais, perfil de origem, data, contexto, cargo informado, texto completo e excerto em cada idioma. A fonte é registrada como fornecida pelo autor. A [proveniência editorial](../../content/fontes-do-perfil.md) delimita as afirmações e incertezas.

Home e Sobre compartilham o componente de comentários. Excerto e autoria aparecem imediatamente; `<details>` dá acesso ao texto completo, inclusive sem JavaScript. Inglês identifica a tradução antes da expansão e mantém o original em português acessível. Fotografias não fornecidas são substituídas por iniciais, sem avatares inventados. Não há estrelas, notas ou carrossel automático.

A busca incorpora a biografia e os depoimentos e preserva idioma e âncora de cada resultado. O HTML estático já contém os textos completos. Não há scraping, iframe, API do LinkedIn, CMS ou dependência de autenticação de visitantes.

## Alternativas e consequências

Embeds dependeriam de terceiro e poderiam afetar privacidade, disponibilidade e desempenho. Depoimentos resumidos sem original perderiam contexto. Manter catálogos locais exige revisão e novo build quando os autores atualizarem textos ou cargos.

As recomendações não foram verificadas independentemente no LinkedIn nesta sessão. Não representam vínculo empregatício com PagBank: o contexto fornecido é um desafio em grupo. As memórias são evidência fornecida pelo autor, não comprovação de disponibilidade de infraestrutura, resultados medidos ou estado atual de repositórios. Dados históricos não substituem revisão técnica dos casos de projeto.
