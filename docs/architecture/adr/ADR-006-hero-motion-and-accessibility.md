# ADR-006 — Abertura gráfica interativa com movimento controlado
Status: aceita. Data: 2026-10-01.

Complementada pela [ADR-010](ADR-010-brand-and-global-motion.md): marca própria, maior amplitude e contraste na Home, controle global persistido e entradas funcionais de mídia nas páginas internas. A [ADR-011](ADR-011-profile-and-recommendation-provenance.md) atualiza a narrativa de Sobre com fontes fornecidas pelo autor.

## Contexto
O autor solicitou mais presença visual e recursos de frontend na abertura. A restrição anterior do POM-044 a toda animação decorativa conflita com essa instrução explícita; o pedido atual prevalece e a exceção é registrada no POM.

## Decisão
Uma composição vetorial de linhas e planos representa construção de interfaces e sistemas, com resposta leve ao ponteiro. SVG/CSS mantêm nitidez e dispensam assets pesados ou WebGL. Movimento ambiente fica concentrado na Home, com controle de pausa, respeito a `prefers-reduced-motion` e interrupção fora da tela/aba ativa. Conteúdo e ações permanecem disponíveis sem animação ou JavaScript.

Sobre usa retrato e narrativa baseada nos projetos; Contato concentra a ação em uma composição editorial com e-mail, cópia e canais. Cores principais: marfim #FAF7F2, ameixa #733C55, grafite #29232A, noite #19151C, rosa claro #E9A9C8 e mel #E7BB55. Syne permanece nos títulos e fonte de sistema na leitura.

## Alternativas
Vídeo, canvas contínuo e bibliotecas 3D aumentariam carga, energia e manutenção sem conteúdo que os justificasse. Efeitos em todas as seções diluiriam a abertura.

## Consequências e revisão
A decoração é ignorada por leitores de tela. Pausa e movimento reduzido precisam desativar tanto o loop quanto a resposta ao ponteiro. Medir performance antes da publicação; simplificar o efeito se necessário.
