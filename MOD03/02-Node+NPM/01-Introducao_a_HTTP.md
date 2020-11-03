## INTRODUÇÃO A HTTP  
* **HTTP** (*Hyper Text Tranfer Protocol*) é protocolo que admnistra as transações web entre os clientes e os servidores.  
* Dentro da estrutura de comunicação,chamamos de **request** cada vez vez que cliente solicita um serviço do servidor, e uma **response** cada vez que o servidor retorna uma resposta ao cliente.  
* **HTTPS** é um protocolo melhorado de HTTP. Usando este protocolo, o servidor codifica a sessão com um certificado digital, dando ao usuário certas garantias de que a informação enviada a partir dessa página não seré *interceptada* ou utulizada por terceiros.  

### Métodos de HTTP  
* **GET** - é utilizado para **solicitar informações** do servidor de uma recurso específico. Toda vez que digitamos um endereço no navegador ou acessamos um link, estamos usando o método GET. Se você enviar informações para o servidor usando esse método, ele irá viajar através da URL.  
* **POST** - Usado para **enviar dados** para o servidor. Esse método é mais seguro que o get, uma vez que a informação não viaja através do URL.  
* **DELETE** - **Elimina** um recurso presente no servidor.  
* **PUT** - Parecido com o post, é usado para **substituir** todas as informações atuais de um recurso presente no servidor.
* **PATCH** - Similar ao PUT. É usado para aplicar **modificações parciais** a um recurso do servidor.  

### Códigos de Status HTTP
* O Código possui três digitos. O primeiro respresenta um dos 5 tipos de respostas possíveis:  
1. 1xx Respostas informativas  
2. 2xx Respostas bem sucedidas  
3. 3xx Redirecionamentos  
4. 4xx Erros do Cliente  
5. 5xx Erros do Servidor  