/**Simule um caixa eletrônico (depósito, saque, saldo).*/

let saldo = 500;

for(i=0; i==0; i++){
    let opcao = Number(prompt('[1]DEPOSITO, [2]SAQUE, [3]SALDO'))
    if(opcao==1){
        let deposito = Number(prompt('Quanto vc quer depositar?'));
        saldo += deposito;
    }else if(opcao==2){
        let saque = Number(prompt('Quanto deseja sacar?'))
        if(saque>saldo){
            alert('Vc não tem saldo suficiente!')
        }else{
            saldo -= saque
        }
    }else if(opcao==3){
        alert(`Seu saldo é de ${saldo.toFixed(2)}`)
    }
    let con = Number(prompt('[1]Continuar, [2]Encerrar'))
    if(con==1){
        i-=1
    }else if(con==2){
        console.log('ENCERRADO!')
    }
}