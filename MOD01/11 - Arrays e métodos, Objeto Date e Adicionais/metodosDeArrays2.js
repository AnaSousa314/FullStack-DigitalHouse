let numerosPares = [2,4,6,8,10];

//.map()  ### Recebe uma função como parametro (callback), percorre o array e retorna um array novo modificado. Definimos quais modificações queremos dentro da função
let numerosParesDobro = numerosPares.map(function(valor){
  //console.log(valor * 2) //dessa forma ele só imprime os valores dobrados
  return(valor * 2);
});

console.log(numerosParesDobro)//eleretorna um array


//.filter()  ### Percorre o array filtrando os elementos de acordo com a função especificada na função, e retorna um novo array somente com os dados que atendem as condições estabelecidas
let numerosFiltrados = numerosPares.filter(function(valor){
  //return valor < 6;
  return valor > 10;

});
console.log(numerosFiltrados)


//.reduce()  ### Percorre o array e retorna um unico valor. Recebe uma chamada de retorno que executara em cada eolemento do array. Ele, por sua vez, recebe dois parametros: um acumulador e um elemento corrente pelo qual está passando
let somaPares = numerosPares.reduce(function(acum,valor){
  return acum + valor
}/* ,valorInicial:numero, ex.: 2 */)

console.log(somaPares)


//.forEach()  ### Seu objetivo é iterar sobre o array. Ele recebe um retorno de chamada como parametro e, ao contrario dos métodos anteriores, não retorna nada

numerosPares.forEach(function(valor,indice){
  console.log("O indice " + indice + " tem o valor: " + valor)
});

//.find() ### Também recebe uma função como parametro, retorna o valor do primeiro elemento do array buscado, caso não encontre nada retorna undefined

var numeroEncontrado = numerosPares.find(function(valor){
  return valor == 6
})

console.log(numeroEncontrado)

//EXEC. 01
let numeros = [12,34,22,46,18,29,44,43,39];

let maiores = numeros.filter(function(valor){
        return  valor > 18;
})
console.log(maiores)

//numeros impares
function naoPareDeContarImparesAte (numero){
  let impares = numero

  let totalImpares = impares.filter((valor)=>{
      
    return valor % 2 != 0;
  })

  return totalImpares.length
}

console.log(naoPareDeContarImparesAte(5))


