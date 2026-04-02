# 📚 Sistema de Cadastro de Livros

Um sistema simples e prático em Python para gerenciar o acervo de livros de uma biblioteca. O projeto utiliza arquivos JSON para garantir que os dados não sejam perdidos ao fechar o programa.

---

## 📋 Requisitos do Sistema

### 1. Requisitos Funcionais (Funcionalidades)
O sistema conta com as seguintes operações no menu principal:
* **Cadastrar novo livro:** Permite a entrada de dados do livro e os salva no arquivo.
* **Listar livros:** Exibe todos os livros cadastrados de forma organizada na tela.
* **Atualizar livros** Permite atualizar os livros já cadastrados.
* **Remover livro:** Permite a exclusão de um livro da base de dados através de um identificador.

---

### 2. Requisitos Não Funcionais (Regras de Operação)
* **Linguagem:** Python
* **Interface:** Menu interativo via prompt de comando (Terminal).

---

## 💾 Estrutura dos Dados

Os livros são armazenados em uma lista de objetos dentro do arquivo JSON. Cada livro segue o seguinte padrão de propriedades:

```json
{
  "id" : 1,
  "titulo": "Nome do Livro",
  "autor": "Nome do Autor",
}

