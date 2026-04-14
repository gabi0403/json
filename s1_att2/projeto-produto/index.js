const express = require('express');
const app = express();
const porta = 3002;

app.listen(porta, () => {
  console.log(`PROJETO 2: Servidor de Produtos rodando na porta ${porta}`);
});
