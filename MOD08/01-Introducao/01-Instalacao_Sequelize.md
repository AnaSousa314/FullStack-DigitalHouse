### Sequelize   

<p>
É um ORM que nos ajuda a conectar e interagir com o BD seja Postgree, MySQL, MariaDB, SQLite ou Microsoft SQL Server.
</p>  

Para instalar usamos uma das opções abaixo:  
* >yarn add sequelize  
* >yarn add -D sequelize-cli  

Ou

* >npm install sequelize  
* >npm install -D sequelize-cli  

Criamos as pastas database e config.  

No arquivo config/database.js adicionamos a configuração abaixo:  
~~~

const config = {
  username: 'root',
  password: 'root',
  database: 'crud_sequelize',
  host: '127.0.0.1',
  dialect: 'mysql' 
}

module.exports = config;
~~~    

Criamos o arquivo **.sequelizerc** na raíz do projeto e colocamos o código:  
~~~
const path = require("path");

module.exports = {
  config: path.resolve("config", "database.js"),
  'migrations-path': path.resolve("database", "migrations"),
  'models-path': path.resolve('models')
}
~~~  

Referências

https://sequelize.org/