const express = require('express')
const produtoController = require('../controllers/ProdutoController')

const router = express.Router();

router.get('/criar',produtoController.criarProduto)

router.get('/deletar/:id',produtoController.deletarProduto)

module.exports = router