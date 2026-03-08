/** 🟡 MISSÃO 7 – A Poção das Vogais
📜 História:
Um alquimista precisa contar quantas vogais existem em um ingrediente mágico.
🎯 Objetivo
Receber uma palavra
Contar quantas vogais existem nela **/
//console.log(`${}`); \n

let palavra = prompt('Diga o ingrediente mágico para saber quanta magia te nele.');
let maiusculo = palavra.toUpperCase();
let ingrediente = maiusculo.split('')
let cont = 0

for(i=0; i<palavra.length; i++){
	if(ingrediente[i]=='A'){
		cont+=1;
		
	}else if(ingrediente[i]=='E'){
		cont+=1;
		
	}else if(ingrediente[i]=='I'){
		cont+=1;
		
	}else if(ingrediente[i]=='O'){
		cont+=1;
		
	}else if(ingrediente[i]=='U'){
		cont+=1;
		
	}
}
alert(`Seu ingrediente tem ${cont} magiculas.`)