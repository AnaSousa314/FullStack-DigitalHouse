### Create  

Permite criar um registro no BD por meio de um objeto javascript, onde cada atributo será o nome da coluna.   

O método **create** recebe um objeto, sendo que os atributos têm o mesmo nome das colunas no BD.  

~~~
Usuario.create({
  nome: 'Peter Capaldi',
  email: 'peter@email.com',
  senha: '123456'
})
~~~  

O resultado é uma nova linha na tabela Usuário.   

#### bulkCreate

Além de criar um único registro, você também pode criar várias instâncias ao mesmo tempo usando **bulkCreate**.  

Basta usá-lo no lugar do create, e passar um array de objetos como parâmetro:  

~~~
Usuario.bulkCreate([
  {
  nome: 'Peter Capaldi',
  email: 'peter@email.com',
  senha: '123456'
  },
  {
  nome: 'Joao Silva',
  email: 'joao@email.com',
  senha: 'joao456'
  },]

)
~~~   

Referencias  
https://sequelize.org/master/manual/model-instances.html  

https://sequelize.org/master/manual/model-instances.html  


#### Exercícios  

<p>
Exercício: Criando um usuário
Suponha que tenhamos um model de Sequelize chamado Usuário. Este model possui três atributos: nome, email, senha, todos eles do tipo string.



O que devemos fazer é, a partir desse model, inserir um usuário no banco de dados indicando um valor para cada atributo.



Para resolver isso, lembre-se de que você deve usar o método create do seu model.
</p>  

~~~
const Usuario = require('model/usuario.js');  

Usuario.create({nome: 'Peter Capaldi', email: 'peter@email.com', senha: '123456'})
~~~  

<p>
2º - 
Exercício: Criando vários usuários
Em certas situações, precisamos fazer mais de um registro no banco de dados. Embora possamos usar o método create várias vezes, a sequenciação facilita essa tarefa com o método bulkCreate. Este método recebe um array, em que cada posição é um objeto com as mesmas características do objeto que o método create recebe. Em outras palavras, o método bulkCreate é como o método create, mas com a vantagem de permitir a inserção de vários registros ao mesmo tempo.

Neste exemplo, temos o model de filme. Nosso objetivo é inserir dois filmes usando o método bulkCreate. Cada filme a ser inserido deve ter um título e um gênero (para os nomes dos atributos, use "titulo" e "genero" sem acentos).
</p>  

~~~
const Filme = require('model/filme.js');

Filme.bulkCreate([
    {titulo: 'Batman', genero: 'Ação'},
    {titulo: 'Toy Story', genero: 'Animação'}]
);
~~~   

<p>
3º - 
Exercício: Criando Produtos
Neste exemplo, temos o controller produtoController que possui o método create. Ao mesmo tempo, existe um formulário com os campos nome e preço e que envia esses dados para o nosso controlador, através de uma solicitação do tipo POST.

A ideia do exercício é poder recuperar os dois campos e usar o model do produto e inseri-los em nosso banco de dados.

Para isso, será necessário usar o método create do modelo do produto. Como parâmetro do método, devemos passar um JSON com os atributos nome e preco (sem acentos). Teremos que recuperar os valores para esses atributos a partir da requisição. 
</p>  

~~~
const Produto = require('model/produto.js');

const produtoController = {
  create: (req, res) => {
    // Seu código vem aqui
    const preco = req.body.preco
    const nome = req.body.nome

    Produto.create({
      nome,
      preco
    })
  }  
}

~~~