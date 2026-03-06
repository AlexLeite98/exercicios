//console.log(`${}`);
let num = [0, 0, 0];
for(i=0;i<3;i++){
	num[i] = Number(prompt('Digitr o número'));
}
num.sort((a,b) => b-a);
for(i=0;i<3;i++){
	console.log(num[i])
}