### Relações 1:1 e 1:N 

#### Relações 1:1  

Para relacionamento 1:1 usamos o método **belongsTo** do Sequelize.  

Model Usuario com os atributos do código abaixo.  
~~~
module.exports = (sequelize, DataTypes)=>{
  const Usuario = sequelize.define('Usuario',{
    id: {...},
    nome: {...},
    email: {...},
    senha: {...},
    conjugeId: {...},
  });

  
 Usuario.associate = (models)=>{
   Usuario.belongsTo(models.Conjuge,{
     foreignKey: 'conjugeId', as: 'conjuge'
   })
 }
 return Usuario;

}
~~~  

Model Conjuge com os atributos do código abaixo  
~~~
  module.exports = (sequelize, DataTypes)=>{
    const Conjuge = sequelize.define('Conjuge',{
      id: {...},
      nome: {...},
      sobrenome: {...},
      usuarioId: {...},
    });
  };

  Conjuge.associate = (models)=>{
    Conjuge.belongsTo(models.Usuario,{foreignKey: 'usuarioId', as: 'usuario'});
  };
  return Conjuge;
~~~  

##### Testando relacionamento  

Para verificar se o relacionamento criado na model deu certo, basta fazer uma query usando include:  

~~~
Usuario.findOne({
  where: {email: 'clara@gmail.com'},
  include: 'conjuge'
}).then((resultados)=>{
  console.log(resultados);

  // Para trazer o conjuge, use o resultado que recebeu por parâmetro junto com o atributo 'conjuge'
  console.log(resultados.conjuge)
})
~~~  

Referencias  
https://sequelize.org/master/manual/associations.html  


#### Relações 1:N  

Exemplo  
Model Usuario com os atributos do código abaixo (código resumido)  
~~~
module.exports = (sequelize, DataTypes)=>{
  const Usuario = sequelize.define('Usuario',{
    id: {...},
    nome: {...},
    email: {...},
    senha: {...},
  });

  
  //Use associate para criar um relacionamento, no caso 1:N, usamos hasMany no Usuario
 Usuario.associate = (models)=>{
   Usuario.hasMany(models.Endereco,{
     as: 'enderecos'
   })
 };
 return Usuario;

}
~~~  

Model Endereco, vamos usar o módulo Usuario com os atributos do código abaixo (código resumido)  
~~~
module.exports = (sequelize, DataTypes)=>{
  const Endereco = sequelize.define('Endereco',{
    id: {...},
    logradouro: {...},
    usuario_id: {...},
  });

//Use associate para criar um relacionamento, no caso 1:N, usamos belongsTo no Endereco
  Endereco.associate = (models)=>{
    Endereco.belongsTo(models.Usuario,{as: 'usuario'});
  };
  return Endereco;
}
~~~  

##### Testando relacionamento   

Para verificar se o relacionamento criado na model deu certo, basta fazer uma query usando include:  

~~~
Usuario.findOne({
  where: {email: 'clara@gmail.com'},
  include: 'enderecos'
}).then((resultados)=>{
  console.log(resultados);

  // Para trazer o enderecos, use o resultado que recebeu por parâmetro junto com o atributo 'enderecos'
  console.log(resultados.enderecos)
})
~~~  

~~~
Endereco.findOne({
  where: {logradouro: 'Doutor Cardoso de Melo'},
  include: 'usuario'
}).then((resultados)=>{
  console.log(resultados)

  //Para trazer o usuario, use o resultado que recebeu por parâmetro junto com o atributo usuario
  console.log(resultados.get().usuario)
})
~~~  

~~~
Usuario.findByPk(1,{
  include: ['endereco']
}).then((resultados)=>{
  console.log(resultados)

// Para trazer o enderecos, use o resultado que recebeu por parâmetro junto com o atributo 'enderecos'
  console.log(resultado.get().enderecos)
})
~~~  

Referencias  
https://sequelize.org/master/manual/associations.html  

#### Exercícios  

<p>
1º - 
Exercício: Filme com Gêneros
Vamos imaginar que já criamos um modelo para gênero e agora queremos criar um para um filme.

O objetivo será indicar a relação entre um filme e um gênero no modelo "Filme". Ou seja, um filme pertence a um gênero.

Para definir isso, após a declaração do model do filme, será necessário chamar o método belongsTo, passando o model "Genero" como o primeiro parâmetro. O segundo parâmetro do método belongsTo será um objeto com a configuração para o ForeignKey e o "as" (apelido para o nome da relação). No nosso caso, a ForeignKey será a coluna chamada "genero_id" e indicaremos como alias "genero".
</p>

~~~
module.exports = (sequelize, DataTypes) =>{
    const Filme = sequelize.define('filmes',{
        titulo: DataTypes.STRING,
        genero_id: DataTypes.INTEGER,
    });
  
  //Seu código aqui!
  Filme.associate = (models)=>{
      Filme.belongsTo(models.Genero,{ foreignKey: 'genero_id', as: 'genero'})
  }
   return Filme
}

~~~  

<p>
2º - 
Exercício: Todos os filmes de um Gênero
Para este exercício, nosso objetivo será, após a definição do modelo Genero, vinculá-lo ao modelo Filme.

Nesse caso, um gênero tem muitos (has many) filmes. Para indicar isso, vamos usar o método hasMany do modelo Genero.

Para a configuração da relação, será utilizada a coluna "genero_id" como foreignKey. Indicaremos como apelido da relação (alias) "filmes".
</p>  

~~~
module.exports = (sequelize, DataTypes) =>{
    const Genero = sequelize.define('generos',{
        nome: DataTypes.STRING,
    });
  
  //Seu código aqui!
  Genero.associate = (models)=>{
      Genero.hasMany(models.Filme,{foreignKey:"genero_id",as: "filmes"})
  }
   return Genero
}

~~~  

<p>
3º - 
Exercício: Que filme é esse?
Nesse exemplo teremos um modelo Filme que tem já definida uma relação com o modelo gênero.

Queremos buscar o filme com id 1, e para isso podemos usar o método findByPk. É importante dizer que também queremos trazer o gênero do filme em nossos resultados.

Para conseguir isso, devemos passar como segundo parâmetro do método findByPk um objeto com o atributo include. O atributo include será um array com a lista de todos os relacionamentos que queremos trazer associados ao filme, no nosso caso, apenas o relacionamento genero.

E para nosso desafio se concluir, você deverá dar um console.log no atributo que contem o nome do gênero: filme.genero.nome
</p>  

~~~
const Filme = require('model/Filme.js');

// seu código aquí

Filme.findByPk(1,{
    include: ['genero']
}).then((filme)=>{
    console.log(filme.genero.nome)
})
~~~