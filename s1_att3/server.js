const express = require('express');
const db = require('./db'); // importa o arquivo db.js
const app = express();

// middleware faz o express entender quando enviamos json no corpo da requisição
app.use(express.json());

// exercício 5: faz a pasta public ficar acessível 
app.use(express.static('public'));

// exercício 3: middleware de log (avisa no terminal toda vez que alguém acessa uma rota)
app.use((req, res, next) => {
  console.log("Recebi um acesso: " + req.method + " na rota " + req.url);
  next(); // passa para a próxima função
});

// exercício 1: rota simples de teste
app.get('/hello', (req, res) => {
  res.send("Olá, Mundo!");
});

// tarefas (exercício 2)
let tarefas = []; // lista de tarefas vazia

app.get('/tarefas', (req, res) => { // método get pra retornar a lista de tarefas
  res.json(tarefas); // mostra as tarefas
});

app.post('/tarefas', (req, res) => { // método post pra add uma nova tarefa
  const nova = { id: tarefas.length + 1, nome: req.body.nome };
  tarefas.push(nova);
  res.status(201).json(nova); // 201 significa "criado com sucesso"
});

app.delete('/tarefas/:id', (req, res) => { // método delete pra remover tarefa
  const id = req.params.id;

  // exercício 4: valida se o id é numero
  if (isNaN(id)) {
    return res.status(400).json({ erro: "o id precisa ser um número!" });
  }

  tarefas = tarefas.filter(t => t.id != id);
  res.status(204).send();
});

// usuários (exercício 7) (obviamente usando crud)

// metodo get pra listar todos
app.get('/usuarios', (req, res) => {
  res.json(db.buscarTodos());
});

// metodo get buscar por id
app.get('/usuarios/:id', (req, res) => {
  const user = db.buscarPorId(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ mensagem: "usuário não encontrado" });
  }
});

// metodo post pra adicionar usuário
app.post('/usuarios', (req, res) => {
  const novo = db.adicionar(req.body.nome);
  res.status(201).json(novo);
});

// metodo put pra atualizar usuário
app.put('/usuarios/:id', (req, res) => {
  const atualizado = db.atualizar(req.params.id, req.body.nome);

  if (atualizado) {
    res.json(atualizado);
  } else {
    res.status(404).json({ erro: "não foi possível atualizar" });
  }
});

// metodo delete pra excluir usuário
app.delete('/usuarios/:id', (req, res) => {
  const removido = db.deletar(req.params.id);

  if (removido) {
    res.status(204).send();
  } else {
    res.status(404).json({ erro: "usuário não encontrado" });
  }
});

// exercício 4: middleware de erro global (caso algo dê errado)
app.use((err, req, res, next) => {
  console.error("houve um erro no servidor!");
  res.status(500).json({ erro: "algo deu errado internamente." });
});

// liga o servidor
app.listen(3000, () => {
  console.log("servidor rodando em http://localhost:3000");
});