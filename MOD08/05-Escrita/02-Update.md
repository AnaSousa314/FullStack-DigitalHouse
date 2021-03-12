### Update  

Permite atualizar dados de um registro no BD.  

A função **update** recebe dois objetos, primeiro objeto com atributos e valor a serem atualizados e o segundo com um critério.  

~~~
Usuario.update(
  {
    nome: 'Joao' // atribuindo novo valor
  },
  {
    where: {id: '4'} //condição para atualizar somente o item escolhido
  }
);
~~~  

*SEMPRE coloque um critério para atualização, sem isso, todos os registros da tabela serão atualizados!*  

No BD não existe a opção de desfazer o comando, precisamos usar métodos com atenção, principalmente o **update** que altera informações nos registros.  

Referencias  
https://sequelize.org/master/manual/model-instances.html  

### Exercicios  

<p>
1º - 
Exercício: Atualizando o preço
Em nossa base temos um produto chamado "Smartphone x5 MEGA PRO".  O id dele é 1.  Nosso objetivo aqui é atualizar seu preço  para o valor de 899 devido a uma promoção.

Para esse desafio iremos usar um modelo  já definido  chamado Produto. Como vimos, o método update altera os dados em uma tabela. Este método, recebe como parâmetro dois objetos: o primeiro contendo as informações que iremos atualizar. O segundo com as condições para selecionarmos qual registro queremos alterar.
</p>  

~~~
const Produto = require('model/Produto.js');

Produto.update(
    {
        preco: 899
    },
    {
        where:{ id: 1}
    }
)

~~~  

<p>
2º - 
Exercício: Atualizando série
Em determinadas circunstâncias podemos usar o método update para atualizar mais de um registro em nossa base de dados. Nesse próximo desafio queremos mudar os valores da coluna genero  de todas as séries cujo o gênero seja comédia para sitcom.

A ideia por aqui é semelhante do nosso primeiro desafio, porém dessa vez, no nosso objeto de configuração ou query, devemos fazer um where pela coluna genero (sem acento!).
</p>  

~~~
const Serie = require('model/Serie.js'); 

Serie.update(
    {
        genero: 'sitcom'
    },
    {
        where: {genero: 'comédia'}
    }
)

~~~