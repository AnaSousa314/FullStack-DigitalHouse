// length
let texto = "Oi eu sou a Ana";
console.log(texto.length);

// indexOf
console.log(texto.indexOf("Ana"));//Joao

// slice
console.log(texto.slice(0,3)); //string.slice(indice inicio,indice onde se quer terminar)  o segundo é opcional
let palavra = texto.slice(0,3);
console.log(palavra);

/* OBS: o slice não altera a string analisada */

// trim
/* serve para tirar espaços desnecessários, mas sempre antes ou depois do texto, não entre o texto */
let text = "    Oi eu sou a Ana";
console.log(text);
console.log(texto.trim());


// split
/* Transforma um string em um array */

console.log(texto.split());
console.log(texto.split(" "));
console.log(texto.split("n"));


// replace

console.log(texto.replace("Ana","Sousa"));
let textoNovo = texto.replace("Ana","Sousa");
console.log(textoNovo)


//Testes

console.log(text.toLocaleUpperCase().trim())
console.log(text.trim().length);


