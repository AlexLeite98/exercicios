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

for(i=0; i<1; i++){
	let loja = Number(prompt(`[SALDO DE $${moedas}]\n O que vc deseja comprar?\n (1)[Espada Élfica - $30]\n (2)[Poção de vida - $10]\n (3)[Sair da loja]`));
	
	if(loja==1){
		moedas-=30;
		i-=1;
	}else if(loja==2){
		moedas-=10;
		i-=1;
	}else if(loja==3){
		alert('Volte sempre!')
	}
}