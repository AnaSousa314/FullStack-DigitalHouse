let carro = {
    nome: 'Fox',
    ano: '2011'
}

//for/in   ### Permite iterar em cada uma das propiedades do objeto => for(var iterador in objeto)
for(let propiedade in carro){
    console.log(propiedade)//retorna o nome do atributo
    console.log(carro[propiedade])//retorna o valor do atributo
    console.log(propiedade, carro[propiedade])//retorna o nome e o valor do atributo/propiedade
}

//for/of  ###Permite iterar sobre cada um dos valores de um elemento iterável => for(var variavel of elementoIteravel)
let series = ['Friends', 'Flash', 'Away']
for(let valor of series){
    console.log(valor)
}

/* OBS.: 
                      |   FOR IN    |   FOR OF   |  
                      | Propiedades |  Elementos | 
    Aplicar a         | Enumerveis  | Iteráveis  |
----------------------|-------------|------------|
Eu o uso com objetos? |      ✓      |     X      |  
----------------------|-------------|------------|
Eu o uso com Matrizes?|      X      |     ✓      |
----------------------|-------------|------------|
Eu o uso com Strings? |      X      |     ✓      |
----------------------|-------------|------------|
*/


//EXEC. 01
let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for(propiedade in bart){
    console.log(bart[propiedade])
}

//EXEC. 02
let frase = "Essa semana vou no colearning";

for(valor of frase){
    console.log(valor)
}//Serve para percorrer Strings, como descrito nom quadro