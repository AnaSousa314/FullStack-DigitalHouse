const moment = require('moment')
//const datefns = require('date-fns')
//const dateFns = require('date-fns/differenceInDays')
const {differenceInDays,differenceInMonths
} = require('date-fns')



// Desafio 1 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020
// utilizando biblioteca moment

let dataAntiga = moment("2005-09-15")
let dataAtual = moment("2020-09-15");

let diasDeDiferenca = dataAtual.diff(dataAntiga,'days');
let mesesDeDiferenca = dataAtual.diff(dataAntiga,'months');

console.log("A diferença de dias entre 15/09/2005 e 15/09/2020 é: "+diasDeDiferenca+" dias.");
console.log("A diferença de meses entre 15/09/2005 e 15/09/2020 é: "+mesesDeDiferenca+" meses.");

// Desafio 2 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020
// utilizando biblioteca date-fns
let data01 = new Date(2005,08,15);
let data02 =new Date(2020,08,15);


/* let resultDays = datefns.differenceInDays(data02,data01);

let resultMonths = datefns.differenceInMonths(data02,data01); */

let resultDays = differenceInDays(data02,data01);

let resultMonths = differenceInMonths(data02,data01);

console.log("\nA diferença de dias entre 15/09/2005 e 15/09/2020 é: "+resultDays+" dias.");
console.log("A diferença de meses entre 15/09/2005 e 15/09/2020 é: "+resultMonths+" meses.");

