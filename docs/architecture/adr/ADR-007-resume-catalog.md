# ADR-007 — Catálogo manual de currículos por atuação
Status: aceita. Data: 2026-10-01.

## Contexto
O autor quer indexar currículos para DevOps, Full Stack e Engenharia de Software. O POM-025 exclui um gerador automático de CV; o histórico completo e os arquivos ainda precisam ser fornecidos.

## Decisão
A rota Resume é um catálogo com três entradas fixas, descrição de foco e caminho de PDF. Um contrato tipado registra identificador, título, resumo, temas, caminho e estado do arquivo. **Após o fornecimento do arquivo pelo autor, o PDF Full Stack está disponível** em `frontend/public/resumes/arthur-nunes-full-stack.pdf` e pode ser baixado pela interface em português. Os links de DevOps e Engenharia de Software permanecem provisórios em `frontend/public/resumes/`.

A interface é traduzida e cada idioma pode apontar para seu próprio PDF. O Full Stack em inglês permanece provisório em `arthur-nunes-full-stack-en.pdf` até que o arquivo traduzido seja fornecido; a língua ou a data de revisão de um PDF não é presumida enquanto ele não existir.

## Alternativas
Gerar PDFs de dados incompletos inventaria um currículo. Um único documento não atende aos três focos solicitados. Links de armazenamento externo só entram quando fornecidos e verificados.

## Consequências e revisão
Documentos são atualizados manualmente. O build permite links identificados como `placeholder`; arquivos marcados `available` precisam existir. Ao adicionar os PDFs, atualizar seu estado e registrar idioma/data reais. Nenhum dado profissional é inferido pelo nome do currículo. O catálogo não exige backend.
