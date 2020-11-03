/* 
    Através do sistam de rotas do express podemos definir, de maneira simples, como responder nossa aplicação segundo o método HTTP e a rota que está chegando no servidor
*/

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Olá Mundo!');
});
app.get('/contatos',(req,res)=>{
    //res.send(['Contato1','Contato2']);
    //res.send({nome:'Ana',idade: 25,altura:1.65});
    res.send("Pagina Contatos");


})
//criando o servidor
app.listen(3000,'localhost',()=>{
    console.log("Servidor rodando na porta 3000");
});