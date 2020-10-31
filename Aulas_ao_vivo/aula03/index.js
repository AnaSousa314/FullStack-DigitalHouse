//4- Desafio Criar uma função que adicione pets na nossa lista de pets, (adicionar elementos no array de objetos), testando no terminal
/*4.1 criar uma validação para certificar se realmente estamos
recebendo um objeto para cadastrar o pet, caso tenha sido informado como
parametro um objeto então iremos adicioná-lo, caso contrário, iremos 
exibir uma mensagem de erro "Informe um objeto válido para cadastrar um novo pet" */

/*4.2 Criar uma funcao de titulo validaDados que ira validar se o objeto passado como parâmetro
possui todas as propriedades necessárias, que são: nome, tipo, raca, idade, genero e vacinado 
(lembrando que devemos validar a propriedade vacinado para receber apenas valores booleanos - true or false)
 */

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

  function adicionaPets(nome,tipo,raca,idade,genero,vacinado){
      pets.push({nome,tipo,raca,idade,genero,vacinado});  
  }

  ///adicionaPets('Toby','cachorro','pastor',4,'Macho',true);

  //console.log(pets)

  //Resolução do Professor

  function cadastrarPet(objetoPet){
    
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

  function validaDados(objetoPet){
      return (
        typeof objetoPet.nome === 'string' && 
        typeof objetoPet.tipo === 'string' &&
        typeof objetoPet.raca === 'string' && 
        typeof objetoPet.idade === 'number' &&
        typeof objetoPet.genero === 'string' && 
        typeof objetoPet.vacinado === 'boolean')    
  }

  let novoPet = {  
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true 
  }

//   console.log(validaDados(novoPet))

  //novoPet = "Olá"

//  cadastrarPet(novoPet)


// CALLBACK

function calcular(numero1,numero2,operacao){
    operacao(numero1,numero2)
}

function soma(numero1,numero2){
    console.log(numero1 + numero2)
    console.log('A operação foi realizada com sucesso ')
}

function subtracao(numero1,numero2){
    console.log(numero1 - numero2)
    console.log('A operação foi realizada com sucesso')
}

function multiplicar(numero1,numero2){
    console.log(numero1 * numero2)
    console.log('A operação foi realizada com sucesso')
}

function divisao(numero1,numero2){
    console.log(numero1 / numero2)
    console.log('A operação foi realizada com sucesso')
}

calcular(10,20,soma);
calcular(30,20,subtracao);
calcular(10,20,multiplicar);
calcular(30,2,divisao);
  

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

//Texto do Professor
/* Desafio - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: 
dar banho no pet e tosar o pet
sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
servicosPrestados(pets[0].nome, darBanhoNoPet)
servicosPrestados(pets[0].nome, tosarPet)
Deveremos executar um aviso dentro das funcoes callback darBanhoNoPet e tosarPet, como o exemplo abaixo:
  console.log(O servico de tomar banho foi realizado com sucesso no pet + yoshi)
  console.log(O servico de tosa foi realizado com sucesso no pet  + yoshi)
Terá que ser criada uma nova propriedade dentro de cada pet chamada servicos que armazene todos servicos realizados */
