let a = Number(prompt('Digite o número A!'));
let b = Number(prompt('Digite o número B!'));
let c = Number(prompt('Digite o número C!'));
let soma = a+b;

console.log(`${a}+${b} = ${soma}`);

if(soma < c){
	console.log(`A soma entre ${a} e ${b} é menor que ${c}`)
}