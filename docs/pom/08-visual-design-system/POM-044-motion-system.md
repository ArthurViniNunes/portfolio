---
id: POM-044
title: Motion System
status: Approved
owner: Arthur Vinicius Carneiro Nunes
version: 0.3.0
last_updated: 2026-10-01
---

# POM-044 - Motion System

## Motion & Interaction

Animações dão feedback e presença à identidade. A abertura pode ter movimento expressivo conforme solicitado pelo autor; texto e tarefas permanecem estáveis e imediatamente acessíveis.

### Objetivos:

- reforçar feedback de interação
- guiar atenção do usuário
- melhorar percepção de fluidez

### Restrições:

- restringir loops decorativos à abertura; entradas breves de imagens, menu e feedback de interação podem ocorrer nas demais páginas
- sem delays artificiais
- sem impacto negativo em performance

## Exceção autorizada para a abertura

A Home pode usar composição gráfica animada para dar presença à identidade visual, com botão de pausa, respeito a `prefers-reduced-motion`, interrupção quando estiver fora da tela ou com a aba oculta e conteúdo legível sem JavaScript. Essa exceção substitui a proibição absoluta anterior somente nesse contexto. A [ADR-006](../../architecture/adr/ADR-006-hero-motion-and-accessibility.md) registra implementação e trade-offs. Performance permanece um critério a medir antes da publicação.

Na evolução solicitada em 01/10/2026, a marca, o retrato e os planos da Home ganham movimento mais perceptível. O controle passa a ser global e persistido, disponível no cabeçalho e na abertura. A preferência de movimento reduzido do sistema prevalece. Entradas de mídia não escondem conteúdo antes do JavaScript; depoimentos não usam carrossel automático. A [ADR-010](../../architecture/adr/ADR-010-brand-and-global-motion.md) registra a evolução.

---
