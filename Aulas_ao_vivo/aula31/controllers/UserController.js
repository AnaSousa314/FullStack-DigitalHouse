const {User,Recipe} = require('../models');
const bcrypt = require('bcrypt');

module.exports = {

  create(req,res,next){
    res.render('create-user')

  },

  async save(req,res,next){

   /* criptografando senha */
   req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

   /* criando objeto dentro do array users */
   let user = {...req.body};

    /* adcionando objeto dentro do banco na tabela user*/
    await User.create(user)

    res.render('create-user',{added: true});//esse added é para o if colocado na view
  },

  login(req,res,next){

    res.render('login');
  },

  async authenticate(req,res,next){
    let {email, password} = req.body;

    let user = await User.findOne({
      where:{
        email //ou só email
      }
    })
  
    let recipes = await Recipe.findAll();

    if(!user){
      return res.render('login',{notFound:true});
    } 

    if(!bcrypt.compareSync(password, user.password)){
      return res.render('login',{notFound: true});
    }

   // let {password: pass, ...userWithoutPassword} = user;

    user.password = undefined;

    /* criacao de sessao para o usuario logado */
    req.session.user = user;

    //console.log(req.session.user);
    
    res.render('recipes',{user: req.session.user,recipes});

  },

  logout(req,res,next){
    /* 1º: ao clicar em Sair deverá redirecionar para a rota users/logout
    2º: criar a rota 'users/logout' q irá ser executada em UserController no metodo logout
    3º: destruir a session e apos isso redirecionar para a rota '/'
    */

    req.session.destroy();

    res.redirect('/');
  }


}



//Referencia do bcrypt
//https://www.npmjs.com/package/bcrypt