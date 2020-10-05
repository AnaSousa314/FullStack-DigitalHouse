/* function count(inicio, fim) {
    //Escreva seu código aqui
    while(inicio < fim){
        inicio ++;
        console.log("O número atual é "+inicio+" e é menor que" + fim)
    }
}

count(4,6) */

/* Exercício: encontre o 5
Queremos construir uma função que receba um array de números como parâmetro. A função deve passar por esse array e imprimir cada um dos números pelo console. Se você encontrar um 5, deverá parar a execução e imprimir com console o texto "Encontramos um 5!".
Para resolver este exercício, você DEVE usar o do-while. */

/* function encontreUm5(numeros){
    let i = 0
    do {
        i++;
        if(numeros[i]===5){
            console.log("Encontramos um 5!")
        }
        //console.log(numeros[i])
    } while (numeros[i]<=5);
}

encontreUm5([1,2,3,4,5]) */

/* Exercício: criando a tabela de multiplicação
Vamos criar uma função e atribuí-la a uma variável!
Para este exercício, oferecemos a função tabelaDeMultiplicacao já definida, que recebe um número como parâmetro. Queremos que a função mostre a tabela de multiplicação de 1 a 10 do número que recebe quando a função é executada.
Por exemplo, se o número que passarmos por parâmetro for 5, a função deverá imprimir:

5 * 1 = 5
5 * 2 = 10

5 * 3 = 15

...

até chegar ao 10. */

function tabelaDeMultiplicacao(numero) {
    let i = 0;
    let resultado = 0;
    while (i<=9) {
        i++;
        resultado = numero * i;
        console.log(numero + " * " + i +" = " +resultado);
    }
}

tabelaDeMultiplicacao(5);