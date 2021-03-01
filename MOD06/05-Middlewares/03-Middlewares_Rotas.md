### Middlewares a nível de rota 

<p>
Middlewares que se aplicarão apenas às rotas que definimos. 
</p>  

<p>
Para aplicar um middleware em uma rota, devemos passar um callback ao route entre o request e o response.
</p>  

~~~
router.get('/usuario/:id', callback, usuersController.list);

// Exemplo visto na aula de upload de arquivos. O upload.any() é um callback. 
router.post('/register',  upload.any(), usersController.save);
~~~  

<p>
Esse callback é o nosso middleware. É a funcionalidade que queremos implementar antes que se execute a resposta da solicitação. 
</p>  

<p>
Cada middleware deve receber um req,res,next.
Para manter uma ordem estrutural na nossa apliacação é recomendável criar o middleware em um arquivo separado e solicitar onde queremos usar. Dessa forma, evitamos definir middlewares como funções anônimas.
</p>  

~~~
function logged(re,res,next){
 ...
 next();
}
~~~  

#### Exercicios 

<p>
01º - Adicionando middleware a rota "upload-file"
Ao contrário do middleware de aplicação que roda para todas as rotas, os middlewares de rotas permite que você aplique o middleware em uma ou mais rotas selecionadas.


Um exemplo disso é o middleware multer que é adicionado apenas às rotas responsáveis pelo upload de arquivos. (Lembre-se que multer é um pacote node que permite o upload de arquivos para o servidor).



Para este exemplo já temos a configuração do multer pronto, mas precisamos adicionar o middleware no caminho "upload-file".



Para isso, teremos que passar como segundo parâmetro o arquivo de rota de upload do middleware upload.any().
</p>  

~~~
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
 
const upload = multer({ storage: storage });

router.post('/upload-file', upload.any(),fileController.upload); 
//Adicione o middleware multer acima
~~~  

<p>
2º - Contabilizando Acessos
Vamos imaginar que temos um controller chamado "estatisticasController" que tem um método "contarAcesso". Este método recebe um request e adiciona, em nossa base de dados, um novo acesso à url do request.

Gostaríamos de contar os acessos do nosso site, mas não de todas as urls. Por exemplo, não queremos contar as visitas à rotas acessadas por post e algumas rotas get, como login e painel de usuário.

Nosso objetivo será criar uma função chamada visitasMiddleware que recebe como parâmetros req, res e next. Dentro desta função vamos executar o método contarAcesso de estatisticasController, e vamos passar o objeto pedido como parâmetro para o método: estatisticasController.contarAcesso(req). No final da nossa função vamos executar o callback next().

Por fim, vamos adicionar nossa função "visitasMiddleware" como o segundo parâmetro da rota '/home' que já está definida no código.

</p>  

~~~
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const estatisticasController = require('../controllers/estatisticasController');

//crie aqui a função visitasMiddleware
function visitasMiddleware(req,res,next){
    estatisticasController.contarAcesso(req);
    next();
}

router.get('/home', visitasMiddleware,homeController.index); //Adicione a função visitasMiddleware como segundo parâmetro desta rota.
~~~  

<p>
3º - Redirecionando para Página Inicial
Algumas rotas em nosso site foram descontinuadas e não temos mais conteúdo para exibir. Gostaríamos de garantir que quando um usuário tente entrar em qualquer uma dessas rotas, ele seja redirecionado para a página inicial.

Para isso vamos criar uma função chamada "redirecionar", que vai ser usada como middleware e deve receber três parâmetros: req, res e next.

Dentro da nossa função vamos chamar o método redirect do objeto response e vamos redirecioná-lo para a url '/'. Para este caso em particular, não é necessário chamarmos o callback next, já que a idéia deste redirecionamento é cortar a execução dos possíveis middlewares subsequentes.

Finalmente só temos que adicionar a função "redirecionar" como segundo parâmetro da rota '/rota-em-desuso'.
</p>  

~~~
const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

//crie sua função redirecionar aqui
function redirecionar(req,res,next){
    res.redirect('/');
}

router.get('/rota-em-desuso', redirecionar,OldController.index); //Adicione a função redireciona como segundo parâmetro desta rota
~~~