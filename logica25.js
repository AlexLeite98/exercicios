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

