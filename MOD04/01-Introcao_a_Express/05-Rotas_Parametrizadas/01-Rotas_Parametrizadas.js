/* 
    Express nos permite criar rotas dinâmicas nas quais definimos qual parâmetro será utilizado
*/

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Olá Mundo!');
});

app.get('/contatos',(req,res)=>{
    res.send("Pagina Contatos");
});

//com id obrigatório na rota
app.get("/produtos/:id",(req,res)=>{
    //let id = req.params.id
    let {id} =req.params;
    console.log("Eu tenho um produto com o id: ",id);
    res.send("Eu tenho um produto com o id: "+id)
})

//com id opcional na rota
app.get("/produto/:id?",(req,res)=>{
    //let id = req.params.id
    let {id} =req.params;
    console.log("Eu tenho um produto com o id: ",id);
    res.send("Eu tenho um produto com o id: "+id)
})

//criando o servidor
app.listen(3000,'localhost',()=>{
    console.log("Servidor rodando na porta 3000");
});