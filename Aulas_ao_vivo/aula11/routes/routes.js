const express = require("express");
const router = express.Router();
const PrimeiroController = require("../controllers/PrimeiroController");

router.get("/", PrimeiroController.index);
router.post("/postIndex", PrimeiroController.postIndex);

router.get("/cumprimentar/:nome", PrimeiroController.cumprimentar);

//criando rota parametrizada com rotas opcionais //optional parameters
router.get("/calcular/:num1/:num2?", PrimeiroController.calcular);

/* 
    Desafio: será receber o parametro que vem e também o query param
    e criar uma frase
    Olá, nome + sobrenome

  */

//criando rota parametrizada com query params que serao informadas na url
router.get("/query/:nome", PrimeiroController.getQueryParams);

module.exports = router;
