### Select  

<p>
Usa um recurso chamado FIND para localizar informações no BD. Suas variações são: FindAll, FindOne, FindByPk
</p>

**findAll**  
~~~
// Inclui o model referente a tabela
const Carro = require('models/carros.js');

// Retorna uma promisse, usamos o then para mostrar o resultado da pesquisa
Carro.findAll().then((resultados)=>{
  console.log(resultados)
})
~~~  

**findOne**  
~~~
Carro.findOne({
  where:{
    nome: 'Celta'
  }
}).then((resultado)=>{
  console.log(resultado)
})
~~~  

**findByPk**  
~~~
// SELECT * FROM carro WHERE id = 42;
Carro.findByPk(42).then((resultado)=>{
  console.log(resultado)
})
~~~ 

Referencias  
https://sequelize.org/master/manual/querying.html


#### Exercícios
<p>
1º - 
Exercício: Selecionando Filmes
﻿A partir do nosso model Filmes vamos recuperar todos os filmes da nossa base de dados e fazer um console.log do resultado.

Para isso você pode usar o método findAll do model Filmes.
*** Lembre-se que este método é assíncrono.
</p>  

~~~
const Filmes = require('model/filmes.js');

//escreva seu código aqui :D 

Filmes.findAll().then((resultado)=>{
    console.log(resultado)
})

~~~  

<p>
2º - 
Exercício: Selecionando pelo ID
A partir do model Filmes vamos recuperar o filme com a id 1.
O Sequelize nos oferece o método findByPk que recupera um elemento da base de acordo com sua chave primária. Podemos usar este método a partir do nosso objeto Filmes.

Tenha em mente que este método é assíncrono, portanto será necessário trabalhar com promises.
</p>    

~~~
const Filmes = require('model/filmes.js');

//escreva seu código aqui :D 
Filmes.findByPk(1).then((resultado)=>{
    console.log(resultado)
})
~~~