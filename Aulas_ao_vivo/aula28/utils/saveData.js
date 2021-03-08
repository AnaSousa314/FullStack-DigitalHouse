const fs = require("fs");
const path = require("path")

const saveData = (array,fileName) =>{
 
  /* transformando o array recipes em string */
let dataString = JSON.stringify(array,null,2) //forma de imprimir o arquivo de forma mais legivel

/* obtendo o caminho ate o arquivo data/recipe.js */
let filePath = path.join('data',fileName)

/* escrever no arquivo recipes.js */
fs.writeFileSync(filePath,'module.exports=')
fs.appendFileSync(filePath,dataString)
}

module.exports = saveData;