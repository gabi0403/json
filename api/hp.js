const prompt = require("prompt-sync")();

async function listarFeiticos() {
  try {
    const res = await fetch("https://hp-api.onrender.com/api/spells");
    const data = await res.json();

    let inicio = 0;
    const passo = 10;

    while (inicio < data.length) {

      // mostra 10 feitiços
      data.slice(inicio, inicio + passo).forEach((f, i) => {
        console.log(`\n${inicio + i + 1}. ${f.name}`);
        console.log(`Descrição: ${f.description}`);
      });

      inicio += passo;

      // pergunta se quer continuar
      const resposta = prompt("\nMostrar mais? (s/n): ").toLowerCase();

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