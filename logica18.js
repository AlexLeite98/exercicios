/**🟠 MISSÃO 3 – A Espada Rúnica (Arrays)
📜 História:
Você encontrou uma espada que precisa ser forjada com os 5 maiores números de um conjunto.
🎯 Objetivo:
Criar um array com 10 números aleatórios.
Ordenar em ordem decrescente.
Mostrar apenas os 5 maiores.
🏆 Recompensa: +120 XP**/

let conjuntos = [0];
for(i=0; i<10; i++){
	conjuntos[i] = Math.floor(Math.random()*100);
}

let forja = conjuntos.sort((a, b) => b-a);
alert(`SUCESSO!!! sua espada foi forjada com as seguintes runas [${forja[0]}] [${forja[1]}] [${forja[2]}] [${forja3]}] [${forja[4]}]`)