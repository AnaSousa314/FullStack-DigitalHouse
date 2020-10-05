let pessoa = ['Ana',1.65,'Ana'];

//.push()  ### Push serve para inserir elementos no final do array 
pessoa.push(25,1.65);
console.log(pessoa);

//.pop()  ### Pop para retirar elementos no final do array
//pessoa.pop();
let excluido = pessoa.pop()
console.log(pessoa);
console.log(excluido)

//.unshift()  ### Unshift para inserir elementos no inicio do array 
pessoa.unshift(25);
console.log(pessoa)

//.shift()  ### Shift para retirar elementos do inicio do array 
pessoa.shift();
console.log(pessoa)

//.indexOf()  ### Para perguntar o indice de ocorrencia de um elemento percorrendo a partir do indice 0, e retornando o primeiro que atender o perguntado
console.log(pessoa.indexOf(1.65))
console.log(pessoa.indexOf('ana'))
console.log(pessoa.indexOf('Ana'))

//.lastIndexOf()  ### Para perguntar o indice de ocorrencia de um elemento percorrendo a partir do indice final, e retornando o primeiro que atender o perguntado
console.log(pessoa.lastIndexOf('Ana'))

//.join()  ### Join para unir todos os elementos presentes no array retornando uma string, pode ser a vígula por default, ou outro separador especificado dentro do join.
console.log(pessoa.join())
console.log(pessoa.join(' - '))

//.includes()  ### Recebe um item para pesquisar no array e retorna verdadeiro(true) se for encontrado e falso(false) se não for encontrado
console.log(pessoa.includes(1.65))
console.log(pessoa.includes(1.80))


//EXEC. 01
let alunos = ["João", "Pedro", "Jorge", "Francisco"]

let indiceJoao = alunos.indexOf('João');
console.log(indiceJoao)

let indiceFrancisco = alunos.indexOf('Francisco');
console.log(indiceFrancisco)

//EXEC. 02
let arrayFrase = ["Não","fracassei,","simplesmente","encontrei","dez","mil","soluções","equivocadas"];

let fraseNova = arrayFrase.join(" ")

console.log(fraseNova)

//EXEC. 03
let estudantes = [
    {
      nome: "Álvaro",
      media: 9,
      curso: "Android"
    },
    {
      nome: "Daniel",
      media: 6,
      curso: "Full Stack"
    },
    {
      nome: "Alexis",
      media: 3,
      curso: "iOS"
    }
  ];

  let alunoFormado = estudantes.pop();
  console.log(alunoFormado)


  //EXEC. 04

  //Poderia ser feito em um único push, mas a atividade exige que seja feito em dois
  estudantes.push({nome:'João',media:5,curso:'iOS'});
  estudantes.push({nome:'Miguel',media:2,curso:'Android'})

  console.log(estudantes);

  //EXEC. 05
  let alunoDesistente = estudantes.shift();
  console.log(alunoDesistente)

  //EXEC. 06
  estudantes.unshift({nome:'Mariana',media:9,curso:'Full Stack'})
  estudantes.unshift({nome:'Francisco',media:2,curso:'Android'})
  
  console.log(estudantes)


  //link para consulta => documentação da função .indexOf no link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf