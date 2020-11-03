const express = require('express')

const router = express.Router();

router.get('/criar',(req,res)=>res.send("Criando um produto"))

router.get('/deletar',(req,res)=>res.send("Deletando um produto"))

module.exports = router