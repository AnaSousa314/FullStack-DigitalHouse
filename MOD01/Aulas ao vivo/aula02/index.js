let array = ['Leao', 'Cavalo', 'Cachorro'];

for (let i = 0; i < array.length; i++) {
  console.log(i +" - " +array[i]);
}

//OU
for(let j of array){
    console.log(j)
}
  

let objeto = {
    nome: 'Ana',
    idade: 'Segredo'
}

for (const i in objeto) {
    console.log("Propiedade " + i + " valor da propiedade " + objeto[i])
}


let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false
    }
  ];
  


  /* Desafio 3 - Criar uma função que percorra a lista de pets e
listar a seguinte mensagem para cada pet "Nome: nome Do Pet" 
e também uma mensagem para o tipo para cada pet "Tipo: tipo Do Pet"
E por fim, retornar uma mensagem contendo a quantidade total de pets cadastrados no nosso sistema
 */

function listarPets() {
    for (let i = 0; i < pets.length; i++) {
        console.log("Nome: " + pets[i].nome + "\n" + "Tipo:" + pets[i].tipo);
    }
    console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

listarPets(pets);

  
//Desafio Criar uma função que adicione pets na nossa lista de pets, (adicionar elementos no array de objetos), testando no terminal
//Próxima  Aula
