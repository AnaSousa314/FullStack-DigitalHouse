const express = require('express')
const rotasProdutos = require('./routes/rotasProdutos')

const app = express()

app.use('/produtos',rotasProdutos);

app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"));
