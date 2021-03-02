5:10
### Session 

<p>
É uma variável que está acessível em todo o site. Nos permite salvar e compartilhar informação do mesmo usuário entre as visualizações.
</p>  

<p>
Os usuários não podem se identificar a menos que usemos um mecânismo para isso. Usamos session.  Quando usada, cada usuário recebe uma sessão única, podendo armazenar o estado desse usuário.
</p>

<p>
No lado do servidor armazenamos dados relevantes do usuário como login, senha, cor de fundo. Já no lado do cliente geramos um identificador exclusivo que associará o usuário a todas essas informações.
</p>  

<p>
Importante: os dados da session só existem enquanto o navegador estiver aberto, quando fechado todas as informações são excluídas.
</p>  

#### Implementar Session  

1.Instalar  
* ` npm install epress-session --save `  
 
2.Solicita-o no entry poit da aplicação, o app.js  
~~~
const session = require('express-session')
~~~

3.Configura como middleware em nível de aplicação. Executamos session() passando como argumento um objeto literal com a propriedade secret com um texto qualquer exclusivo, para identificar o nosso site.  
~~~
app.use(session({secret: "Nossa mensagem secreta"}));
~~~  

4.Quando quiser definir e armazenar informação, deve-se chamar a propriedade session do objeto request:   
~~~
req.sesion.corFundo = 'Violeta';
~~~  

5.Para ler a informação de session  
~~~
let corFundo = req.session.corFundo
~~~  

*OBS.: toda informação que armazenamos na variável session estará disponível para usar em todas as visualizações do site.*  

Exemplo de função de autentificação:  
~~~
function auth(req,res,next){
  if(typeof(req.session.usuario) != "undefined"){
    return next()
  }else{
    return res.send("Você precisa estar logado para acessar")
  }
}
~~~

#### Exercícios  

<p>
1º - Configurando uma Sessão
Agora vamos trabalhar com sessões.

A sessão é usada para armazenar informações sobre o usuário, independentemente se o usuário mudar de url. Mas antes de podermos usar a sessão, precisamos de fazer uma pequena configuração.


Neste exercício você terá que fazer um require de "express-session" e guardá-la na constante session.

Desta forma, você precisa inicializar o middleware session: session({secret: "frase secreta"})
</p>  

~~~
const express = require('express');
const app = express();

// comece se código aqui

const session = require('express-session');

app.use(session({secret: "frase secreta"}));

~~~  

<p>
2º - Alterando o Idioma de um Site
Neste exercício temos um controller que irá salvar na sessão o idioma de preferência do usuário. Mais tarde podemos usar esta variável de sessão para exibir o conteúdo no idioma selecionado.

Para fazer isso, dentro do controlador vamos salvar o valor do parâmetro idioma que recebemos por get dentro do atributo idioma do objeto session. Lembre-se que para salvar informações dentro deste objeto, precisado do request: req.session.

Para obter a informação do idioma enviado pelo usuário, nós fazemos uma consulta através do objeto query: req.query.idioma
</p>  

~~~
const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const alterarIdioma = (req, res) => {
	// escreva seu código aqui

	req.session.idioma = req.query.idioma
	res.redirect('/');
}

~~~