///  EX 01

let txt = "br.digitalhouse.com";
let newTxt = txt.replace("br","http://br");
// console.log(newTxt)


function domini(txt){
    let newTxt = txt.replace("br","http://br");

    return newTxt;
}
console.log(domini("br.digitalhouse.com"));


// Só aceitou sem o replace
function dominio(site){
    return "http://"+site
}

console.log(dominio("br.digitalhouse.com"));


/// EXC 02

function substituicaoRapida(texto,procpalavra, subpalavra){
    
    let textoNovo = texto.replace(procpalavra,subpalavra);
    return textoNovo;
}

console.log(substituicaoRapida("Sorvete de Uva","Uva","Chocolate"));



/// EXC 03

//menciona('Existem muitas linguagens de programação e javascript é uma delas','programação'); // true

function menciona(texto,palavra){
    let menc = texto.indexOf(palavra);
    
    // if (menc != -1) {
    //     console.log(true)
    // }

    return menc != -1
}

console.log(menciona('Existem muitas linguagens de programação e javascript é uma delas','programação'));


/// EXC 03
/* Declare a string "Olá, sou Carlos!" e depois recorte a mesma para poder obter o nome "Carlos" em uma nova variável chamada nomeUsuario. */

let texto = "Olá, sou Carlos!";
console.log(texto.length)

let nomeUsuario = texto.slice(9,15);
console.log(nomeUsuario);

