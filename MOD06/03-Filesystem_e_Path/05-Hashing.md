### Hashing

<p>
  Funções hash nos permitem criptografar dados sensíveis. Essas funções possuem duas características principais:  
</p>  

* a opção de **criptografar um dado**  
* a opção de **comparar** um dado recebido com um dado **hasheado** para verificar se coincidem ou não.  

<p>
Para fazer isso usamos o pacote bycrypt.
</p>  

* ` npm install bcrypt --save `  

#### .hashSync()  

<p>
É um método que traz o pacote bcrypt que nos permitirá criptografar dados. Recebe dois parâmetros:
</p>  

* O **dado** a ser criptografado  
* O **sal** que queremos adicionar a criptografia.  

<em>O sal é um pequeno dado adicional que torna os hash mais difíceis de crackear. Geralmente no valor 10 ou 12</em>  

~~~
const bcrypt = require('brypt');
let passCriptografada = bcrypt.hashSync('casa123', 10);
~~~  

#### .compareSync()  

<p>
 Nos permite comparar um texto simples com um hash para saber se coincidem ou não. Retorna um booleano e retorna dois parâmetros: 
</p>  

* 1º o **texto simples**.
* 2º o **hash** com o qual queremos compará-lo.  

~~~
let check = brypt.compareSync('casa123',passCriptografada);
console.log(check) //true

if(!bcrypt.compareSync(senha,senha2)){
  console.log("Senha invalida")
}
~~~  

#### OBS.:  

* **hashFile()** e **compare()** são executados de maneira *assíncrona*, ou seja, não bloqueia a execução do restante do código.  

* **hashFileSync()** e **compareSync** são executados de maneira *síncrona*, ou seja, ele bloqueia a execução do restante do código até concluir a operação.  

#### Exercícios 

<p>
1º - Exercício; Testando o hash
Vamos experimentar o funcionamento do módulo hash. A ideia é, dado uma constante que tenha como valor uma senha, aplicar o método hashSync para a encriptar.

Primeiro você deve declarar a constante bcrypt e iniciá-la com o require do módulo bcrypt.

Criar uma nova constante chamada hash e atribuir o resultado da aplicação do método hashSync a senha.

Por fim, devemos fazer um console.log para mostrar o valor da constante hash.
</p>  

~~~
const password = '123456';
const bcrypt = require('bcrypt');

const hash = bcrypt.hashSync(password, 10);

console.log(hash)
~~~

<p>
02º - Exercício: Validando informação hasheada
A idéia de usar o hash é salvar informações confidenciais sem revelar seu conteúdo original. Mas o que acontece quando precisamos recuperar essas informações para, por exemplo, validar o login de um usuário.

Neste exemplo, já temos uma sequência de texto criptografada anteriormente, que armazenamos na constante hash1. Nosso objetivo é criptografar a sequência de texto '123456', armazená-la na constante hash2 e, finalmente, usar um if para comparar o hash1 e o hash2 para ver se são iguais.

Dentro do if, execute um console.log que diga 'os hashes são iguais'.
</p>  

~~~
const bcrypt = require('bcrypt');
const hash1 = bcrypt.hashSync('123456', 10);

// Escreva seu código aqui

const hash2 = bcrypt.hashSync('123456',10);

if(hash1 == hash2){
    console.log("os hashes são iguais'")
}
~~~  

<p>
3º - Exercício: Usando o método compareSync
Neste exemplo, temos definida a constante hash. Ela guarda dentro dela o valor "123456" criptografado.

Nosso objetivo é verificar se "123456" corresponde ao valor do hash. Para isso, devemos usar o método compareSync do módulo bcrypt e comparar o resultado dentro de um if. Finalmente, dentro do if vamos executar um console.log que diz 'a senha está correta'.
</p>  

~~~
const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync('123456', 10);

// Escreva seu código aqui

if(bcrypt.compareSync("123456",hash)){
    console.log('a senha está correta')
}

~~~