var express = require('express');
//const { route } = require('.');
var router = express.Router();

const UserController = require("../controllers/UserController");

/* retornando formulario de cadastro de usuario*/
router.get('/create', UserController.create);

/*  processando requisição do formulario de cadastro para salvar usuario */
router.post('/save',
UserController.save)

/* retornando formulario de login de usuario */
router.get('/login', UserController.login);

/* processando requisicao do formulario de login para autenticar usuario */
router.post('/authenticate', UserController.authenticate);

/* processando requisição p efetuar logout */
router.get('/logout',UserController.logout)


module.exports = router;
