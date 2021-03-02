### Cookies  
4:15  10
<p>
São arquivos que podemos salvar no lado do cliente, ou seja, no navegador do usuário.
Colocamos um tempo de vida útil nos cookies, o que significa que ele deixará de existir quando esse tempo acabar, e não quando o usuário fecha o navegador.
</p>  

#### Implementando Cookies  

Instalamos   
* ` npm i cookie-parser --save `  

Para criar um cookie e guardar nele, nós executamos o método cookie sobre o objeto response, passando os argumentos:  

* O **nome** que quero atribuir a esse cookie. Esse nome será uma propriedade do cookies.  

* O **valor**   
~~~
res.cookie('time','Palmeiras');
~~~   

Para ler as informações de um cookie, usamos o request, chamando o objeto cookies, seguido do nome cookie que definimos anteriormente:  
~~~
console.log(req.cookies.time);
~~~  

Exemplo de uso do cookie  

~~~
const fs = require('fs');
const path = require('path');

const cookieLogin = (req,res,next)=>{
  
  if(req.cookies.logado != undefined && req.session.usuario == null){
    let email = req.cookies.logado;

  let usuario = JSON.parse(fs.readFileSync(path.join('usuarios.json),{encoding:'utf-8'}))
  }
}
~~~


#### Exercícios  

<p>
Definir Cookie
Os cookies são super fáceis de usar. Para praticarmos, neste exercício precisamos salvarem um cookie o atributo "ultimoAcesso" com o valor da data atual.

O propósito disso é saber, quando o usuário acessar no nosso site novamente, quanto tempo se passou desde a última visita.

Para isso, dentro do controller vamos usar o método cookie do objeto response. Este método espera como primeiro parâmetro o nome do cookie, neste caso "ultimoAcesso". O segundo parâmetro será a data de acesso, isto podemos obter aplicando new Date().
</p>  

~~~
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	//Escreva seu código aqui
	res.cookie("ultimoAcesso", new Date())
}
~~~  

<p>
2º - Preferências do Usuário
Neste exercício, nosso site pode ser exibido em diferentes estilos css. O estilo padrão é mostrado na tela como "default", mas damos a possibilidade ao usuário de alterá-lo. Não apenas alterá-lo, como também guardamos a escolha deles em um cookie chamado estilo.

No controller do projeto vamos reenderizar uma visualização. Nosso objetivo é descobrir se há algum atributo estilo dentro do objeto cookie. Se houver, vamos passar para a visualização o estilo já salvo, se não, passamos o "default".

Para conseguir isso, utilize um condicional IF para verificar se existe um atributo de estilo dentro do cookie. Se sim, dentro do atributo if definimos uma variável chamada estilo com o valor armazenado no cookie. Caso contrário, em ELSE, defina a variável estilo com o valor "default".
</p>  

~~~
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	let estilo;

	//Crie sua condição aqui
	if(req.cookies.estilo != undefined){
		estilo = req.cookies.estilo
		res.render('/', {estilo: estilo});
	}else{
		estilo = "default" 
		res.render('/',{estilo: estilo})
	}
	
}
~~~  

<p>
3º - Produtos Recomendados
Anteriormente no sistema contido deste exercício, era armazenado no navegador do usuário um cookie chamado "preferências". Agora, a partir do controller, queremos mostrar uma lista de produtos recomendados de acordo com as preferências do usuário.

Para atingir este objetivo, vamos recuperar o valor do cookie "preferências" e armazená-lo numa constante chamada também de "preferências".

A partir do valor recuperado traremos todos os produtos de listaDeProdutos cuja key corresponde a este valor. Nós armazenamos os produtos em uma constante chamada "produtos".

E por fim, passamos ao método render a constante produtos, chamando a view "recomendados".
</p>  

~~~
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listaDeProdutos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	camisetas: [
		"camisa de retalhos",
		"camisa bordada",
	]
}

const recomendados = (req, res) => {
	//Insira seu código aqui
	const	preferencias = req.cookies.preferencias;

		const produtos =  listaDeProdutos[preferencias]

		res.render('/recomendados', {produtos: produtos})
	
}
~~~