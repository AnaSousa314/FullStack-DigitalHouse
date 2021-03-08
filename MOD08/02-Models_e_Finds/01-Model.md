### Model  

<p>
É a representação da nossa tabela no código, e com isso ganhamos recursos que nos permite fazer consultas e interações com o BD de uma forma simplificada utilizando sequelize.
</p>  

<p>
Criamos um model dentro do projeto app/models, ou seja, na raíz. Para isso colocamos uma linha no .sequelizerc informando ao arquivo onde estará nosso model.  
</p>  

~~~
"models-path": path.resolve(__dirname,'src','models');
~~~  

Agora rodamos o comando para criar o model.  

* ` yarn sequelize init:models `  

Dentro da pasta models criamos o arquivo de modelo, por exemplo, Usuario.js e adicionamos as colunas da tabela:  

~~~
module.exports = (sequelize, DataType)=>{
  const Usuario = sequelize.define('Usuario',{
    id_usuario:{
      type: DataType.INTERGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataType.STRING,
    email:{
      type: DataType.STRING,
      allowNull: true
    },
    senha: DataType.STRING
  },{
    tableName: 'usuario',
    timestamps: false
  })
}
~~~

Ou  

~~~
module.exports = (sequelize, DataType)=>{
  const Usuario = sequelize.define('Usuario',{
    id_usuario:{
      type: DataType.INTERGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataType.STRING,
    email:{
      type: DataType.STRING,
      allowNull: true
    },
    senha: DataType.STRING,
    createdAt: sequelize.DATE, 
    updatedAt: sequelize.DATE
  });

  return usuario;
}

// Quando não colocamos que o timestamp é false, ele vem por padrão com as colunas createdAt e updatedAt onde é guardado a data de criação e a data da última alteração
~~~  

Precisamos configurar o arquivo models/index.js para importar todas as models. Primeiro adicionando os pacotes necessários e inicializando o sequelize  
~~~
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');

const db = {};
const sequelize = new Sequelize(config)
~~~  

E o script abaixo adiciona todos os models da pasta models  
~~~
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
~~~  

E por fim, configuramos o sequelize para os atributos do db e exportamos tudo.  
~~~
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
~~~  

Referencias  
https://sequelize.org/master/manual/data-types.html  


##### Exercícios  

<p>
01º - 
Criando um model
Nossa base de dados possui uma tabela chamada usuarios que possui três colunas: nome, email e senha (todas do tipo string).

O objetivo deste exercício é ser capaz de criar um model associado à tabela de usuários.

Para criar nosso model vamos utilizar o método definir do objeto sequelize. Este método espera dois parâmetros: o primeiro é o nome da tabela e o segundo um JSON, cujas chaves são os nomes das colunas e os valores o tipo de dados.
</p>  

~~~
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define(
	//Seu código aquí
	'usuarios', {
		nome:  Sequelize.STRING,
		email: Sequelize.STRING,
		senha: Sequelize.STRING
	}
);

module.exports = Usuario;
~~~  

<p>
02º - 
Evitando erros ao criar models
Ao configurar nossos modelos Sequelize você faz algumas suposições sobre nossas tabelas. Uma delas é que espera que todas as nossas tabelas tenham as colunas criadas e atualizadas.



Se você criar um model de tabela que não tenha nenhuma destas colunas você pode obter o erro clássico "Unknown column 'createdAt' in 'field list'".



Para evitar isso, devemos dizer explicitamente ao Sequelize que não vamos usar nenhuma das colunas criadas ou atualizadas. Para isso, precisamos passar como terceiro parâmetro do método definir um JSON com esta estrutura: {timestamps: false}.



Neste exemplo já temos o model configurado para a tabela de usuários, mas precisamos ter certeza de que não temos as colunas created_at ou updated_at. O seu objetivo será adicionar a configuração correspondente.
</p>  

~~~
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define('usuarios',{
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
},{
   timestamps: false
}); //Coloque aqui o terceiro parâmetro com a configuração correta

module.exports = Usuario;
~~~
