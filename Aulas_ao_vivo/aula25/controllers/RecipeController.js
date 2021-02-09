

const recipes = require("../data/recipes");
const saveData = require('../utils/saveData')

module.exports = {
    index(req, res, next){
      res.render('recipes', { recipes: recipes });
    },

    save(req,res,next){
        /* Criando id sequencial, obtendo à quantidade de elementos no array + 1 */
        let id = recipes.length + 1;

        /* Minha forma de fazer um id sequencial */
        //let nextId = 0;
       // let id = nextId + 1;
        
        /* montando objeto para seguir padão dentro do arquivo data/recipes.js */
        let recipe = {id, ...req.body};

        /* adicionando objeto criado dentro do array recipes */
        recipes.push(recipe)
        
        //executando função que salva alterações dos registros no arquivo recipe.js
        saveData(recipes,'recipes.js')

        res.redirect('/recipes')
       // console.log(filePath)
    },
     
    /* esse método é mais para exibir os dados no front, o outro é que serve para editar de fato */
    async edit(req,res,next){
      let id = req.params.id;

      /*  obter a receita para altera-la */
      let recipe = recipes.find(recipe => recipe.id == id);

      console.log(recipe)

     res.render('edit-recipe',{recipe});
      
    },
    async updated(req,res,next){
      let id = req.params.id;

      let {nome, email,mensagem} = req.body;

      /*  obter a receita para altera-la */
      let recipe = recipes.find(recipe => recipe.id == id);

      /* Alterar as propriedades do objeto que desejamos fazer update */
      recipe.nome = nome;
      recipe.email = email;
      recipe.mensagem = mensagem;

      console.log(recipes)

      saveData(recipes,'recipes.js')

      res.render('edit-recipe',{recipe, updated: true})

    },

    async delete(req,res,next){
      let id = req.params.id
      console.log(req.params.id)

      //recipes.splice(id-1,1)
      //console.log(recipes)

      /* encontrando o elemento obtendo o indice dele */
      //let recipeIndex = recipes.findIndex(recipe => recipe.id == id);
      
      /* remove com base no indice */
      //recipes.splice(recipeIndex, 1)

      //console.log(recipes)

      /* 2ª forma de resolver o elemento json */
      let recipesFilter = recipes.filter(recipe => recipe.id != id); //ele pegará todos os elementos diferentes do id a ser excluido

      saveData(recipesFilter,'recipes.js')
      

      res.render('recipes',{recipes: recipesFilter, deleted: true})
    }
  }
  