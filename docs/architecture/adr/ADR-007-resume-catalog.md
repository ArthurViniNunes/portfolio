# ADR-007 — Catálogo manual de currículos por atuação
Status: aceita. Data: 2026-10-01.

## Contexto
O autor quer indexar currículos para DevOps, Full Stack e Engenharia de Software. O POM-025 exclui um gerador automático de CV; o histórico completo e os arquivos ainda precisam ser fornecidos.

## Decisão
A rota Resume é um catálogo com três entradas fixas por idioma, descrição de foco e caminho de PDF. Um contrato tipado registra identificador, título, resumo, temas, caminho e estado do arquivo. Os três PDFs em português e os três PDFs em inglês estão disponíveis em `frontend/public/resumes/` e são abertos em novas abas pela interface correspondente.

A interface é traduzida e cada idioma aponta para seus próprios PDFs. Os seis arquivos foram fornecidos pelo autor e registrados como `available`.

## Alternativas
Gerar PDFs de dados incompletos inventaria um currículo. Um único documento não atende aos três focos solicitados. Links de armazenamento externo só entram quando fornecidos e verificados.

## Consequências e revisão
Documentos são atualizados manualmente. O build permite links identificados como `placeholder`; arquivos marcados `available` precisam existir. Ao adicionar os PDFs, atualizar seu estado e registrar idioma/data reais. Nenhum dado profissional é inferido pelo nome do currículo. O catálogo não exige backend.
