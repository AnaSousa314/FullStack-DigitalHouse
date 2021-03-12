### Destroy  

Permite excluir registros no BD.  

A função **destroy** recebe um objeto com o atributo **where**, onde definimos qual registro deve ser excluido:  

~~~
Usuario.destroy(
  {
    where:{id: '10'}
  }
);
~~~  

*SEMPRE coloque um critério para exclusão, sem isso, todos os registros da tabela serão apagados!*  

Não é possível desfazer a ação **destroy**, use esse método com atenção!    

Referencias  
https://sequelize.org/master/manual/model-instances.html  

#### Exercícios  

<p>1º - 
Exercício: Remover Filme
Da mesma maneira que inserimos e atualizamos dados em nosso banco de dados, o Sequelize também nos permite excluir registros. Para esta tarefa, o método destroy pode ser utilizado em qualquer um dos nossos modelos. Este método espera como parâmetro um objeto com uma query do tipo where que permita identificar a linha a ser excluída.



O objetivo deste exercício é remover o filme com um ID igual a 3.
</p>  

~~~
const Filme = require('model/filme.js')

Filme.destroy({
    where:{id:3}
})
~~~  

<p>
2º - 
Exercício: Remover Usuário
Da mesma maneira que um registro pode ser excluído por seu ID, o mesmo pode ser feito para alguma outra coluna que identifique exclusivamente o elemento.

Neste exercício, excluiremos um usuário com base no seu email. O objetivo é eliminar o usuário cujo email é igual a "kenny@south-park.com"

Para isso, usaremos o método destroy do model Usuario, passando como parâmetro uma consulta que faz um where pelo email.
</p>  

~~~
const Usuario = require('model/usuario.js');

Usuario.destroy({
    where:{email: 'kenny@south-park.com'}
})
~~~  

<p>
3º - 
Exercício: Removendo Vários Usuários
O método destroy permite, como o select, passar outros operandos para a consulta. Em vez de usar uma comparação de operador igual (a comparação padrão), podemos usar um like.

Neste exemplo, removeremos todos os usuários cujo provedor de email é aol.com. Ou seja, aqueles cujo email termina em  "aol.com".

Para isso, vamos executar o método de destruição do model Usuario. Dentro do where (no método destroy), vamos passar um objeto com o nome da coluna e cujo valor é um novo JSON com a seguinte sintaxe: email: {[Op.like]: '%aol.com'}
</p>  

~~~
const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy({
    where:{
        email: { [Op.like]: "%aol.com"}
    }
})
~~~
