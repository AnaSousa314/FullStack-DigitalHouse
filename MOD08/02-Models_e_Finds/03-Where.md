### Where  
<p>
Para filtrar dados usamos o WHERE junto com um método find.
</p>  

Para adicionar uma condição basta passar o atributo **where** para o método **findAll**:  

~~~
// Inclui o model referente a tabela
const Carro = require('models/carros.js');

// Dentro do where passamos o atributo conforme a coluna da tabela e o valor a ser procurado
Carro.findAll({
  where:{
    Marca: "Fiat"
  }
}).then((resultados)=>{
  console.log(resultados)
})
~~~  

Referencias   
https://sequelize.org/master/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database  

#### Exercícios  

<p>
1º - 
Exercício: Buscando carros pela marca
O método findAll nos traz todas as linhas de registros que temos em nossa base. Se precisarmos filtrar o resultado, podemos passar um JSON como parâmetro do métodos com uma query dentro.

Neste exercício, temos o model Auto. Nosso objetivo será trazer todos os carros cujas coluna de marcas correspondam ao valor "Fiat".
</p>  

~~~
const Auto = require('model/autos.js');

Auto.findAll(
	//escreva seu código aqui
	{
		where:{
			marca: "Fiat"
		}
	}
).then(autos => {
	console.log(autos)
});
~~~  

<p>
2º - 
Exercício: Selecionando pela conta gmail
Neste exercício, vamos buscar todos os usuários que possuem uma conta Gmail. Para fazer isso, vamos precisar perguntar dentro do findAll se os valores contidos coluna email terminam com a string de texto "@gmail.com".
Até agora o where esperava um JSON cuja chave era a coluna a ser pesquisada e valor era o que queríamos pesquisar. Isto nos trouxe combinações idênticas, é como usar o mesmo operador do MySQL. Mas agora vamos precisar usar um operador similar, ou seja, vamos ter que recriar com sequelizar esta consulta MySQL: 'SELECT * FROM users WHERE email LIKE "%gmail"''.

Para isso, dentro do where onde vamos passar um JSON com o nome da coluna e cujo valor é um novo JSON: { [Op.like]: '%gmail.com'}
</p>  

~~~
const Sequelize = require('sequelize');
const Usuario = require('model/usuarios.js');
const Op = Sequelize.Op

Usuario.findAll({
	//Escreva seu código aqui
	where:{
		email: {[Op.like]: '%gmail.com'}
	}
}).then(usuarios => {
	console.log(usuarios)
});
~~~