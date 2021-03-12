const {Recipe} = require('../models')


module.exports = {
    async index(req, res, next){
      let recipes = await Recipe.findAll({
        limit: 10
      });
      res.render('recipes', { recipes: recipes, user: req.session.user });
    },

    async save(req,res,next){
        /* montando objeto para seguir padão dentro do arquivo data/recipes.js */
        let recipe = {...req.body};
        //  console.log(recipe);
        // return

        await Recipe.create(recipe);

        res.redirect('/recipes')
       // console.log(filePath)
    },
     
    /* esse método é mais para exibir os dados no front, o outro é que serve para editar de fato */
    async edit(req,res,next){
      let id = req.params.id;

      /*  obter a receita para altera-la */
      let recipe = await Recipe.findByPk(id);

      console.log(recipe)

     res.render('edit-recipe',{recipe, user: req.session.user});
      
    },
    async updated(req,res,next){
      let id = req.params.id;

      let {name, email,message} = req.body;

      /*  obter a receita para altera-la */
      let recipe = await Recipe.findByPk(id);

      /* Alterar as propriedades do objeto que desejamos fazer update */
      recipe.name = name;
      recipe.email = email;
      recipe.message = message;

      // Salvando a atualizacao do registro
      await recipe.save()

      // Outra Forma mais simples
      // let recipe = await Recipe.findByPk(id);
      // Recipe.update({
      // name,
      // email,
      // message
      // })


      //console.log(recipe)

     // saveData(recipes,'recipes.js')

      res.render('edit-recipe',{recipe, updated: true, user: req.session.user})

    },

    async delete(req,res,next){
      let id = req.params.id;

      let recipe = await Recipe.findByPk(id);
     // console.log(req.params.id)

      recipe.destroy();//excluir

      res.redirect('/recipes');
    }
  }
  