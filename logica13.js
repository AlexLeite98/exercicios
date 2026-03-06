//console.log(`${}`);
let a = [0];
media = 0

for(i=0; i<5; i++){
	a[i]= Number(prompt('digite um numero'));
	media = media+a[i]
}
a.sort((a,b) => a-b)
console.log(`${a[0]} ${a[1]} ${a[2]} ${a[3]} ${a[4]}`);
console.log(`o menor número é ${a[0]}, o maior é ${a[4]} e a media desses números é ${media/5}`);