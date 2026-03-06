//console.log(`${}`);
let peso = Number(prompt('Diga qual é o seu peso em kg'));
let altura = Number(prompt('Agora diga a sua altura em metros'));
let imc = peso/(altura*altura);

if(imc<=18.5){
	console.log(` Seu IMC é ${imc.toFixed(2)} vc está abaixo do peso`);
}else if(imc<=24.9){
	console.log(` Seu IMC é ${imc.toFixed(2)} vc está no peso ideal`);
}else if(imc<=29.9){
	console.log(` Seu IMC é ${imc.toFixed(2)} vc está levemente acima do peso`);
}else if(imc<=34.9){
	console.log(` Seu IMC é ${imc.toFixed(2)} vc está com Obesidade grau I`);
}else if(imc<=39.9){
	console.log(` Seu IMC é ${imc.toFixed(2)} vc está com Obesidade grau II (severa)`);
}else if(imc>=40){
	console.log(` Seu IMC é ${imc.toFixed(2)} vc está com Obesidade grau III (mórbida)`);
}