# ADR-009 — Contato direto com cópia progressiva
Status: aceita. Data: 2026-10-01.

## Contexto
O autor pediu uma seção de contato mais atraente. Os canais conhecidos são e-mail, LinkedIn e GitHub; não há requisito de armazenar mensagens.

## Decisão
A página apresenta e-mail como ação principal, canais profissionais e acesso aos currículos. `mailto:` funciona sem JavaScript. Cópia usa Clipboard API somente após clique, anuncia sucesso ou falha e mantém o endereço selecionável para cópia manual. Não há formulário que finja enviar mensagens, integração externa ou API.

## Alternativas
Formulário com provedor exigiria configuração e tratamento de dados adicionais. Backend próprio conflitaria com a fundação técnica sem um novo requisito concreto.

## Consequências e revisão
O envio acontece no aplicativo de e-mail do visitante; o portfólio não promete entrega nem prazo de resposta. Se um formulário se tornar necessário, registrar persistência, privacidade, proteção contra abuso e tratamento de erro em nova ADR.
