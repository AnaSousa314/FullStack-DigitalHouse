var express = require('express');
var router = express.Router();
const IndexController = require('../controller/IndexController');
const PizzasController = require('../controller/PizzasController')

/* GET home page. */
router.get('/', IndexController.showIndex);


router.get('/sobre',IndexController.showSobre)

// Criem uma rota do tipo get para '/pizzas/:id'
//direcionando a req para a PizzasController.getPizza

router.get('/pizzas/:id',PizzasController.getPizza)

module.exports = router;
