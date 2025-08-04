/*let nome = "Brasinha";

// simulador dos diferentes valores de XP
let listaDeXP = [850, 1500, 3500, 6200, 7700, 8500, 9300, 12000];

//laços de repetiçãotestando os vários níveis de XP
for (let i = 0; i < listaDeXP.length; i++) {
  let xp = listaDeXP[i];
  let nivel = "";

  //estrutura de decisão
if (xp > 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}
  //resultado para cada valor de XP
  console.log(`O Herói de nome **${nome}** está no nível de **${nivel}** (XP: ${xp})`);
}*/

//versão interativa para html
  function classificarHeroi() {
      const nome = document.getElementById("nomeHeroi").value;
      const xp = parseInt(document.getElementById("xpHeroi").value);
      let nivel = "";

      if (xp < 1000) {
        nivel = "Ferro";
      } else if (xp <= 2000) {
        nivel = "Bronze";
      } else if (xp <= 5000) {
        nivel = "Prata";
      } else if (xp <= 7000) {
        nivel = "Ouro";
      } else if (xp <= 8000) {
        nivel = "Platina";
      } else if (xp <= 9000) {
        nivel = "Ascendente";
      } else if (xp <= 10000) {
        nivel = "Imortal";
      } else {
        nivel = "Radiante";
      }

      document.getElementById("resultado").innerText =
        `O Herói de nome ${nome} está no nível de ${nivel}`;
    }
