//Dsestruturação de Objetos
//Ela não modifica o array ou objeto literal de origem
let pessoa = {
    nome: 'Ana',
    altura: 1.65
}

let {nome,altura: comprimento} = pessoa; //caso precisemos alterar o nome da propiedade, colocamos o seu nome : e o novo nome que queremos que ela tenha 
console.log(nome)
console.log(/* altura */comprimento);


//Desestruturação de Arrays
let listaCompras = ['pao','leite','açucar'];

const [item1, ,item3] = listaCompras;//podemos deixar vazia a posição que não precisamos, se a deixarmos vazia entre vírgulas dará erro
console.log(item3)


//EXEC. 01
let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

const [ ,bariloche, ,china, ] = destinosIncriveis;
console.log(bariloche)
console.log(china)

//O meu está correto, mas o playground só aceitou assim 
let [, bariloche,,china,] = destinosIncriveis;

console.log(bariloche + " - " + china)


// link para consulta => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao