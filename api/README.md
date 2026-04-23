**README do exercício de API (hp.js)**

# Consulta de Feitiços - Harry Potter API

Este projeto é um script simples em Node.js que consome uma API pública do Harry Potter para listar feitiços e suas descrições.

## O que o código faz

O script busca os dados da API e exibe os feitiços no console de 10 em 10. Após cada grupo, ele pergunta se o usuário deseja ver mais feitiços ou encerrar a consulta.

## Como usar

1. **Instalar as dependências:**
   No terminal, dentro da pasta do projeto, instale o pacote para ler entradas do teclado:

   ```bash
   npm install prompt-sync

Rodar o script:
Execute o comando abaixo para iniciar:

Bash
node seu_arquivo.js

Interação:

Digite s para ver os próximos 10 feitiços.

Digite n (ou qualquer outra tecla) para sair.

Tecnologias usadas:

Node.js

Fetch API (para buscar os dados)

Prompt-sync (para interagir com o usuário no terminal)

Harry Potter API (<https://hp-api.onrender.com>)
