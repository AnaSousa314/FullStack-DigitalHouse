### Raw Queries   

<p>
É uma forma de manipular o BD através do sequelize, usanod queries SQL.
</p>  

##### Gerando conexão  
Primeiro precisamos fazer um require no módulo Sequelize e no arquivo de conexão database.js. Depois instanciar a conexão assim:  
~~~
const Sequelize = require('sequelize');

const dbConfig = require('../config/database);

const connection = new Sequelize(dbConfig);//no lugar da palavra conection pode ser db como no Mongo.
~~~    

##### sequelize.query()  

Recebe uma consulta como parâmetro:  

* ` connection.query('SELECT * FROM usuarios) `  

O retorno serão registros do BD, e você pode definir o que fazer com a informação.  

~~~
connection.query('SELECT * FROM usuarios).then(usuarios => {
  console.log(usuarios)
}) //pode ser async awat
~~~  


Outro exemplo:  
~~~
const Sequelize = require('sequelize');
const config = require('../config/database);

const ProdutoController = {
  index: async (req,res) => {
    const db = new Sequelize(config);
    let nomeLivro = 'Tres porquinhos'
    const result = await db.query('select * from produto where produto.nome = :nomeLivro',{
      replacements:{
        nomeLivro
      },
      type: Sequelize.QueryType.SELECT
    })

    console.log(result)
  }
}
~~~

Referências  

https://sequelize.org/master/manual/raw-queries.html


##### Exercícios  

<p> 01º - 
Usando método query
Usando o método de consulta do Sequilize execute a seguinte query: "SELECT * FROM users".



Lembre-se que o método de consulta é assíncrono e retorna uma promise (promessa). Portanto, após executar o método de consulta você precisa concatenar o método then e então recuperar a resposta. Dentro do método faça um console.log do resultado retornado.



Finalmente, adicione o método de capturas de erros. Dentro do método de captura ele faça um console.log.
</p>  

~~~
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

//Seu código aqui
sequelize.query('SELECT * FROM users').then(usuarios => {
    console.log(usuarios);
}).catch(e=>{
    cosnole.log(e)
})
~~~    

<p>2º - 
Utilizando método query novamente
Temos nosso produtoController que cuida das operações relacionadas aos produtos (listar todos, carregar produtos, etc).

O que nós queremos fazer é adicionar a lógica para o método de exibição. Este método recebe uma identificação do produto(id) e deve retornar o produto cuja identificação corresponda ao banco de dados. Finalmente, usando o método de envio do objeto de resposta, devemos devolvê-lo.

Para encontrar o produto em nossa base de dados podemos usar o método de consulta do objeto Sequelize e fazer uma consulta do tipo: "SELECT * FROM products where id = " + req.params.id.

Lembre-se que o resultado deve ser recuperado no método then. Será dentro deste método que você irá executar o código res.send().

</p>  

~~~
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

const mostrar = (req, res) => {
	//Seu código aquí
	sequelize.query("SELECT * FROM products WHERE id = "+ req.params.id).then(produto=>{
		res.send(produto)
	})
}
~~~   

<p>
3º - 

Método query III
Dentro do filmeController temos o método de deletar. Este método espera por uma identificação e remove o filme correspondente da base.

Para resolver o exercício será necessário executar dentro do método query algo como: "DELETE FROM filmes WHERE id = " + req.params.id

Para finalizar, dentro do método envie então a mensagem "Produto excluído com sucesso" e dentro do método de captura a mensagem "Erro ao excluir o produto".
</p>     

~~~
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

const deletar = (req, res) => {
	//Seu código aqui

	sequelize.query("DELETE FROM filmes WHERE id = " + req.params.id).then(() => req.send("Produto deletado com sucesso")).catch(() => req.send("Erro ao deletar um produto"))
}
~~~

