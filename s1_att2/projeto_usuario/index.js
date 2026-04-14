const express = require('express');
const app = express();
const porta = 3001;

app.listen(porta, () => {
  console.log(`PROJETO 1: Servidor de Usuários rodando na porta ${porta}`);
});

