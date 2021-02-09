## Processamento GET

<p>
  As solicitações feitas por get são todas aquelas que vem diretamente do URL do navegador ou internamente na página a partir de um link. 
</p>

EX.:

```
  //roteador
  router.get("/filmes", (req,res)=>{res.render('filmes')});

  //roteador com controlador 
  router.get("/filmes", filmesController.todos);

  ...const controller = {
    todos: (req,res) => {res.render('filmes')}
  };

  // sobre a execução do express 
  app.get("/filmes", (req,res)=>{res.render('filmes')});
  
```

Atividade: 
```
  const express = require('express');
  const router = express.Router();

  router.get("/produtos",(req,res)=>{
    let  preco = req.query;

    res.send(preco)
  })
```
<p>
Exercicio.:
  Temos uma lista de celulares, cada um com seu preço.
Vamos criar a rota "/celulares" do tipo GET para listar todos.
Para mostrar a lista devemos usar o método send do parâmetro response.
Bem, agora também gostaríamos de poder filtrar a lista de celulares em função do preço. O usuário deveria acessar uma url que tenha uma query string com o parâmetro "max". A partir desse parâmetro nós temos que devolver a lista de celulares contudo mostrando apenas aqueles cujo preço não supere o do parâmetro "max".

Por exemplo, se o usuário acessar a url /celulares?max=20000 deveríamos listar todos os modelos menos o "Samsung Galaxy A50"

</p>

Resposta:
~~~
  const express = require('express');
const router = express.Router();

const celulares = [
    {
        nome: 'Motorola Moto E6 Plus',
        preco: 14999
    },
    {
        nome: 'Motorola Moto G7',
        preco: 19999
    },
    {
        nome: 'Alcatel 5033A',
        preco: 6999
    },
    {
        nome: 'Samsung Galaxy A50',
        preco: 33499
    }
];

router.get("/celulares",(req,res)=>{
    let {max} = req.query

    let list = celulares.filter(list => list.preco < max );

    res.send(list)
})

~~~
