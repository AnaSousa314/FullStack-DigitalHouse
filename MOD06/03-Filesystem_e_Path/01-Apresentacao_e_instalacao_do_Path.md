## Apresentação e Instalação do Path  

<p>
  Dependendo do SO, as rotas dos aquivos são visualizdas de forma diferente. Para resolver isso usamos o pacote nativo path.
</p>  

<p>
Solicitamos o módulo e o salvamos dentro de uma variável dentro do arquivo que queremos implementa-lo.
</p>  

~~~
const path = require('path')

console.log(path);

~~~  

* ` path.join() ` - nos permite descrever de maneira simples o route de uma pasta ou arquivo. Ele nos une os parâmetros que recebe e retorne um único route.  
~~~
let arquivo = path.join('..','data','usuarios','usuarios.json')
//  ../data/usuarios/usuarios.json
~~~  

* ` path.dirname() ` - permite conhecer a pasta na qual se encontra um arquivo. Recebe o route do arquivo e retorna o route da pasta que o contém.  

~~~
path.dirname('/users/dh/test.txt');
//  users/dh
~~~  

* ` path.extname() ` - permite conhecer a extensão do arquivo. Recebe o route do arquivo e retorna sua extensão.  

~~~
path.extname('/users/dh/test.txt');
//  .txt
~~~
