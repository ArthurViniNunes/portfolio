# ADR-007 — Catálogo manual de currículos por atuação
Status: aceita. Data: 2026-10-01.

## Contexto
O autor quer indexar currículos para DevOps, Full Stack e Engenharia de Software. O POM-025 exclui um gerador automático de CV; o histórico completo e os arquivos ainda precisam ser fornecidos.

## Decisão
A rota Resume é um catálogo com três entradas fixas, descrição de foco e caminho de PDF. Um contrato tipado registra identificador, título, resumo, temas, caminho e estado do arquivo. **Por solicitação explícita do autor em 01/10/2026, os três links ficam provisoriamente quebrados**, apontando para arquivos esperados em `frontend/public/resumes/`. A interface informa que o PDF ainda não foi adicionado. Os caminhos são `arthur-nunes-devops.pdf`, `arthur-nunes-full-stack.pdf` e `arthur-nunes-software-engineer.pdf`.

A interface é traduzida; os links de PDF são compartilhados entre PT/EN até que arquivos traduzidos sejam fornecidos. A língua ou a data de revisão de um PDF não é presumida enquanto ele não existir.

## Alternativas
Gerar PDFs de dados incompletos inventaria um currículo. Um único documento não atende aos três focos solicitados. Links de armazenamento externo só entram quando fornecidos e verificados.

## Consequências e revisão
Documentos são atualizados manualmente. O build permite somente os três links identificados como `placeholder`; arquivos marcados `available` precisam existir. Ao adicionar os PDFs, atualizar seu estado e registrar idioma/data reais. Nenhum dado profissional é inferido pelo nome do currículo. O catálogo não exige backend.
