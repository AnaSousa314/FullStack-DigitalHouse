### Relções N:N  

Para criar relações N:N no Sequelize nós usamos o método **belongToMany**.    

#### Tabela Intermediária  
Um filme tem vários atores e um ator faz vários filmes. Vamos usar esse cenário como exemplo de relação muitos pra muitos.  
Para isso precisamos de uma tabela intermediária FilmeAtor.  

*Sempre que tiver um relacionamento N:N, teremos uma tabela intermediária que faz associação as duas tabelas.*  

#### Model Filme  

No model Filme, utilize **belongToMany** para criar relação com a tabela FilmeAtor.  

~~~
module.exports = (sequelize, DataTypes)=>{
  const Filme = sequelize.define(Filme,{
    id:{...},
    titulo:{...},
    categoria:{...},
  });

  //Usando belongsToMany, adicione a relação com o model Ator e a tabela intermediária no atributo through
  Filme.associate = (models)=>{
    Filme.belongsToMany(models.Ator, {through:'FilmeAtor',foreignKey: 'filmeId', as: 'atores'})
  };

  return Filme;
};
~~~  

#### Model Ator  
No model Ator, utilize **belongToMany** para criar relação com a tabela FilmeAtor.  

~~~
module.exports = (sequelize, DataTypes)=>{
  const Ator = sequelize.define(Ator,{
    id:{...},
    titulo:{...},
    categoria:{...},
  });

  //Usando belongsToMany, adicione a relação com o model Filme e a tabela intermediária no atributo through
  Ator.associate = (models)=>{
    Ator.belongsToMany(models.Filme, {through:'FilmeAtor',foreignKey: 'AtorId', as: 'filmes'})
  };

  return Ator;
};
~~~  

#### Testando relacionamento  

Para trazer filmes relacionados a um ator use **include** e o parâmetro resultado com método **get()**  

~~~
Ator.findOne({
  where:{nome:'Julia', sobrenome: 'Roberts'},
  include:{
    association: 'filmes',
    through: {atributes:[]}
  }
}).then((resultado)=>{
  console.log(resultado);
  console.log(resultado.filmes);
})
~~~  


Para trazer atores relacionados a um filme use **include** e o parâmetro resultado com método **get()**  

~~~
Filme.findOne({
  where:{nome:'Batman'},
  include:{
    association: 'atores',
    through: {atributes:[]}
  }
}).then((resultado)=>{
  console.log(resultado);
  console.log(resultado.atores);
})
~~~  

Referencias  
https://sequelize.org/master/manual/associations.html