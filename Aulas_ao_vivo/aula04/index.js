const json = require("./json");
const resultado = require("./json");


/* 
  5 - Desafio -- Criar uma função Callback chamada servicosPrestados que tenha como dois servoços:
    a) Dar banho no pet  
    b) Tosar o pet

    Sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um serviço que aquele pet ira utilizar 

    Cada Callback pode ter um simples console.log("O serviço de banho foi realizado com sucesso no pet " + nomeDoPet)

    Terá que ser criada uma propiedade nove chamda servicos que armazene todos os serviços feitos no pet

    exemplo
    {  
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: [] 
    }

    servicosPrestados(pets[0].nome, darBanhoNoPet)
   */
let pets = [
  {
    nome: "Yoshi",
    tipo: "cachorro",
    raca: "Akita inu",
    idade: 6,
    genero: "Masculino",
    vacinado: true,
    servicos: [],
  },
  {
    nome: "Yoshi",
    tipo: "cachorro",
    raca: "Akita inu",
    idade: 6,
    genero: "Masculino",
    vacinado: true,
    servicos: [],
  },
  {
    nome: "Pituco",
    tipo: "pássaro",
    raca: "calopsita",
    idade: 3,
    genero: "Fêmea",
    vacinado: false,
    servicos: [],
  },
];

function servicosPrestados(pet, servicoRealizado) {
  servicoRealizado(pet);
}

function darBanhoNoPet(pet) {
  //pet.servicos.push('banho');
  let data = new Date();

  pet.servicos.push(
    "Banho na data " +
      data.getDate() +
      "/" +
      (data.getMonth() + 1) +
      "/" +
      data.getFullYear()
  );

  console.log("O pet " + pet.nome + " tomou banho");
  // console.log(pets)
}

function tosarPet(pet) {
  //pet.servicos.push('banho');
  let data = new Date();

  // pet.servicos.push('Tosado na data ' + data.getDate() + '/' + (data.getMonth()+1)+'/'+data.getFullYear());

  pet.servicos.push(
    `Tosado na data ${data.getDate()}/${
      data.getMonth() + 1
    }/${data.getFullYear()}`
  );

  // pet.servicos.push(data)

  console.log("O pet " + pet.nome + " foi tosado");
  // console.log(pets)
}

servicosPrestados(pets[0], darBanhoNoPet);
servicosPrestados(pets[0], tosarPet);
console.log(pets); 

/* Desafio 01 -  Identificar qual a data que o serviço foi realizado*/
//Respondido no código acima

/* Desafio 02 - 
// Desafio - criar uma funcao que adicione todos esses pets da lista que esta contida na constante json 
// dentro da nossa lista de pets que e a variavel pets 
// lembrando que: nao precisa ter validacao de dados ta galera, por qual motivo ? 
// No json nao temos as propriedades vacinado, servicos
// dica : utilizar JSON.parse na sua string json para transformá-la em um array de objetos válidos
*/

const jsons = JSON.parse(resultado);
//console.log(json)

pets.push(...jsons);
console.log(jsons)

//Forma do Professor

function cadastrarPetsSpreadOperator(pets, json) {
  let arrayPetJson = JSON.parse(json);
  pets.push(...arrayPetJson);

  return pets;
}

//console.log(cadastrarPetsSpreadOperator(pets,json))

function cadastrarPetsForOperator(pets, json) {
  let arrayPetJson = JSON.parse(json);
  for (let i = 0; i < arrayPetJson.length; i++) {
    pets.push(arrayPetJson[i]);
  }

  return pets;
}

//console.log(cadastrarPetsForOperator(pets,json))

function cadastrarPetsForInOperator(pets, json) {
  let arrayPetJson = JSON.parse(json);
  for (let propiedade in arrayPetJson) {
    pets.push(arrayPetJson[propiedade]);
  }

  return pets;
}

//console.log(cadastrarPetsForInOperator(pets,json));

/* 
  Desafio 03 - Crie uma função filtrarPetPorNome, que quando receber um parâmetro que será uma string
irá filtrar um pet por nome e retorná-lo e senão irá retornar que não existe o pet na lista
 */

function filtrarPetPorNome(pets, nome) {
  let newPets = pets.filter((item) => {
    return item.nome === nome;
  });

  if (newPets.length > 0) {
    return newPets;
  } else {
    return "Não foi encontrado " + nome;
  }
}

console.log(filtrarPetPorNome(pets,'Yoshi'))

//Forma do Professor

function filtrarPetPorNome(lista, nomePet) {
  let petsFiltrados = lista.filter((pet) => {
    return pet.nome == nomePet;
  });

  if (petsFiltrados.length > 0) {
    return petsFiltrados;
  } else {
    return "Nenhum pet encontrado com o nome " + nomePet;
  }
}

console.log(filtrarPetPorNome(pets, "Yoshi"));
