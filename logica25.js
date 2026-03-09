/** 🟠 MISSÃO 8 – O Inventário do Bruxo
📜 História:
Todo bruxo precisa controlar seu inventário.
🎯 Objetivo
Criar um sistema onde você pode:
Adicionar item
Remover item
Listar itens **/
//console.log(`${}`); \n

function add(x){
	bag.splice(0,0, x)
}

function remover(x){
	bag.splice(x,1);
}

let bag = [];
let itens = ['Espada', 'Poção', 'Bomba'];
for(i=0; i<1; i++){
	
	let opcao = Number(prompt(`O que vc deseja adcionar ao inventario? \n[1] ${itens[0]} \n[2] ${itens[1]} \n[3] ${itens[2]}`))
	if(opcao==1){
		add(itens[0])
	}else if(opcao==2){
		add(itens[1])
	}else if(opcao==3){
		add(itens[2])
	}
}
