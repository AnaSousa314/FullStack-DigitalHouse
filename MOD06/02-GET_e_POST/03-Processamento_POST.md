## Processamento POST

#### Aplicando solicitações POST

<p>
  Geralmente usmos o método post para <em>Enviar informações confidenciais ao servidor</em> ou para <em>Criar um novo recurso</em>. 
</p>

<p>
  No caso do GET mostramos o exemplo sobre filmes, nesse mesmo contexto se quisermos adicionar um novo filme ao nosso filmes, teríamos que criar dois <b>routes</b>: um que <b>mostre</b> o formulário de criaçõa  outro responsável pelo <b>processamento</b> da informação.
</p> 

~~~
  //route que envia um formulário para a visualização -> GET

  router.get('/filme/criar', (req,res)=>{res.render('criar')});

  
  // route que processa a informação do formulário -> POST
  
  router.post('/filme/criar',(req,res)=>{...});
~~~

<em>Note que o nomes dos routes podem ser <b>iguais</b> desde que cada um implemente um método diferente.</em>

#### Configurar o formulário

<p>
  Os pedidos feitos pelo post são todos que são encaminhados pelo formulário. Mas para isso é necessário que seus atributos estejam configurados, sendo eles:
</p>

* **method** -> onde escrevemos o método HTTP que usaremos para enviar a informação.
* **action** -> onde escreveremos o **route** indicando onde essa informação será processada.

Exemplo:

~~~
  <form method="POST" action="/filmes/criar">
    ...
  </form>
~~~

#### Capturar a Informação

<p>
  Para trabalhar com os dados enviados a partir do formulário, é necessáio <b>configurar</b> o ambiente de nossa aplicação para que seja capaz de <b>capturar</b> essa informação. 
</p>

<p>
  No express-generator, o ejs, essa configuração já é criada por padrão no app.js com as linhas de código:
</p>

~~~
  app.use(express.urlencoded({extend: false}));
  app.use(express.json());
~~~

**OBS.:** Desta forma, estamos esclarecendo á aplicão que tudo que chega de um formulário, queremos capturá-lo na forma de um ojeto literal.  

<p>E, por sua vez, tem a possiblidade de converter essa informação em formato json, se necessário.</p> 

#### req.body

<p>
  No <b>request</b> da solicitação, encontramos a propriedade <em>body</em>, um ojeto literal que conterá <b>toda</b> a informção do formulário:
</p>

* O nome de cada chave desse ojeto, será o nome do atributo `name` de cada input do formulário.

* O <b>valor</b> será dado inserido nesse campo.

~~~
  <form method="POST" action="/filmes/criar">
    
  Título: <input type="text" name="titulo" value="">
   
   ...
  </form>
~~~

~~~
  router.post('/filme/criar',(req,res)=>{

    console.log(req.body) //{titulo: Batman}

  });
~~~

<p>
  Para fechar o ciclo do request e response feito pelo servidor, é necessário fazer um redirecionamento, após a lógica ser implementada, usando o método redirect() no response: 
</p>

~~~
  res.redirect('/filmes')
~~~

-------------------------
<p>
Exercício:

Q1.:
Agora vamos trabalhar com POST. Você se lembra que as URL do tipo POST são utilizadas para guardar informações em nossa base de dados ou mandar informações sensíveis. Para recuperar os dados enviados por POST nós utilizamos o atributo body do objeto request. Mas antes é necessário indicar ao express que vamos trabalhar com JSON e que a informação seja enviada no formato correto. Portanto é necessário executar duas linhas de código de acordo com o método use do objeto app.

Já tendo criado a constante app use-a para adicionar a configuração necessária (urlencoded e json) para trabalhar com post.
</p>

Resposta  
~~~
  const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
~~~

<br>

<p>
  Q2.:
  Para recuperar a informação em rotas com o método POST utilizamos o atributo body do objeto request.
Vamos criar uma rota do tipo POST chamada "/ver-body" onde, através do método send, mostraremos no navegador o conteúdo do atributo body.

Primeiro temos que criar a constante router e atribuir o objeto Router do express.
Para criar a ruta vamos utilizar o método post do objeto router.
</p>

Resposta:

~~~
  const express = require('express');

const router = express.Router();

router.post("/ver-body",(req,res)=>{
    res.send(req.body)
})
~~~

<p>
  Q3.:

   Para este exercício temos um objeto já criado que tem dois atributos, ambos estão com valor null. Nós vamos ter que indicar um valor para cada um de nossos atributos segundo os dados enviados por POST. Para isso vamos criar uma rota do tipo POST que aponte para "/criar/produto". Vai ser essa a rota que o usuário nos enviará os dados: nome e preço do produto. Nos vamos recuperar esses dados a partir do atributo body request e vamos adiciona-los ao nosso objeto produto. Uma vez finalizado enviaremos o objeto produto ao usuário usando o método send.


    OBS: não usar desestruturação neste exercício
</p>

~~~
  const express = require('express');
const router = express.Router();

  let produto = {
    nome: null,
    preco: null
  };

    router.post("/criar/produto",(req,res)=>{

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.send(produto);
})
~~~