const express = require('express');
const app = express();
const porta = 3003;

app.listen(porta, () => {
  console.log(`PROJETO 3: Servidor de Pedidos rodando na porta ${porta}`);
});