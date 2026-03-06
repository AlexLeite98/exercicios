//console.log(`${}`);
let nota1 = Number(prompt('Nota número 1'));
let nota2 = Number(prompt('Nota número 2'));
let nota3 = Number(prompt('Nota número 3'));

let media = (nota1+nota2+nota3)/3;

if(media<=7){
	console.log(`Vc não atingio a média sua nota é ${media.toFixed(2)}`);
}else{console.log(`APROVADO!! Sua nota foi ${media.toFixed(2)}`);}