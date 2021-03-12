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

#### Exercícios  

<p>
1º - 
Exercício: Filmes e Atores
No MySQL, ao indicar relacionamentos muitos para muitos, é necessário criar uma tabela dinâmica. Algo semelhante acontece com Sequelize. Para relacionar dois models por meio da relação belongsToMany, devemos primeiro criar um model "dinâmico".

Neste exemplo, queremos relacionar os models de filme e ator. Para isso, vamos criar o modelo FilmeAtor. Como na criação de qualquer model, o primeiro parâmetro é o nome da tabela, neste caso: "filme_ator". Como segundo parâmetro, passamos a JSON as colunas e suas propriedades. Sendo a representação de uma tabela dinâmica, ela terá duas colunas "filme_id" e "ator_id".

Além de indicar que cada uma dessas colunas é um número inteiro, devemos definir o parâmetro references indicando os atributos do model e key. O model será com qual model está relacionado e a chave para qual coluna ele aponta.

Para a coluna filme_id, o model será "Filme" e a key "id". Enquanto para a coluna ator_id, o model será "Ator" e a key "id".

Mãos à obra.
</p>  

~~~
const Sequelize = require('sequelize');
const sequelize = require('../database'); 

// seu código aqui
const Filme =  sequelize.define('Filme',{nome: Sequelize.STRING});

const Ator = sequelize.define('Ator',{nome: Sequelize.STRING});

const FilmeAtor = sequelize.define('filme_ator',{
    filme_id: {
        type: Sequelize.INTEGER,
        references:{
            model: 'Filme',
            key: 'id'
        }
    },

    ator_id:{
        type: Sequelize.INTERGER,
        references:{
            model: 'Ator',
            key: 'id'
        }
    }

});

module.exports = FilmeAtor;
~~~   


<p>
2º -
Exercício: Relacionamento Pivot
Depois de criar o model dinâmico, devemos estabelecer um relacionamento do tipo belongsTo com cada um dos modelos relacionados.

Em nosso exemplo, precisaríamos adicionar um belongsTo com Filme e outro com Ator. Como em todos os belongsTo, o primeiro parâmetro será o nome do model e o segundo um JSON indicando a ForeignKey (não é necessário definir "as").
</p>  

~~~
const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Ator = require('model/ator.js');
const Filme = require('model/filme.js');

const FilmeAtor = sequelize.define('filme_ator',{
    pelicula_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Filme',
    		key: 'id'
    	}
    },
    ator_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Ator',
    		key: 'id'
    	}
    }
});

// Seu código aqui
FilmeAtor.belongsTo(Filme,{foreignKey:"filme_id"})

FilmeAtor.belongsTo(Ator,{foreignKey:"ator_id"})

module.exports = FilmeAtor;
~~~  

<p>
3º - 
Exercício: Um pouco mais de filmes e atores
O objetivo deste exercício é relacionar o modelo do filme e ator através de um relacionamento muitos-para-muitos (N-M).

Para indicar isso, vamos usar o método belongsToMany no modelo Filme. Não se esqueça que devemos executar esse método dentro da função associate.

Para a configuração da relação, a ForeignKey será a coluna filme_id, com alias "atores" e a tabela intermediaria será o modelo FilmeAtor.
</p>  

~~~
module.exports = (sequelize, DataTypes) =>{
    const Filme = sequelize.define('filmes',{
        titulo: DataTypes.STRING,
        genero_id: DataTypes.INTEGER,
    });
  
  //Seu código aqui!

  Filme.associate = (listaModelos)=>{
      Filme.belongsToMany(listaModelos.Ator,{through: 'FilmeAtor', foreignKey: 'filme_id', as: 'atores'})
  }
   return Filme
}

~~~  

<p>
4º - 
Exercício: Buscando Atores
Neste exemplo, temos o modelo de filme que tem um relacionamento muitos-para-muitos com o ator.

Queremos trazer todas as informações do filme com id junto com os atores que ele associou.

Para conseguir isso, devemos passar como segundo parâmetro do método findByPk um JSON com o atributo include. O atributo include será um array com a lista de todos os relacionamentos que queremos trazer associados ao filme, no nosso caso, apenas o relacionamento "atores".

Finalmente, imprimiremos dentro do método e, em seguida, um console.log que nos mostra os atores do filme: filme.atores.

Como o relacionamento é de muitos para muitos, o atributo de atores será do tipo de array.
</p>  

~~~
const Filme = require('model/filme.js');

// seu código aqui

Filme.findByPk(1,{include:['atores']}).then(filme=> console.log(filme.atores))
~~~


<p>
5º - 
Exercício: Acrescentando Atores
Ao criar o relacionamento do tipo belongsToMany entre a sequenciação Filme e Ator, fornecemos os métodos setAtores, que permitem vincular um filme a um ou mais atores.

Neste exemplo, já temos uma instância de filme. O que faremos na instância do filme, execute o método setAtores, passando como parâmetro um array com os IDs dos atores que queremos vincular. Isso gerará automaticamente os registros na tabela dinâmica.

Link atores 3, 5 e 8
</p>  

~~~
const Filme = require('model/filme.js');

Filme.findByPk(1).then(filme => {
	// seu código aqui
	filme.setAtores([3,5,8])
});
~~~