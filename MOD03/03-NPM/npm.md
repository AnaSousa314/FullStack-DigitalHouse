## Node Package Manager - NPM  

* O **NPM** é o gerenciador de pacotes Node e nos permite baixar e instalar bibliotecas para incorporar ao nosso projeto.    

Com ele podemos instlar os pacotes **localmente**, disponíveis para uso em um projeto específico, ou **globalmente**, disponível para uso quando quisermos. 

* *main* refere-se ao **entry point**, ou seja, o ponto de entrada da nossa aplicação, onde colocaremos o nome do nosso arquivo principal, que, por conveção, chama-se *app.js*.   

* Dentro da pasta **node_modules**, serão criadas as pastas das bibliotecas que instalamos. Cada um conterá os arquivos ncessários para poder trabalhar com essa biblioteca dentro do projeto.   

* `npm init` // inicia o projeto Node    

* `npm install nomePackage --save` // serve para instalar pacotes no projeto e o node-modules(que guarda esses pacotes), o --save serve para registrar no package.json que esse pacote é usado no projeto  

* `npm uninstall <nome_pacote> --save` //serve para desinstá-lar um pacote e salva isso package  
 
* `npm update` // atualiza todas as dependências do projeto


