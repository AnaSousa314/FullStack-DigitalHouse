/* Módulo nativo HTTP */

const http = require('http');

http.createServer((req,res)=>{
    //console.log("Servidor está rodando...")

    res.writeHead(200,{"Content-type":"text/palin"});/* 200 é o status, e Content é o formato da informação */

        switch (req.url) {
            case "/":
                res.end("Você está na página home");
                break;
            case "/contato":
                res.end("Você está na página contato");
                break
            default: 
                res.end("Você está no nosso servidor")
                break;
        }

    res.end("Meu primeiro Servidor!");

    
}).listen(3000,"localhost"/* ,hostname //se não coloca o nome, ele assume o domínio como localhost */)