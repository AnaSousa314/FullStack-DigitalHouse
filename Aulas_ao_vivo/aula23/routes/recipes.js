var express = require('express');
const RecipeController = require('../controllers/RecipeController');
var router = express.Router();

const RestController = require("../controllers/RecipeController")

/* GET home page. */
router.get('/', RestController.index);

/* POST salvar receitas */
router.post("/save", RecipeController.save);

/* GET para excluir receita */
router.get("/delete/:id", RecipeController.delete);

module.exports = router;