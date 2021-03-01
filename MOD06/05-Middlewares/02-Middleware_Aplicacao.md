### Middlewares a nível de Aplicação  

<p>
Middlewares que queremos rodas sempre ao longo da aplicação, não importa em que rota o usuário entre.
</p>  

<p>
Invocando o app.use() estamos a criar middleware que será implementado e, toda a aplicação. Recebe uma chamada de retorno com três parâmetros:  
</p>  
 
* **request**
* **response**
* **next**  

~~~
app.use(function(req,res,next){...})
~~~ 

Middlewares já presentes no app.js : 

~~~
// configuração de pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// configuração do roteamento
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
~~~  

#### O que é o NEXT  

<p><b>next</b>  é um callback que irá empilhar todos os middlewares que se aplicam ao mesmo pedido, e executá-los um após outro. Quando você cheagr ao último , e se eles foram executados corretamente. você passará para o próximo passo qie é chegar ao cotrolador que lida com essa rota. Por isso ao final de cada middleware temos o next.</p>  

~~~
app.use(function(req,res,next){
  ...
  next();
})
~~~  

Exemplo: Um middleware que lida com erros 404 da aplicação.  

~~~
  app.use((req,res,next)=>{

    // Se a página não existir, ela retornará um erro de status 404 e adicionalmente renderizará a visão que você projetou para aquele cenário.
    res.status(404).render('404-page');

    // A próxima parte é o next. Se a página existir, ele chamará o controlador e retornará a visualização solicitada. 
    next();
  })
~~~  

#### Exercícios

<p>
1º - Exercício: Adicionando o middleware "express.json()"
Os middleware nos dão a possibilidade de executar código antes de executar o código para uma rota específica. Isto nos permite, por exemplo, analisar e estruturar o request para em seguida passa-lo as rotas.

Um exemplo disto é o middleware json do express: "express.json()". Este middleware injeta os parâmetros enviados dentro do objeto body e os converte em um json. Não é exagero dizer que sem este middleware não teríamos acesso em nossas rotas ao body do resquest.

Nese exemplo temos uma rota que recebe um post e faz um console.log do req.body, mas neste exemplo não declaramos o middleware.

O objetivo é adicionar o middleware "express.json()", através do método use de app, para permitir que a rota possa fazer uso do body do request.
</p>  

~~~
const express = require('express');
const app = express();

// Adicionar o middleware aqui
app.use(express.json())

const router = express.Router();
router.post('/criar-produto', (req, res) => {
	console.log(req.body);

	res.send('O produto foi criado com sucesso');
});

app.use(router);

app.listen(3000);
~~~  

<p>
2º - Exercício: Site em manutenção
Aproveitando a capacidade dos middleware, vamos criar um código que podemos informar se o site esta em manutenção e mostra uma view personalizada informando o usuário, independente da rota que ele esteja acessando.

Neste exemplo temos criada uma variável chamada "emManutencao" configurada por padrão com o valor false.

Nós vamos ter que, usando o método use de app, criar uma função que avalia o valor da variável "emManutencao". Se a variável tiver o valor false devemos executar a função next do middleware para que o fluxo da aplicação continue normalmente. Mas se a variável tiver o valor true vamos devolver a view 'em-manutencao', usando o objeto response para isso.
</p>  

~~~
const express = require('express');
const app = express();
let emManutencao = false;

//Adicione o middleware aqui

app.use((req,res,next)=>{
    res.render('em-manutencao');

    next();
})
~~~  

<p>
3º - Exercício: Adicionando a propriedade usuário
No exemplo a seguir, temos um usuário definido dentro da constante "usuário". Usando um middleware, precisamos adicionar no objeto de request a propriedade do usuário com o valor da nossa constante. Dessa maneira, todas as rotas devem poder recuperar o valor do usuário através do objeto request. Ex: req.usuario.

Para conseguir isso, chamaremos o método use do app e passamos a ele uma função. Esta função deve receber três argumentos: req, res e next. Vamos adicionar um novo parâmetro chamado user ao objeto req e passar a constante "user" como o valor.

Finalmente, devemos executar o callback next.
</p>  

~~~
const express = _require('express');
const app = express();
const usuario = {
    nome: 'Antônio',
    sobrenome: 'Zizek'
};

//Adicionar o middleware aqui

app.use((req,res,next)=>{
    req.usuario = usuario;

    next()
})
~~~


