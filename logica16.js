 /**Verifique se uma palavra é palíndromo.
Ex: "arara**/
function pali(c){
	let a = c.toUpperCase()
	let b = a.split('');
	let cont = b.length;
	let investida = '';
	for(i=cont-1; i>=0; i--){
		investida += b[i]
	}
	if(a==investida){
		return console.log(`A palavra ${a} ao contrario é ${investida} portanto é um palíndromo`);
	}else return console.log(`A palavra ${a} ao contrario é ${investida} por tanto não é um palíndromo`);
}
let palavra = prompt('Digite uma palavra para saber se ela é um palíndromo.');

pali(palavra)
