const bcrypt = require('bcrypt') //instalamos esse modulo para encriptação de senha com o npm install
const users = require("../data/users");
const recipes = require("../data/recipes");

const saveData = require("../utils/saveData");




module.exports = {

  create(req,res,next){
    res.render('create-user')

  },

  save(req,res,next){
   // console.log(req.body.password)
   
   let id = users.length + 1;

   /* criptografando senha */
   req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));//esse 10 é o numero de caracteres que eu quero usar para encriptar as senhas
   
   /* criando objeto dentro do array users */
   let user = { id,...req.body};

    //console.log(req.body)
    //console.log(user)

    /* adcionando objeto dentro do array users */
    users.push(user)
    
    /* cadastrando no arquivo users.js que será nosso json de usuarios */
    saveData(users, 'users.js')

    res.render('create-user',{added: true});//esse added é para o if colocado na view
  },

  login(req,res,next){

    res.render('login');
  },

  authenticate(req,res,next){
    let {email, password} = req.body;

    let user = users.find(user => user.email == email); //compara se o email colocado no login é igual ao que está no json

    if(!user){
      return res.render('login',{notFound:true});
    } //se o email for diferente ele vai parar todo o processo e renderizar a tela de login com o notFound true, esse notFound irá ser processado pela view login
    

    if(!bcrypt.compareSync(password, user.password)){
      return res.render('login',{notFound: true});
    }//ele pega o password colocado pelo o usuario e verifica se ele é igual ao o que está encriptado no sistema, se for diferente ele para o processo e faz o mesmo do outro if

    // removendo propriedade password p q o usuario não trafegue com sua senha

    delete user.password;

    /* criacao de sessao para o usuario logado */
    req.session.user = user;

    //console.log(req.session.user);


    //se os dois ifs forem true ele será redirecionado para o index
    //res.redirect('/');
    
    res.render('recipes',{user: req.session.user,recipes /* ou recipes: recipes, pois os nomes são iguais */});

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