const express = require('express');

const router = express.Router();

//Rota raíz dos produtos / Inicio
router.get('/',(req,res)=> res.send("Rota raíz"));

// Rota que exibe o detalhe de um produto
router.get('/detalhe/:id',(req,res)=>{

})

module.exports = router;