### Leitura de Arquivos

#### .readFileSync()  

<p>
É um método que vem no pacote nativo file system que nos permite recuperar dados dentro de um arquivo para poder lê-los. Recebe dois parâmetros:  
</p>  

* **route** do arquivo que queremos ler
* **encoding** do arquivo.  

~~~
const fs = require('fs');
let sitcoms = fs.readFileSync('sitcoms.json',{encoding: 'utf-8'});
~~~  

<p>
  Se estivermos lendo um arquivo JSON, precisamos converter essa string em um objeto literal, para isso usamos:  
</p>  

~~~
let sitcoms = fs.readFileSync('sitcoms.json',{encoding: 'utf-8'});

let sitcomsJson = JSON.parse(sitcoms);
~~~  

#### OBS.:  

* **readFile()** é executado de maneira *assíncrona*, ou seja, não bloqueia a execução do restante do código.  

* **readFileSync()** é executado de maneira *síncrona*, ou seja, ele bloqueia a execução do restante do código até concluir a operação.  

#### Exercícios  

<p> 1ª - 
Exercício: Exerpimentando o método readFileSync
O módulo File System vem com uma funcionalidade que nos permitirá ler documentos facilmente.

O método readFileSync recebe como parâmetro o nome do arquivo que precisamos ler e retorna uma string com seu conteúdo. Ele também recebe um segundo parâmetro indicando que o encoding que deve ser usado para ler e retornar o conteúdo do arquivo. Este parâmetro é um objeto literal com o seguinte formato: {encoding: 'utf-8'}

Vamos testar como o readFileSync funciona lendo o conteúdo do arquivo "tarefas.txt".

Salve o conteúdo do arquivo "tarefas.txt" em uma constante chamada "tarefas" e, finalmente, execute um console.log para exibir o conteúdo pelo console.
</p>  

~~~
const fs = require('fs');

// Escreva seu código aqui

const tarefas = fs.readFileSync('tarefas.txt',{encoding: 'utf-8'});

console.log(tarefas)
~~~

<p>
Exercício: Lendo o JSON
Temos um arquivo chamado produtos.json que possui um bloco de texto com um json de produtos.

Usando readFileSync armazene o conteúdo de produtos.json em uma constante chamada produtos e mostre-a com um console.log

Não se esqueça de que o json dentro do arquivo está em formato de  bloco de texto, portanto pode ser necessário utilizar JSON.parse para convertê-lo em objeto.
</p>  

~~~
const fs = require('fs');

// Escreva seu código aqui

const produtos =  fs.readFileSync('produtos.json',{encoding: 'utf-8'});

console.log(JSON.parse(produtos))
~~~