var express = require('express');
var router = express.Router();

var ContatoController = require('../controllers/ContatoController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato',ContatoController.index);

module.exports = router;
