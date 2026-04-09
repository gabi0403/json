const prompt = require("prompt-sync")();

async function listarFeiticos() {// função pra listar somente os feitiços
  try {
    const res = await fetch("https://hp-api.onrender.com/api/spells");
    const data = await res.json();

    let inicio = 0;
    const passo = 10; 

    while (inicio < data.length) {

      // mostra 10 feitiços
      data.slice(inicio, inicio + passo).forEach((f, i) => {
        console.log(`\n${inicio + i + 1}. ${f.name}`); //mostra número e nome 
        console.log(`Descrição: ${f.description}`);// mostra a descrição do feitiço
      });

      inicio += passo;

      // pergunta se quer continuar
      const resposta = prompt("\nMostrar mais? (s/n): ").toLowerCase(); // se quer continuar, mostra mais 10 feitiços

      if (resposta !== "s") {
        console.log("Encerrado.");
        break;
      }
    }

  } catch (erro) {
    console.log("Erro:", erro);
  }
}

listarFeiticos();