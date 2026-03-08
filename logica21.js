//console.log(`${}`); \n
//DADOS (d4, d6, d8, d12, d20)

for(i=0; i<2; i++){
	i-= 1
	let dado = Number(prompt('Qual dado vc quer jogar?\n[1] - d4 \n[2] - d6 \n[3] - d8 \n[4] - d12 \n[5] - d20 \n[6] - Finalizar'));
	
	if(dado==1){
		let d4 = Math.floor(Math.random()*(4-1 + 1)+1);
		alert(d4);
		
	}else if(dado==2){
		let d6 = Math.floor(Math.random()*(6-1 + 1)+1);
		alert(d6);
		
	}else if(dado==3){
		let d8 = Math.floor(Math.random()*(8-1 + 1)+1);
		alert(d8);
		
	}else if(dado==4){
		let d12 = Math.floor(Math.random()*(12-1 + 1)+1);
		alert(d12);
		
	}else if(dado==5){
		let d20 = Math.floor(Math.random()*(20-1 + 1)+1);
		alert(d20);
		
	}else if(dado==6){
		i+=2
	}
}