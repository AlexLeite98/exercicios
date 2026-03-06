//console.log(`${}`);

let pagamento = Number(prompt('PAGAMENTO'));
let opcao = prompt('Forma de pagamento [1]Dinheiro, [2]Credito a vista, [3]Parcelado 2x, [4]Parcelado com juros.');

let porce15 = pagamento*15/100;
let porce10 = pagamento*10/100;
let parcel2x = pagamento/2;

if(opcao=='1'){
	console.log(`O valor com desconto de 15% é de ${pagamento - porce15}`);
}else if(opcao=='2'){
	console.log(`O valor com desconto de 10% é de ${pagamento - porce10}`);
}else if(opcao=='3'){
	console.log(`O valo parcelado em 2x fica de ${pagamento} em duas vezes de ${parcel2x.toFixed(2)}`);
}else if(opcao=='4'){
	console.log(`O valor parcelado fica de ${pagamento + porce10}`);
}