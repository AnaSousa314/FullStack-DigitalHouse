### Express Validação  

3:25 8:35

<p>
Biblioteca para validação de campos.
</p>  

* ` npm install express-validator --save `  
Ele possui vários métodos, mas usaremos apenas 3 neste exemplo.  

~~~
const {check,validationResult, body} = require('express-validator');
~~~  

#### 1. Validar Dados  

<p>
Como todo o middleware, devemos enviá-lo entre o req e o res, só que neste caso vamos enviá-lo como um array.
</p>  

~~~
router.post('/login', [], userController.login)
~~~  

##### check() 

<p>
Nos permite validar campo por campo. Recebe como parâmetro uma string, que será o nome do campo que quremos validar.
</p>  

*O nome do campo que passamos para check() deve ser o mesmo dado no atributo name do formulário*  

<p>Alguns métodos que podemos implementar em cada um dos checks são: </p>  

* **isLength()** - Valida o comprimento do campo. Recebe um objeto literal com a propriedade min e max, para configurar a quantidade minima e maxima de caracteres.
~~~
check('campo').isLength({min:6});
~~~  

* **isEmail()** - Valida que os dados desse campo tenha um formato de email correto.  
~~~
check('campo').isEmail();
~~~  

* **isInt()** - Valida que o dado seja um inteiro. Além disso, pode receber um objeto literal com a propriedade min e max, para configurar o número minimo e maximo a ser dado.  
~~~
check('campo').isLength({min:6, max:99});
~~~  

* **isEmpty()** - Valida que o campo não está vazio.  
~~~
check('campo').isEmpty()
~~~  

#### 2. Configurar Erros 

##### validationResult()

<p>
Permite capturar os dados que não passaram nas validações que fizemos com check(). Recebe como parâmetro o objeto request, e retorna um objeto com os erros do formulário.  
No método do controlador, criaremos a variável errors para armazenar nela o que o método validationResult() retorna.
</p>   

~~~
const userController = {
  login: (req,res) =>{
    let errors = validationResult(req);
  }
}
~~~  

<p>
Os erros serão aramzenados no array errors.
</p>  

~~~
const userController = {
  login: (req,res) =>{
    let errors = validationResult(req);
  
    if(!errors.isEmpty()){
      return res.render('login', {errors: errors.errors})
    }
    
  }

  return res.render("login", {errors: erros.errors})
}
~~~  

<p>
Cada erro será um objeto co propriedades, one, nso interessa nesse caso a prorpiedade msg, que armazena a mensagem de erro que queremos mostrar ao usuário.
</p>  

~~~
<ul>
  <%for(var i=0; i< errors.length; i++){%>
    <li> <%= errors[i].msg %> </li>
  <%}%>
</ul>
~~~  

<p>
Para evitar falhas, fora do for que passa pelo array, teremos que criar uma condicional que verifique se a variável errors não está indefinida antes de iniciar o loop, pois quando o usuário acessa o formulário pela primeira vez a variável errors não existe, porque a solicitaçã ainda não passou pelo controlador que processa esses dados.
</p>  

~~~
<%if(typeof errors != 'undefined'){%>
<ul>
  <%for(var i=0; i< errors.length; i++){%>
    <li> <%= errors[i].msg %> </li>
  <%}%>
</ul>
<%}%>
~~~  

#### 3. Editar mensagens  
 
##### withMessage()
<p>
Nos permite onfigurar a função do campo a ser validado. Recebe uma string, que será a que mostraremos ao usuário na visualização caso ocorra algum erro nesse campo.
</p>  

~~~
router.post('/login', [

  check('email').withMessage('O formato digitado não é válido')
  
  ...
], userController.login)
~~~  

#### 4. Validações Próprias  

<p>
Para validar um campo de maneira personalizada, usaremos duas funções que a biblioteca nos fornece:  
</p>  

* **body()** - Recebe uma string como parâmetro, o nome do campo que queremos validar.  
~~~
body('email')
~~~  

* **custom()** - Recebe uma callback com um valor. Dentro, desenvolvemos a lógica necessária para validar esse valor. O executamos no campo que queremos validar.  

~~~
body('email').custom(function(value){
  //lógica a implementar
})
~~~  

<p>
Assim como no check(), as validações com body() serâo feitas dentro do array que passamos como parâmetro a rota que está processando o formulário.
</p>

#### Exercícios

<p>
1º - Validando Campos de Cadastro
Nós já temos a nossa rota de registo. O que precisamos fazer agora é adicionar uma validação para que o campo de e-mail seja do tipo email e a senha tenha pelo menos 6 caracteres. 

Para conseguir isso, vamos requerer o módulo de express-validator e usando o destructuring vamos inicializar três constantes: check, validationResult e body.

Em nossa rota, vamos adicionar como segundo parâmetro um array. Ele terá apenas duas posições, uma para validar a entrada de dados no input "email" e outra para validar a entrada em "password".

Em cada posição do array vamos usar a função check passando como parâmetro o input a ser validado e vamos concatenar à execução desta função uma segunda função que será a regra que queremos que nosso input atenda, por exemplo é isEmail.
</p>  

~~~
const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

const {check,validationResult, body} = require('express-validator');

router.post('/cadastro', [
    check('email').isEmail(),
    check('password').isLength({min:6})
], UsuarioController.registro);
~~~   

<p>
02º - Validando se a url é segura
Temos um formulário de upload onde os usuários podem fazer enviar seus sites favoritos para que outros usuários possam ver. Neste formulário nós recebemos o input url com o endereço do site. Queremos validar sea URL que chega até nós é segura, ou seja, https. Para conseguir isso, vamos criar a nossa regra de verificação personalizada.

Usando a função body valide o input url. Lembre-se também de concatenar à execução de body o método custom para fazer sua validação.

Este método recebe uma função com um parâmetro value (que será o valor recebido pelo input url).

Usando indexOf podemos validar se a url é do tipo https.
Lembre-se que a função que recebe o método custom deve retornar true ou false.

Dica: para saber se a url de entrada é do tipo https você pode fazer value.indexOf('https') !== -1
</p>

~~~
const express = require('express');
const router = express.Router();
const favoritosController = require('../controllers/favoritosController');
const { check, validationResult, body } = require('express-validator');
/* você precisará modificar a linha abaixo */
router.post('/favoritos',  [
    body('url').custom(function(value){
        if(value.indexOf('https') !== -1){
            return true
        }else{
            return false
        }
    })
],favoritosController.salvar);
~~~
Referências:  
https://github.com/validatorjs/validator.js#validators