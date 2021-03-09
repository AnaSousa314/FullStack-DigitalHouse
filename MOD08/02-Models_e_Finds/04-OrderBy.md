### Order By  

É uma forma de ordenar o resultado da consulta ao BD através de uma tabela escolhida.  

No Sequelize, para ordenar o resultado basta usar o atributo order que recebe um array:  
~~~
Usuario.findAll({
  order:[
    ['nome','ASC'],//O primeiro valor do array é a coluna que quer ordenar, o segundo é a forma de ordenação: crescente ou decrescente.
  ],
})
~~~  

##### Limit
É um metodo para limitar o número de linhas no resultado da pesquisa.  

~~~
Usuario.findAll({
  limit:10
}).then((resultados)=>{
  console.log(resultados)
})
~~~  

##### Offset  

É um método para pular um número de resultados, muito utilizado para fazer paginação dos resultados. 

~~~
Usuario.findAll({
  offset:10
}).then((resultados)=>{
  console.log(resultados)
})
~~~  

##### ORDER + LIMIT + OFFSET  

É possível usar todos os métodos juntos, basta passar como atributo para  findAll:  

~~~
Usuario.findAll({
  order:[
    ['nome','ASC'],
  ],

  offset:10,
  limit:10

}).then((resultados)=>{
  console.log(resultados)
})
~~~  

Referencias  
https://sequelize.org/master/manual/querying.html  

##### Exercícios  

<p>1º -
Exercício: Produtos ordenados pelo preço
Neste exercício o objetivo será trazer todos os produtos ordenados por preço, do menor para o maior.

Lembre-se que dentro do método findAll você pode passar um JSON que tenha como chave a palavra order e cujo valor é um array de array indicando em qual coluna ou colunas iremos ordenar e qual tipo de ordenação terá: ASC ou DESC.
</p>

~~~
const Producto = require('model/produtos.js');

Producto.findAll({
	//escreva seu código aqui
	order:[
		['preco','ASC']
	]
}).then(produtos => {
	console.log(produtos)
});
~~~  

<p>2º - 
Exercício: Limitando número de registros consultados
Quando devolvemos ao usuário uma lista de registros é aconselhável que os resultados sejam paginados, para trazer tanta informação junta da base de dados.

Neste exercício, temos a função findAll aplicado ao model Produto.

O objetivo da vez é passar um parâmetro para o método findAll para executar um limit e trazer apenas os 5 primeiros produtos.

</p>  

~~~
const Produto = require('model/produtos.js');

Produto.findAll({
	//escreva seu código aqui
	limit: 5
}).then(produtos => {
	console.log(produtos)
});
~~~