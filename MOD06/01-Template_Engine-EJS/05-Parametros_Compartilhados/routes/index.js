var express = require('express');
var router = express.Router();

var HomeController = require("../controllers/HomeController")
var ContatoController = require('../controllers/ContatoController');
var EstudanteController = require('../controllers/EstudanteController')

/* GET home page. */
router.get('/', HomeController.index);

router.get('/contato',ContatoController.index);
router.get('/estudantes',EstudanteController.index)

module.exports = router;
