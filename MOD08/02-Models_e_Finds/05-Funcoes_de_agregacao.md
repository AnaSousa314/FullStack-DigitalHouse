### Funções de Agregação  

##### COUNT  
Traz o total de registros da busca:  
~~~
Usuario.count().then(resultado=>{
  console.log("Temos " + resultado + " usuários!");
})
~~~  

##### COUNT + WHERE   
Usando count mais where nós conseguimos o número de registros com a condição atribuída ao where.  
~~~
Usuario.count({where:{'admin':true}}).then(resultado=>{
  console.log("Temos " + resultado + " usuários administradores.");
})
~~~  

##### MAX 
Traz o valor máximo de um atributo, no exemplo estamos filtrando o valor máximo da coluna 'idade'.  
~~~
Usuario.max('idade').then(max=>{
  console.log("O usuário mais velho tem " + max + " anos.");
})
~~~   


##### SUM  
Traz a soma de todos os valores de uma coluna atribuída por parâmetro:  

~~~
Usuario.sum('idade').then(sum=>{
  console.log("A soma da idade de todos os usuários é " + sum);
})
~~~  


##### Exercícios  

<p>
1º - 
Exercício: Função agregadora - max
Sequelize nos permite iterar com nossos modelos utilizando as mesmas funções de agregação que já conhecemos do MySQL, tais como: max, min, count, sum, etc.

Neste exercício precisamos recuperar do banco de dados o preço cujo valor é o mais alto entre todos os preços dos nossos produtos.
Para isso, podemos utilizar o método max no nosso model Produto.

***Lembre-se que o método máximo espera receber o nome da coluna.

Assim, ele irá recuperar o resultado dentro do método then e mostrá-lo com um console log: then(maiorPreco => {console.log(maiorPreco)})
</p>  

~~~
const Produto = require('model/produtos.js');

//escreva seu código aqui

Produto.max('preco').then(maiorPreco => {console.log(maiorPreco)})
~~~  

<p>
2º - 

Exercício: Contabilizando número de usuários
Dado o model Usuario, conte o número total de usuários nesta base de dados.

Para isso, será necessário utilizar o método count em Usuario.

Mostre o resultado com um console.log().

</p>  

~~~
const Usuario = require('model/usuarios.js');

//Escreva seu código aqui :D 

Usuario.count().then(resultado=>{
  console.log(resultado);
})
~~~