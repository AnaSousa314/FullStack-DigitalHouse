/*
    Uma das muitas funcionalidades do Express é a possibilidade de configurar um servidor.
 */

const express = require('express');

const app = express(); // assim teremos acesso a todas as propriedades e métodos do Express


app.get('/',(req,res)=>{
    res.send("Olá Mundo");
});


// criando um servidor
app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});