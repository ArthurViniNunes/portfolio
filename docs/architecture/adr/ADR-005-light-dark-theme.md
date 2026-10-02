# ADR-005 — Temas por tokens sem servidor
Status: aceita. Data: 2026-10-01.

## Contexto
O autor prefere o tema claro e solicitou uma alternativa escura. O tema precisa cobrir páginas, controles e leitura técnica.

## Decisão
Tokens CSS semânticos definem fundo, superfície, texto, borda, marca e contraste do botão. `data-theme` no HTML seleciona a paleta. Claro é o padrão inicial; escolha explícita é persistida em localStorage. Um script mínimo aplica a preferência antes da renderização visível. Armazenamento bloqueado não impede o botão de funcionar durante a sessão. Os componentes leem a preferência aplicada sem renderizar HTML inicial diferente no cliente.

## Alternativas
CSS duplicado por página fragmentaria manutenção. Contexto global e biblioteca de temas não são necessários para uma preferência representada no documento. Preferência automática do sistema foi preterida pela escolha clara do autor.

## Consequências e revisão
Todo novo componente deve usar tokens; capturas de produtos preservam suas cores reais. Impressão usa cores claras. Testar persistência, mudança de rota e armazenamento indisponível. Contraste deve ser verificado em ambas as paletas.
