const listarPets = (pets) => {
    pets.forEach(pet => {
        console.log("Nome: " + pet.nome + "\n" + "Tipo:" + pet.tipo);
    });
    console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

const cadastrarPet = objetoPet =>{
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
  }
  
const tosarPet = (pet) => {
    let data = new Date();
    pet.servicos.push(
      `Tosado na data ${data.getDate()}/${
        data.getMonth() + 1
      }/${data.getFullYear()}`
    );
    console.log("O pet " + pet.nome + " foi tosado");
  }
  
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
  
      return `Estão vacinados ${countVacinados}. Não estão vacinados ${countNaoVacinados}`
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

 const atualizarPet = (id,lista) =>{
    let petAtualizado = lista.filter((item)=>{
      return item.id == id;
    }).map((item)=>(
      
      pets[id] = {...item,raca:"Lhasa Apso"}));
      
    console.log(petAtualizado);
    console.log("\n")
    console.log(pets)
}

module.exports = {
    listarPets,
    cadastrarPet,
    servicosPrestados,
    filtrarPetPorNome,
    vacinadosNaoVacinados,
    removerPet,
    atualizarPet
}