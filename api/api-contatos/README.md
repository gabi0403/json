<!-- Explica oq faz
explica url
exemplo de url -->

# API de Contatos

## ENDPOINTS

### BUSCAR CONTATOS

    - Retorna todos os contatos de um grupo específico (alunos e professores)
    - GET /contatos/:grupo
    - http://localhost:3000/contatos/alunos


    Resposta:
        {
            "alunos": [
        {
            "nome": "João Santos",
            "telefone": "11999999999"
        },
        {
            "nome": "Fernanda",
            "telefone": "12365465789"
        }   
        ]
        }

    - Se não der certo:
    Erro 404:
        "{ "erro": "Grupo não encontrado" }"

### ADICIONAR CONTATOS

    - Adiciona um novo contato em um grupo
    - POST /contatos/:grupo
    - http://localhost:3000/contatos/professores

    Resposta:
    {
        "mensagem": "Contato adicionado com sucesso.",
        "contato": {
        "nome": "Maria",
        "telefone": "999999999"
        }
    }

     - Se der erro, o grupo não existe ou nome/telefone ausente

### ATUALIZAR CONTATO

    - Atualiza um contato pelo índice
    PUT /contatos/:grupo/:index
    - http://localhost:3000/contatos/alunos/6

    Resposta:
    {
        "mensagem": "Contato atualizado com sucesso",
        "contato": {
        "nome": "Novo Nome",
        "telefone": "888888888"
        }
    }

    - Se der erro, o grupo não foi encontrado ou índice inválido

### EXCLUIR CONTATO

    - Remove um contato pelo índice
    - DELETE /contatos/:grupo/:index
    - http://localhost:3000/contatos/professores/3

    Resposta:
    {
        "mensagem": "Contato excluído com sucesso.",
        "contato": {
        "nome": "João",
        "telefone": "123456789"
        }
    }
    
    - Se der erro, o grupo não foi encontrado ou índice inválido
