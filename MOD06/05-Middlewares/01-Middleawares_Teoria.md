### Introdução a MIDDLEWARES  

1. Express trata o pedido e a resposta - **req,res** - como objetos. Ele recebe um pedido, processa-o e devolve um objeto como resposta.  

2. Cada pedido requer uma série de passos para ser processado. Express divide essas responsabilidades em funções chamadas middlewares.  

3. Middlewares são funções que são excutadas no meio da execução do pedido do cliente e da resposta ao mesmo.  

4. As rotas que requerem middlewares - além da solicitação e resposta - devem receber um terceiro parâmetro: a função **next**, seguinte.  

5. Em seguida permite a execução em cadeia de todas as funções necessárias que devem ser executadas antes de enviar a resposta ao cliente.  

6. Com middlewares podemos isolasr o código que nos permite resolver um determinado cenário e implementá-lo onde for necessário, evitando assim a repetição de código.  

7. Estas características adicionam uma camada de segurança. Se o middleware não retorna o que esperamos, ela **cortará** e retornará a resposta definida para esses casos.  
