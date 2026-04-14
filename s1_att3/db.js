// Lista de usuários inicial
let usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" }
];

// Funções para mexer nos usuários
module.exports = {
  // Retorna a lista inteira
  buscarTodos: () => usuarios,

  // Cria um novo usuário e coloca na lista
  adicionar: (nome) => {
    const novo = { id: Date.now(), nome }; // Date.now cria um ID único baseado no tempo
    usuarios.push(novo);
    return novo;
  },

  // Acha um usuário pelo ID
  buscarPorId: (id) => usuarios.find(u => u.id == id),

  // Deleta um usuário da lista
  deletar: (id) => {
    const index = usuarios.findIndex(u => u.id == id);
    if (index !== -1) {
      return usuarios.splice(index, 1); // Remove o item da lista
    }
    return null;
  }
};