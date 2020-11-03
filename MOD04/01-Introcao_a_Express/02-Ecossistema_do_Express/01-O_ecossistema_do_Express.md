## Ecossistema do Express

* `const app = express()` // express() é uma função de alto nível uqe retorna um objeto quando executada.  

* **request** e **response** são dois objetos literais que nos permitem acessar as requisições do cliente e as respostas do servidor.  

* `request.path()` //nos permite saber exatamente de onde veio o pedido.  

* `request.method()` //nos permite saber quel é o metodo HTTP da requisição.  

* `response.send()` // nos permite enviar como resposta uma **string**, um **ojeto literal** ou um **array** sem a necessidade de esclarecer que tipo de dados estamos enviando.  
