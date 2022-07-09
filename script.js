function calculateSalary (salarioFixo, valorDasVendas){
    let salarioTotal = 0
    if (valorDasVendas <= 1200){
        
        salarioTotal = salarioFixo + (valorDasVendas*3)/100
    }
    else{

        salarioTotal = salarioFixo + 1200*3/100 + (valorDasVendas-1200)*5/100
    }
    return salarioTotal
}

function cashMachine(saque, salarioFixo, valorDasVendas){
    
    let salarioTotal = 0
    salarioTotal = calculateSalary(salarioFixo,valorDasVendas)
    saldoAtual = salarioTotal - saque
    
    let nota200 = 0
    let nota100 = 0
    let nota50 = 0
    let nota20 = 0
    let nota10 = 0
    let nota5 = 0
    let nota2 = 0

    for (let i = 200; i <=  saque; i += 200){
        nota200 = nota200 + 1
    
    }
    
    saque = saque - nota200 * 200
    
    for (let j = 100; j <= saque; j += 100){
        nota100 = nota100 + 1
    
    }
    
    saque = saque - nota100 * 100
    
    for (let k = 50; k <= saque; k += 50){
        nota50 = nota50 + 1
    
    }
    
    saque = saque - nota50 * 50
    
    for (let l = 20; l <= saque; l += 20){
        nota20 = nota20 + 1
    }
    
    saque = saque - nota20 * 20

    for (let x = 10; x <= saque; x += 10){
        nota10 = nota10 + 1
    }
    
    saque = saque - nota10 * 10

    for (let y = 5; y <= saque; y += 5){
        nota5 = nota5 + 1
    }
    
    saque = saque - nota5 * 5

    for (let z = 2; z <= saque; z += 2){
        nota2 = nota2 + 1
    }
    
    saque = saque - nota2 * 2

    return `Notas sacadas: ${nota200} notas de R$200, ${nota100} notas de R$100, ${nota50} notas de R$50, ${nota20} notas de R$20, ${nota10} notas de R$10, ${nota5} notas de R$5, ${nota2} notas de R$2. Saldo atual ${saldoAtual}.`
}

function calculateStock(atual, max, min){
    qntdMedia = (max + min)/2
    if (atual >= qntdMedia){
        
        return ' Não efetuar compra'
    }
    else{

        return 'Efetuar compra'
    }
}

function calculateAge(anoDeNascimento, anoAtual){
    
    let anos = anoAtual - anoDeNascimento
    let meses = anos * 12
    let dias = anos * 365
    let semanas = anos * 52

    return `idade em anos: ${anos} anos, idade em meses: ${meses} meses, idade em dias: ${dias} dias, idade em semanas: ${semanas} semanas`
}

function getDiagonal(matriz){

    let resp = []

    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            
            if( i == j ){

                resp.push(matriz[i][j])
            }
        }
    }

    return resp
}