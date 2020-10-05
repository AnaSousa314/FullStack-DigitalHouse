let frutas1 = ['banana','maca','jaca'];
let frutas2 = ['pera','uva','morango'];

let todasAsFrutas = [...frutas1,...frutas2];

//console.log(todasAsFrutas);

let curso = {
    curso: 'Fullstack',
    turno: 'Manha',
    sede: 'Sao Paulo'
}

let estudante = {
    nome: 'Ana',
    idade: 25
}

let estudante2 = {
    nome: 'Valéria',
    idade: 25,
    ...curso
}

//console.log(estudante2)

//Exemplo de Rest Parameter

/* function somar(...numeros){
    //Sabendo que os número agora são um array podemos usar o método reduce para obter a soma
    
    return numeros.reduce((pilha,num) => pilha += num);
}

console.log(somar(1,4)) ;
console.log(somar(13,6,8,12,23,37)); */

function naoPareDeContarImparesAte(numero){
    let count = 0;
    for (let i = 0; i <= numero; i++) {
        if(i%2 != 0){
            count++;
        }    
    }
    return count;
}




console.log(naoPareDeContarImparesAte(6));