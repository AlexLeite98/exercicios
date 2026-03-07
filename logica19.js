/**🔴 MISSÃO 4 – O Bruxo Mercador (Sistema)
📜 História:
Você virou mercador temporariamente.
🎯 Objetivo:
Criar um sistema onde:
O jogador começa com 100 moedas.
Pode:
Comprar espada (-30 moedas)
Comprar poção (-10 moedas)
Ver saldo
Impedir compra se não tiver moedas suficientes.
🏆 Recompensa: +200 XP**/
//console.log(`${}`); \n
let moedas = 100
let loja = Number(prompt(`[SALDO DE $${moedas}]\n O que vc deseja comprar?\n [Espada Élfica - $30]\n [Poção de vida - $10]`));