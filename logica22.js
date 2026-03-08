/** 🟢 MISSÃO 6 – O Cofre do Ferreiro
📜 História: 
Um ferreiro esqueceu a senha do seu cofre. 
🎯 Objetivo 
Criar um sistema onde: 
A senha correta é "1234" 
O usuário tem 3 tentativas
Se acertar → "Cofre aberto"
Se errar 3 vezes → "Cofre bloqueado" **/
//console.log(`${}`); \n

const senha = '1234';
let cont = 0;

for(i=0; i<=3; i++){
	let cofre = prompt('Digite a senha do cofre.');
	
	if(cofre==senha){
		let aberto = alert('Cofre aberto!');
		
	}else if(i==2){
		
	}
}