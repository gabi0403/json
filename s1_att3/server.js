const express = require('express');
const db = require('./db'); // Importa o arquivo db.js
const app = express();

// middleware faz o express entender quando enviamos JSON no corpo da requisição
app.use(express.json());

// exercício 5: faz a pasta "public" ficar acessível 
app.use(express.static('public'));

// exercício 3: middleware de log (avisa no terminal toda vez que alguém acessa uma rota)
app.use((req, res, next) => {
  console.log("Recebi um acesso: " + req.method + " na rota " + req.url);
  next(); // Passa para a próxima função
});

// Tarefas (exercício 2)
let tarefas = []; // Lista de tarefas vazia

app.get('/tarefas', (req, res) => {
  res.json(tarefas); // Mostra as tarefas
});

app.post('/tarefas', (req, res) => {
  const nova = { id: tarefas.length + 1, nome: req.body.nome };
  tarefas.push(nova);
  res.status(201).json(nova); // 201 significa "criado com sucesso"
});

app.delete('/tarefas/:id', (req, res) => {
  const id = req.params.id;
  // Se o ID não for um número, gera um erro para o exercício 4
  if (isNaN(id)) {
    return res.status(400).json({ erro: "O ID precisa ser um número!" });
  }
  tarefas = tarefas.filter(t => t.id != id);
  res.status(204).send(); // 204 significa "sucesso, mas não tenho nada pra mostrar"
});

// Usuário (exercício 7)
app.get('/usuarios', (req, res) => {
  res.json(db.buscarTodos());
});

app.post('/usuarios', (req, res) => {
  const novo = db.adicionar(req.body.nome);
  res.status(201).json(novo);
});

app.get('/usuarios/:id', (req, res) => {
  const user = db.buscarPorId(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
});

// exercício 1: rota simples de teste
app.get('/hello', (req, res) => {
  res.send("Olá, Mundo!");
});

// exercício 4: middleware de erro global (caso algo dê errado)
app.use((err, req, res, next) => {
  console.error("Houve um erro no servidor!");
  res.status(500).json({ erro: "Algo deu errado internamente." });
});

// Liga o servidor
app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});