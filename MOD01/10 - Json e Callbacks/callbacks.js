//É uma função que passa outra função como parametro

const soma = ( numA,numB) => numA + numB;

const calculador = (numA,numB, operacao) => operacao(numA,numB)

console.log(calculador(10,20,soma))

//OU

console.log(calculador(10,20,(numA,numB)=> numA-numB))

//EXEC. 01

function dobro(num){ return num * 2};

function triplo(num){return num * 3};

function aplicar (valor, callback){return callback (valor)};

console.log(aplicar(2,dobro));
console.log(aplicar(4,triplo));

//EXEC. 02

function somar(num1,num2){ return num1+num2}
function subtrair(num1,num2){ return num1-num2}
function multiplicar(num1,num2){ return num1*num2}
function dividir(num1,num2){ return num1/num2}

function calculadora(num1,num2,callback){return callback(num1,num2)}

console.log(calculadora(5,2,subtrair));

//EXEC. 03

//Minha forma de fazer que deu certo, mas o playground não aceita
function adicionarHttp(url) {
    return "http://"+url
}

function processa(callback,...sites){
    let array = []
    
    for(let i=0; i<sites.length;i++){
        array.push(callback(sites[i]))
    }
    return array
}

console.log(processa(adicionarHttp,"www.google.com","www.yahoo.com"))

//Alterações na minha forma de fazer, de acordo com a galera, que o playground aceita. alterado somente a segunda função

function processar(sites,callback){
    let array = []
    
    for(let i=0; i<sites.length;i++){
        array.push(callback(sites[i]))
    }
    return array
}

console.log(processar(["www.google.com","www.yahoo.com"],adicionarHttp))


