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

/* GET para editar a receita */
router.get("/edit/:id",RecipeController.edit)

/* POST para alterar a receita */
router.post("/update/:id",RecipeController.updated)
module.exports = router;