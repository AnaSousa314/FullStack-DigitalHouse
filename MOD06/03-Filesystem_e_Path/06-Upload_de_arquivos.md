### Upload de Arquivos  
2
7
npmjs.com/package/multer

<p>Primeiro instalamos o pacote que permitirá fazer esse upload.</p>  

* ` npm install multer --save `

<p>
Para fazermos o upload de um arquivo precisamos configurar nosso formulário no html.
Adicionando também o input do tipo file que permite o upload.
</p>  

* Adicionar na tag form o atributo **enctype="multipart/form-data"**  

~~~
<form method="POST" action="" >
  <input type="file" name="avatar">
</form>
~~~  

#### .diskStorage() 

<p>
Nos permite operar com os arquivos que queremos processar. Recebe um objeto literal com duas propriedades: 
</p>  

* ` destination ` - onde definiremos a pasta em que o arquivo será armazenado.  

* ` filename ` - onde indicaremos com qual nome esse arquivo será salvo no servidor.   

Ambas são funções que recebem três parâmetros: req, arquivo, callback.  

~~~
var storage = multer.diskStorage({
  destination:(req, file, cb) {

  },
  filename:(req, file, cb) {

  }
})
~~~  

##### destination  

<p>
Usaremos o callback para definir a pasta onde queremos armazenar os arquivos. O 1º parâmetro será null e, o 2º será o route para a pasta de destino.  
</p>  

~~~
var storage = multer.diskStorage({
  destination:(req, file, cb) {
    cb(null, 'public/img/avatars')
  },

  filename:(req, file, cb) {

  }
})
~~~  

##### filename

<p>
Usaremos o callback para definir o nome com o qual salavaremos o arquivo. O 1º parâmetro será null e, o 2º será o nome. Aqui vamos usar a variável file junto com o pacote path. Para criar o nome do arquivo, usaremos o método extname(), passando como parâmetro o nome original do arquivo para que retorne apenas a sua extensão. 
</p>  

~~~
filename:(req, file, cb) {
  cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
~~~  

Como ficaria o código completo:  

~~~
var storage = multer.diskStorage({
  destination:(req, file, cb) {
    cb(null, 'public/img/avatars')
  },
  filename:(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })
~~~  

*OBS.: devemos incorporar este código em cada arquivo que há um route que está implementando o upload de arquivos.*  

#### Configurar os routes  

<p>
Para que o route seja responsável pela solicitação de upload de arquivos, um novo parâmetro deve ser passado antes do callback: o método upload.any(). Além disso, um terceiro parâmetro deve ser passado ao callback -geralmente chamado next- para que tudo funcione
</p>  

~~~
route.post('/', upload.any(), (req,res)=>{...})
~~~   

#### Exercícios  

<p>1º -
Exercício: Preparando formulário para permitir o upload de arquivos
Ao carregar arquivos através do formulário, não apenas precisamos configurar nosso código no Node, mas também devemos adicionar uma configuração extra na tag form.



Dado o seguinte formulário, adicione o atributo enctype com o valor correspondente para permitir o envio de arquivos.
</p>  

~~~

    <form action="upload" method="POST" enctype="multipart/form-data">

    </form>

~~~  

<p>
2º - 
Exercício: Usando multer para subir arquivos
No Node, para fazer upload de arquivos, podemos usar ferramentas como multer. É simplesmente necessário adicioná-lo ao arquivo de rota onde nossa rota ou rotas são responsáveis ​​pelo upload de arquivos (imagens, documentos, etc.).

Neste exemplo, adicionaremos multer ao arquivo de routes user.js para permitir que os usuários anexem uma imagem durante o registro.

Para isso, será necessário requisitar o módulo multer, criar o armazenamento, inicializar a variável de upload e adicionar a rota que já temos definidas a expressão upload.any() como segundo parâmetro.

Para ver a configuração que a multer precisa para funcionar, consulte a documentação oficial: https://www.npmjs.com/package/multer#diskstorage.
</p>  

~~~
const express = require('express');
const router = express.Router();
const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

router.post('/register',  upload.any(), usersController.save);
~~~
