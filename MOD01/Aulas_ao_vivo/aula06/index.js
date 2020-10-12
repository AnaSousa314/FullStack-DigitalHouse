const json = require("./json");
//const resultado = require("./json");

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

//console.log(pets)
const listarPets = (pets) => {
    pets.forEach(pet => {
        console.log("Nome: " + pet.nome + "\n" + "Tipo:" + pet.tipo);
    });
    console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

//listarPets(pets);

const cadastrarPet = objetoPet =>{
    if (typeof objetoPet == "object") {
        if(validaDados(objetoPet) /* == true */) {

            pets.push(objetoPet);
            console.log(pets)
        }else{
            console.log('Falta dados')
        }

    }else{
        console.log("Informe um objeto válido para cadastrar um novo pet")
    }

}

const validaDados = (objetoPet)=>{
  return (
    typeof objetoPet.nome === 'string' && 
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' && 
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' && 
    typeof objetoPet.vacinado === 'boolean')    
}

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

let maisNovoPet = {
    id: nextId++, 
    nome: 'Mario',
    tipo: 'cachorro',
    raca: 'Lhasa Apso',
    idade: 2,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
}

let maisNovoPet2 = {
    id: nextId++, 
    nome: 'Felix',
    tipo: 'gato',
    raca: 'SRD',
    idade: 3,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
}
//cadastrarPet(novoPet)
//cadastrarPet(maisNovoPet)
//cadastrarPet(maisNovoPet2);
//console.log(nextId)


//Forma do Professor

const cadastrarPetsSpreadOperator = (pets, json) => {
  let arrayPetJson = JSON.parse(json);
  pets.push(...arrayPetJson);

  return pets;
}

//console.log(cadastrarPetsSpreadOperator(pets,json))

const cadastrarPetsForOperator = (pets, json) => {
  let arrayPetJson = JSON.parse(json);

arrayPetJson.forEach(element => {
    pets.push(element)
});

  return pets;
}

//console.log(cadastrarPetsForOperator(pets,json))

const filtrarPetPorNome = (pets, nome) => {
  let newPets = pets.filter((item) => {
    return item.nome === nome;
  });

  if (newPets.length > 0) {
    return newPets;
  } else {
    return "Não foi encontrado " + nome;
  }
}

const removerPet = (id,lista) => {
   let remover = lista.filter((item)=>{
        return item.id == id;
    })
    if (remover.length > 0) {
        pets.splice(id - 1, 1)
        console.log(pets)
    } else {
        console.log("Nao encontramos nenhum pet com o id " + id)
    }
}

//removerPet(0,pets)

/* Ideia de um coleguinha 
const alterarPet = (lista, nomePet) =>{
    let petsFiltrados = lista.filter((pet) => {
      return pet.nome == nomePet
    });    
     return petsFiltrados.map((item) => ({ ...item, nome: 'PetBlue', idade: 1 }));      
  }
  
  console.log(alterarPet(pets, 'Yoshi')); 
 */

/* Desafio - Fazer uma forma de cadastrarPet acrescentando o id automaticamente*/

/* CRUD
  Create = Criar
  Read = Ler
  Update = Atualizar
  Delete = Remover
*/

const atualizarPet = (id,lista) =>{
    let petAtualizado = lista.filter((item)=>{
      return item.id == id;
    }).map((item)=>(
      
      pets[id] = {...item,raca:"Lhasa Apso"}));
      
    console.log(petAtualizado);
    console.log("\n")
    console.log(pets)
}

atualizarPet(0,pets);
