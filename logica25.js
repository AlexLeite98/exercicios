/** 🟠 MISSÃO 8 – O Inventário do Bruxo
📜 História:
Todo bruxo precisa controlar seu inventário.
🎯 Objetivo
Criar um sistema onde você pode:
Adicionar item
Remover item
Listar itens **/
//console.log(`${}`); \n

let bag = ['Espada de prata', 'Poção'];
let itens = ['Espada de Aço', 'Bomba', 'Espada de Prata', 'Cela de Cavalo', 'Poção'];

for(i=0; i<1; i++){
	let opcao = Number(prompt('Vc deseja adicionar ou remover intens ao seu inventario? \n[1] Adicionar \n[2] Remover \n[3] Sair'));
	
	if(opcao==1){
		let add = Number(prompt(`O que vc deseja adicionar \n[1] ${itens[0]} \n[2] ${itens[1]} \n[3] ${itens[2]} \n[4] ${itens[3]} \n[5] ${itens[4]}`));
		
		if(add==1){
			bag.splice(0,0, itens[0]);

		}else if(add==2){
			bag.splice(0,0, itens[1]);
			
		}else if(add==3){
			bag.splice(0,0, itens[2]);
			
		}else if(add==4){
			bag.splice(0,0, itens[3]);
			
		}else if(add==5){
			bag.splice(0,0, itens[4]);
			
		}
	}
}