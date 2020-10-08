const json = require("./json");
//const resultado = require("./json");

let nextId = 0;
let pets = [
/*   {
    nome: "Yoshi",
    tipo: "cachorro",
    raca: "Akita inu",
    idade: 6,
    genero: "Masculino",
    vacinado: true,
    servicos: [],
  }, */
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
    // for (let i = 0; i < pets.length; i++) {
    //     console.log("Nome: " + pets[i].nome + "\n" + "Tipo:" + pets[i].tipo);
    // }

    pets.forEach(pet => {
        console.log("Nome: " + pet.nome + "\n" + "Tipo:" + pet.tipo);
    });
    console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

//listarPets(pets);

const cadastrarPet = objetoPet =>{
    /*quando só se usa um parametro, pode tirar os parenteses*/
    if (typeof objetoPet == "object") {
        if(validaDados(objetoPet) /* == true */) {
            //const valida = validaDados(objetoPet)
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
cadastrarPet(maisNovoPet2);
console.log(nextId)

const servicosPrestados = (pet, servicoRealizado)=> {
  servicoRealizado(pet);
}

const darBanhoNoPet = (pet)=> {
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

const tosarPet = (pet) => {
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

//servicosPrestados(pets[0], darBanhoNoPet);
//servicosPrestados(pets[0], tosarPet);
//console.log(pets); 

//const jsons = JSON.parse(resultado);
//console.log(json)

//pets.push(...jsons);
//console.log(jsons)

//Forma do Professor

const cadastrarPetsSpreadOperator = (pets, json) => {
  let arrayPetJson = JSON.parse(json);
  pets.push(...arrayPetJson);

  return pets;
}

//console.log(cadastrarPetsSpreadOperator(pets,json))

const cadastrarPetsForOperator = (pets, json) => {
  let arrayPetJson = JSON.parse(json);
//   for (let i = 0; i < arrayPetJson.length; i++) {
//     pets.push(arrayPetJson[i]);
//   }

arrayPetJson.forEach(element => {
    pets.push(element)
});

  return pets;
}

//console.log(cadastrarPetsForOperator(pets,json))

const cadastrarPetsForInOperator = (pets, json) => {
  let arrayPetJson = JSON.parse(json);
  for (let propiedade in arrayPetJson) {
    pets.push(arrayPetJson[propiedade]);
  }

  return pets;
}

//console.log(cadastrarPetsForInOperator(pets,json));

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

//console.log(filtrarPetPorNome(pets,'Yoshi'))

//Forma do Professor
// const filtrarPetPorNome = (lista, nomePet) => {
//   let petsFiltrados = lista.filter((pet) => {
//     return pet.nome == nomePet;
//   });

//   if (petsFiltrados.length > 0) {
//     return petsFiltrados;
//   } else {
//     return "Nenhum pet encontrado com o nome " + nomePet;
//   }
// }

//console.log(filtrarPetPorNome(pets, "Yoshi"));

/* Desafio 01- Temos 1000 pets e nossa empresa pretende criar uma campanha de vacinação, porem, precisamos atingir apenas pets que ainda não foram vacinados, para isso teremos que efetuar uma contagem de quantos pets ja estao vacinados e quantos pets ainda precisam ser vacinaods

Por exemplo: Pense que temos 700 animais vacinados e 300 nao vacinados, logo o foco da nossa campanha seria atingir apenas os 300 animais que ainda nao foram vacinados maaaas, fiquem tranquilos. Por enquanto, iremos apenas focar na contagem de vacinados e nao vacinados.
*/

const vacinadosNaoVacinados = (pets) => {

    let countVacinados = 0;
    let countNaoVacinados = 0;
    pets.filter((item)=> {
        if (item.vacinado==true) {
            countVacinados++
        } else {
            countNaoVacinados++;
        }
    })

   /* for(let i=0; i<pets.length; i++){
         if (pets[i].vacinado == true) {
            countVacinados++
        } else {
            countNaoVacinados++
        }
    } */
    //console.log("Estão vacinados "+countVacinados+". Não estão vacinados "+countNaoVacinados);

    return `Estão vacinados ${countVacinados}. Não estão vacinados ${countNaoVacinados}`
}

//vacinadosNaoVacinados(pets)
//console.log(vacinadosNaoVacinados(pets));

//Forma interessante feita baseada no dos colegas
const contar = (pets) => {
    let vac = 0;
    let nvac = 0;

    pets.filter((item)=> {
        item.vacinado == true ? vac++ : nvac++
    })

    console.log(`Vacinados: ${vac}.\nNão vacinados: ${nvac}`)

}

//contar(pets)

/* Criar uma funcao removerPet que ao receber dois parametros (sendo o primeiro o ID do pet, e, o segundo 
a lista na qual queremos remover um pet). Deveremos reconhecer o pet e excluí-lo, caso o ID passado, não
seja encontrado na lista de pets, iremos retornar uma mensagem do tipo: "Nao encontramos nenhum pet com o id " + idPet
 */

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

