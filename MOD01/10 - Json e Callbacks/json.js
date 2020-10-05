/* JSON = JavaScript Object Notation */

let pessoa = {
    nome: "Ana",
    idade: 25,
    altura: 1.65
}

let json = JSON.stringify(pessoa);//Transforma em String, ou seja, vira um texto.
// console.log(json);

let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo)

