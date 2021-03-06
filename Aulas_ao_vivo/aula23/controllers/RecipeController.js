const fs = require("fs");
const path = require("path")

const recipes = require("../data/recipes");

module.exports = {
    index(req, res, next){
      res.render('recipes', { recipes: recipes });
    },

    save(req,res,next){
        /* Criando id sequencial, obtendo à quantidade de elementos no array + 1 */
        let id = recipes.length + 1;
        /* montando objeto para seguir padão dentro do arquivo data/recipes.js */
        let recipe = {id, ...req.body};

        /* adicionando objeto criado dentro do array recipes */
        recipes.push(recipe)
        
        /* transformando o array recipes em string */
        let dataString = JSON.stringify(recipes,null,2) //forma de imprimir o arquivo de forma mais legivel

        /* obtendo o caminho ate o arquivo data/recipe.js */
        let filePath = path.join('data','recipes.js')

        /* escrever no arquivo recipes.js */
        fs.writeFileSync(filePath,'module.exports=')
        fs.appendFileSync(filePath,dataString)

        res.redirect('/recipes')
       // console.log(filePath)
    },
     
    async edit(req,res,next){

    },
    async updated(req,res,next){

    },

    async delete(req,res,next){
      let id = req.params.id
      console.log(req.params.id)

      recipes.splice(id-1,1)
      console.log(recipes)

      /* transformando o array recipes em string */
      let dataString = JSON.stringify(recipes,null,2) //forma de imprimir o arquivo de forma mais legivel

      /* obtendo o caminho ate o arquivo data/recipe.js */
      let filePath = path.join('data','recipes.js')

      /* escrever no arquivo recipes.js */
      fs.writeFileSync(filePath,'module.exports = ')
      fs.appendFileSync(filePath,dataString)

      res.render('recipes',{recipes, deleted: true})
    }
  }
  