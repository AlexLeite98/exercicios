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

for(i=0; i<1; i++){
	i-=1;
	let cofre = prompt('Digite a senha do cofre.');
	cont+=1;
	
	if(cofre==senha){
		alert('Cofre aberto!');
		i+=1;
		
	}else if(cont==3){
		alert('Cofre bloqueado!');
		i+=1;
	}
}