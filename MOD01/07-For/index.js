
//EXEC. 01

function papagaio(repete){
    for(let i = 0; i<5; i++){
        console.log(repete)
    }
}

papagaio('ouve')

// for(let i = 1; i<=5; i++){
//     //console.log(repete)
//     console.log(i)
// }

//EXEC. 02

//Minha forma de fazer está certa mas o playground não aceita
function naoPareDeContarImparesAte(numero){
    let count = 0
    for (let i = 0; i < numero; i++) {
        if (i%2 != 0) {
            count++
        }
    }
    return count
}

console.log(naoPareDeContarImparesAte(5));

//Minha forma de fazer alterada com consultas, funciona no playground

function naoPareDeContarImparesAte(numero){
    let impares = []
    for (let i = 0; i < numero; i++) {
        if (i%2 > 0) {
            impares.push(i)
        }
    }
     return impares.length
}

console.log(naoPareDeContarImparesAte(5))
