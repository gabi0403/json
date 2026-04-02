import json

# Menu principal
def menu():
    print("\n === Menu de Livros ===")
    print("1- Adicionar")
    print("2- Listar por grupo")
    print("3- Atualizar")
    print("4- Excluir")
    print("5- Listar todos")
    print("6- Sair")

def escolher_grupo():
    # Pergunta ao usuário o grupo que deseja retornar
    print("\nTipo de livro:")
    print("1- Infantil")
    print("2- Juvenil")
    print("3- Adulto")

    opcao = input("Escolha: ")

    if opcao =="1":
        return "infantil"
    
    elif opcao == "2":
        return "juvenil"
    
    elif opcao == "3":
        return "adulto"
    
    else:
        print("Opção inválida 😠")
        return None
    
# Função para ler o JSON
def ler_livros():
    with open("livros.json", "r", encoding="utf-8") as arquivo:
        return json.load(arquivo)
    
# Função de salvar os livros
def salvar_livros(livros):
    with open("livros.json", "w", encoding="utf-8") as arquivo:
        json.dump(livros, arquivo, indent=2, ensure_ascii=False)


# adicionar livros novos
def adicionar():
    grupo = escolher_grupo()

    if not grupo:
        return
    
    titulo = input("Titulo: ")
    autor = input("Autor: ")
    
    livros = ler_livros()

    livros[grupo].append({
        "titulo": titulo,
        "autor": autor
    })

    salvar_livros(livros)
    print("Livro adicionado com sucesso! 🎉")

    
# função listar livros
def listar():
    grupo = escolher_grupo()

    if not grupo:
        return
    
    livros = ler_livros()
    print(f"\nLista de {grupo.upper()}:")

    for index, livro in enumerate(livros[grupo], start=1):
        print(f"{index}. {livro['titulo']} - {livro['autor']}")


# Atualizar 
def atualizar():
    grupo = escolher_grupo()

    if not grupo:
        return
    
    livros = ler_livros()

    index = int(input("Index do livro: ")) -1

    if 0 <= index < len(livros[grupo]):
        titulo = input("Novo título: ")
        autor = input("Novo autor: ")

        livros[grupo][index] = {
            "titulo": titulo,
            "autor": autor,
        }

        salvar_livros(livros)
        print("Livro atualizado com sucesso!🎉")
    else:
        print("Índice inválido. 😠")

# Função para excluir
def excluir():
    grupo = escolher_grupo()
    if not grupo:
            return
        
    livros = ler_livros()

    index = int(input("Index do livro: ")) -1

        # verificar se o index é valido
    if 0 <= index < len(livros[grupo]):
            # remove o elemento da matriz
            livros[grupo].pop(index)

            salvar_livros(livros)
            print("Livro excluído com sucesso!🗑️")

    else:
        print("Índice inválido. 😠")

def listar_todos():
    livros = ler_livros()

    print("\n=== Lista de todos os livros ===")

    for grupo, lista in livros.items():
        if lista:  # só entra se tiver livros no grupo
            for index, livro in enumerate(lista, start=1):
                print(f"{index}. {livro['titulo']} - {livro['autor']} ({grupo})")

# Menu principal:
def main():
    while True:
        menu()
        opcao = input("Escolha uma opção: ")

        if opcao == "1":
            adicionar()

        elif opcao == "2":
            listar()

        elif opcao == "3":
            atualizar()

        elif opcao == "4":
            excluir()

        elif opcao == "5":
            listar_todos()

        elif opcao == "6":
            print("Encerrando o programa...👋")
            break

        else:
            print("Opção inválida.😠")

# Executa o programa
main()
