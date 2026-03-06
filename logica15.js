
function exemplo(a){
	let m = a.toUpperCase()
	let array = m.split('')
	return array
}

let vogais = ['A', 'E', 'I', 'O', 'U'];
let palavra = prompt('Digite uma palavra para ve quantas vogais ela tem, evite acentuações');
let quant = palavra.length
let teste = exemplo(palavra)
let cont = 0

for(i=0; i<quant; i++){
	if(teste[i]=='A'){
		cont+=1;
	}else if(teste[i]=='E'){
		cont+=1;
	}else if(teste[i]=='I'){
		cont+=1;
	}else if(teste[i]=='O'){
		cont+=1;
	}else if(teste[i]=='U'){
		cont+=1;
	}
}
console.log(`A palavra tem ${cont} vogais`);