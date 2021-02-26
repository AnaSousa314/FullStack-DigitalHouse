## Aplicando Solicitações PUT

* **Enviar informação** confidencial ao servidor de forma segura.
* **Modificar** um recurso existente.

<p>Ainda usando o exemplo dos filmes, para editarmos os dados de um deles precisaremos de dois routes, um para mostrar o formulário de edição e outro para processar a informação, a edição de fato.</p>

<p>Geralmente usamos o id para identificarmos qual elemento queremos alterar.</p>

Exemplo:  
~~~
// route que envia um formulário de edição para a visualização -> GET.
router.get('/filme/:id/editar',(req,res)=>{
  res.render('editar');
})

// route que processa a informação do formulário -> PUT
router.put('filme/:id/editar/', (req,res)=>{...})
~~~

## Aplicando Solicitações DELETE

* **Eliminar** um recurso existente.  

<p>Se quisermos eliminar um filme do sistema, precisamos criar um route que busque o filme e o elimine. </p>

<p>Geralmente usamos o id para identificarmos qual elemento queremos deletar.</p>

Exemplo:  
~~~
//route que processa a informação do formulário -> DELETE
router.delete('filme/:id/eliminar/', (req,res)=>{...})
~~~

<p>Como callback de retorno para ambos os métodos nós redirecionamos a página para cortar o ciclo (req,res). </p>  

~~~
res.redirect('/filmes');
~~~

## Habilitar métodos HTTP

<p>
  Nem todos os navegadores reconhecem os métodos PUT e DELETE, por isso instalamos o pacote:  
</p>  

` npm install method-override --save `  

<p>Após a instalação, o configuramos no app.js para poder susbstituir o método original e poder implementar PUT e DELETE.</p>  

~~~
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
~~~  

## Configurar o formulário   

<p> Para usar precisamos incluir a informação por uma <b>query string</b> ao action do formulário.</p>  

* ` ?_method=PUT `  
* ` ?_method=DELETE `  

Exemplo:
~~~
  <form method="POST" action="/filmes/:id/editar?_method=PUT">
    ...
  </form>
~~~  
  
Outros exemplos:  
~~~
//busca o dado a ser editado
  viewAttForm:(req,res)=>{
    let {id} = req.params
    let produtos = [
      {id:1, nome: 'Iphone', preco: 70000},
      {id:2, nome: 'Iphone', preco: 70000}
    ]

    res.render('editarProduto',{produto:produtos[id]})
  },
  editar:(req,res)=>{
    let {nome,preco} = req.body
    res.send('Voce editou o produto' + nome)
  }


  //para deletar
  listarProdutos: (req,res)=>{
    let produtos = [
      {id:1, nome: 'Iphone', preco: 70000},
      {id:2, nome: 'Iphone', preco: 70000}
    ]

    res.render('listaProdutos',{listaProdutos: produtos})
  }
~~~

#### Exercicios  
<p>
 1ª - Exercício: Assegurando a compatibilidade com PUT e DELETE
Agora vamos trabalhar com rotas do tipo PUT e DELETE. Lembre-se que as URL do tipo PUT são utilizadas somente para modificar informações enquanto as rotas do tipo DELETE são utilizadas para eliminar registros. Dado que esses métodos não são suportados por todos os navegadores é necessário usar a dependência method-override para assegurar a compatiblidade. Para tal, nesse exercício, você vai criar a constante methodOverride que vai requisitar o módulo "method-override" e em seguida configurar o objeto app passando ao mesmo o método use e a expressão methodOverride("_method").

Dica: Lembre-se que quando está trabalhando no seu projeto a dependência method-override não vêm por padrão no node, vai ser necessário que a instale executando o seguinte comando no terminal: npm install method-override --save
</p>

~~~
const express = require('express');
const app = express();
const methodOverride = require("method-override");

app.use(methodOverride('_method'));
~~~   

<p>
 2ª -  Os formulários em HTML apenas suportam os métodos GET e POST. É por isso que em nossos arquivos node devemos usar a dependência "method-override" para pode simular o envio de dados mediante PUT ou DELETE. Mas também é necessário adicionar no atributo action de nossos formulários uma query string para que os dados sejam enviados corretamente. Dado o seguinte formulário modifique o atributo action para que ele permita o envio de dados utilizando PUT.
</p>

~~~
  <form action="usuarios/atualizar?_method=PUT" method="POST">

  </form>
~~~  

<p>
3ª - Exercício: Vamos criar uma rota json style
Temos um Json com três filmes

Vamos tratar de criar uma ruta para editar os dados de um filme em particular. Um usuário vai ter de ser capaz de enviar dados através de um formulário e nós devemos editar a película escolhida. Para indicar a película a ser modificada vamos receber a url e a id correspondente.  Em outras palavras, devemos criar um caminho do tipo PUT para os casos filme/1, filme/2, etc.

Para isso vamos ter que criar a partir do objeto router uma rota do tipo PUT que responsa a qualquer uma das urls mencionadas anteriormente.
Devemos ser capazes de identificar o filme, dependendo do ID que nos é passado como parâmetro, e atualizar seus dados com os que nos são enviados.
</p>

~~~
let filmes = [
    {
        id: 1,
        titulo: 'Spider-Man: Longe de casa',
        duracao: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracao: 100,
        genero: 'Animacao'
    },
    {
        id: 3,
        titulo: 'X-Men: Fênix Negra',
        duracao: 113,
        genero: 'Acao'
    }
];

const express = require('express');
const router = express.Router();

router.put('/filme/:id', (req, res) => {
  let { id } = req.params;
  let { titulo, duracao, genero } = req.body;

  filmes.forEach((filme) => {
    if (filme.id == id) {
      filme.titulo = titulo;
      filme.duracao = duracao;
      filme.genero = genero;
    }
  });
  
});
~~~