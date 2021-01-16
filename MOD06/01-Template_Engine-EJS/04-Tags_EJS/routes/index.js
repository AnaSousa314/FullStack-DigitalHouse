var express = require('express');
var router = express.Router();

var ContatoController = require('../controllers/ContatoController');
var EstudanteController = require('../controllers/EstudanteController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato',ContatoController.index);
router.get('/estudantes',EstudanteController.index)

module.exports = router;
