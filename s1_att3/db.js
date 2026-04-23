// lista de usuarios para simular o banco (exercício 6)
let usuarios = [
  { id: 1, nome: "Diogo TB" },
  { id: 2, nome: "Jorge" }
];

// funcoes para mexer nos dados (exercício 6)
module.exports = {
  buscarTodos: () => {
    return usuarios;
  },
  adicionar: (nome) => {
    const novo = { id: usuarios.length + 1, nome: nome };
    usuarios.push(novo);
    return novo;
  },
  buscarPorId: (id) => {
    return usuarios.find(u => u.id == id);
  },
  atualizar: (id, novoNome) => {
    const index = usuarios.findIndex(u => u.id == id);
    if (index !== -1) {
      usuarios[index].nome = novoNome;
      return usuarios[index];
    }
    return null;
  },
  deletar: (id) => {
    const index = usuarios.findIndex(u => u.id == id);
    if (index !== -1) {
      return usuarios.splice(index, 1);
    }
    return null;
  }
};