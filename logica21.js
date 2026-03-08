//console.log(`${}`); \n
//DADOS (d4, d6, d8, d12, d20)

for(i=0; i<2; i++){
	let dado = Number(prompt('Qual dado vc quer jogar?\n[1] - d4 \n[2] - d6 \n[3] - d8 \n[4] - d12 \n[5] - d20'));
	
	if(dado==1){
		for(i=0; i<1; i++){
			let d4 = Math.floor(Math.random() * (4-1 + 1)+ 1);
			alert(d4)
		}
	}
}