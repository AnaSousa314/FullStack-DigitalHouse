function ePar(numero){
    return numero % 2 === 0 ;
}

// console.log(ePar(4))

function anterior(numero){
    return numero - 1;
}

function triplo(numero){
    return numero * 3;
}

function anteriorDoTriplo(numero){
    let resultado = triplo(numero);
    let resultado1 =  anterior(resultado)
    return resultado1
}

console.log(anteriorDoTriplo(4));