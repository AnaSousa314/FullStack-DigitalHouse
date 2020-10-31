const json = require("./json");
const funcoesPet = require('./funcoes-pets')


let nextId = 0;
let pets = [
  {
    id: nextId++,
    nome: "Yoshi",
    tipo: "cachorro",
    raca: "Akita inu",
    idade: 6,
    genero: "Masculino",
    vacinado: true,
    servicos: [],
  },
  {
    id: nextId++,
    nome: "Pituco",
    tipo: "pássaro",
    raca: "calopsita",
    idade: 3,
    genero: "Fêmea",
    vacinado: false,
    servicos: [],
  },
];

let novoPet = { 
  id: nextId++, 
  nome: 'Luigi',
  tipo: 'cachorro',
  raca: 'Lhasa Apso',
  idade: 2,
  genero: 'Masculino',
  vacinado: true,
  servicos: []
  }

//listarPets(pets)
// return
//ESSE RETURN ACIMA SERVE PARA PARAR TODA A EXECUÇÃO ABAIXO

funcoesPet.cadastrarPet(novoPet);
return

