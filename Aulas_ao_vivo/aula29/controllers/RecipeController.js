const {Recipe} = require('../models')
const recipes = require("../data/recipes");
const saveData = require('../utils/saveData')


module.exports = {
    index(req, res, next){
      res.render('recipes', { recipes: recipes, user: req.session.user });
    },

    async save(req,res,next){
        /* montando objeto para seguir padão dentro do arquivo data/recipes.js */
        let recipe = {...req.body};
        // console.log(recipe);
        // return

        await Recipe.create(recipe);

        res.redirect('/recipes')
       // console.log(filePath)
    },
     
    /* esse método é mais para exibir os dados no front, o outro é que serve para editar de fato */
    async edit(req,res,next){
      let id = req.params.id;

      /*  obter a receita para altera-la */
      let recipe = recipes.find(recipe => recipe.id == id);

      console.log(recipe)

     res.render('edit-recipe',{recipe, user: req.session.user});
      
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

      res.render('edit-recipe',{recipe, updated: true, user: req.session.user})

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
      

      res.render('recipes',{recipes: recipesFilter, deleted: true, user: req.session.user})
    }
  }
  