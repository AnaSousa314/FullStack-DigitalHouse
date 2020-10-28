//console.log("Olá Mundo");

// Para requerer um módulo atribuimos ele a uma váriavel e usamos o `require('nomeModulo')`.
let moment = require('moment');

const fs = require('fs'); //modulo nativo

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
let data = moment().format('MMM do YY');
const superHerois = require('./superHerois'); // para indicarmos ao node que o pacote que queremos exportar não se encontra na pasta node_modules, colocamos esse caminho `./`. 
//Como boa Prática, normalmente armazenamos os módulos que criamos dentro de uma pasta com o mesmo nome de módulo que estamos prestes a criar.

console.log(dados);
console.log(data);
console.log(superHerois);
