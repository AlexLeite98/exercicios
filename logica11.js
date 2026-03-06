//console.log(`${}`);
let opcao = prompt('[1] Contagem de 1 à 99, [2] Contagem so com números pares.');

if(opcao == '1'){
	for(i=1; i<=99; i++){
		console.log(i);
	}
}
if(opcao == '2'){
	for(i=0; i<=100; i=i+2){
		console.log(i)
	}
}