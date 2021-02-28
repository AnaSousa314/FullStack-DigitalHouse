## Escrever em arquivos  

#### .writeFileSync()  

<p>
É um método que vem no pacote nativo file system que nos permite escrever arquivos. Recebe dois parâmetros:  
</p>  

* 1º o **arquivo** em que queremos escrever  
* 2º o **conteúdo** que queremos escrever  


<p>
  Se passarmos o nome de um arquivo que ainda não existe, o mesmo método será responsável por criá-lo.
</p>

~~~
const fs = require('fs');
fs.writeFileSync('estreias-2020.txt','Titanic 2');
~~~  

<p>
  Os métodos desse pacote só trabalham com conteúdo do tipo  string. Por isso usamos o método abaixo para converter tudo em texto.
</p>  

~~~
const fs = require('fs');
let filme = {titulo: 'Titanic',minutos:560};

let filmeJson =  JSON.stringfy(filme);
fs.writeFileSync('lista-cores.txt', filmeJson);
~~~  

#### OBS.:  

* Quando os dados que queremos escrever chegarem a partir de um formulário, capture-os com a propriedade body do objeto request.  

* Usar o método **apendFileSync()** quando quisermos adicionar dados em um arquivo existente.  

* **writeFile()** é executado de maneira *assíncrona*, ou seja, não bloqueia a execução do restante do código.  

* **writeFileSync()** é executado de maneira *síncrona*, ou seja, ele bloqueia a execução do restante do código até concluir a operação.  

#### Execícios  

<p>
  Exercício: Guardando um JSON
Dado o seguinte json, salve-o em um arquivo chamado filmes.json

Lembre-se de que os objetos do tipo json não podem ser salvos diretamente em um arquivo de texto, eles devem primeiro ser transformados em uma string. Para isso, temos que usar JSON.stringify ().
</p>  

~~~
  const fs = require('fs');

const filmes = [
    {
        id: 1,
        titulo: 'Spider-Man: Longe de casa',
        duracao: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracao: 100,
        genero: 'Animação'
    },
    {
        id: 3,
        titulo: 'X-Men: Fênix Negra',
        duracao: 113,
        genero: 'Ação'
    }
];

fs.writeFileSync("filmes.json",JSON.stringify(filmes))
~~~  

<p>
  Exercício: Guardando em um JSON
No site a seguir, configuramos a rota para criar produtos. A rota é "/criar-produto" do tipo POST. Também já temos um produto predefinido, mas com atributos nome e preço nulos.

Teremos que receber as informações fornecidas pelo POST, definir os atributos do produto (nome e preço) e, finalmente, salvá-las em um arquivo chamado "produto.json".
</p>  

~~~
const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();

var produto = {
    nome: null,
    preco: null,
};

router.post('/criar-produto', (req, res) => {
    // Escreva seu código aqui

    let {nome,preco} = req.body;
    produto.nome = nome;
    produto.preco = preco;

    fs.writeFileSync("produto.json",JSON.stringify(produto))
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.listen(3000);
~~~  

<p>
Exercício: Adicionando conteúdo a um .txt
Temos um arquivo chamado "pendente.txt" com uma lista de tarefas.

O objetivo é adicionar a tarefa "aprender Node" à lista sem excluir o conteúdo atual.
</p>  

~~~
const express = require('express');
const fs = require('fs');

// Escreva seu código aqui

fs.appendFileSync("pendente.txt","aprender Node");
~~~

