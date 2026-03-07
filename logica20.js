/** 🟣 MISSÃO 5 – A Caçada Selvagem (Desafio Hardcore)
Inspirado diretamente em The Witcher 3: Wild Hunt
📜 História:
Você enfrenta um espectro.
🎯 Criar um sistema de batalha:
Jogador: 100 HP
Monstro: 80 HP
A cada rodada:
Jogador causa dano aleatório (10–20)
Monstro causa dano aleatório (5–15)
Luta até alguém morrer.
Mostrar quem venceu.
🏆 Recompensa: +500 XP
Título desbloqueado: "Bruxo do Código" **/ 
//console.log(`${}`); \n
//Math.floor(Math.random() * (max - min + 1)) + min

let geraldo = 100;
let boss = 80;

for(i=1; i<=20; i++){
	alert(`TURNO [${i}]\n\nGeraldo o Bruxo [HP:${geraldo}] X Boss Caçada selvagem [HP:${boss}]`);
	
	let atk_geraldo = Math.floor(Math.random()*(20-10 + 1)) + 10;
	let atk_boss = Math.floor(Math.random()*(15-5 + 1)) + 5;
	
	alert(`Geraldo da ${atk_geraldo} de dano!\nBoss da ${atk_boss} de dano!`);
	
	geraldo -= atk_boss;
	boss -= atk_geraldo;
	
	if(geraldo==0){
		alert('VOCÊ MORREU!!!');
		i = 20;
	}else if(boss==0){
		alert('Boss foi derrotado, Geraldo venceu!!!');
		i=20;
	}
}
