const express = require('express');

//criando aplicação express
const app = express();

//importando rotas
const routes = require("./routes/routes")

app.use(routes)

app.listen(3000, () => {
  console.log('Servidor rodando na porta: 3000');
});


/*
  Estudar mais o que é devDependecies

  npm install nodemon  -D

*/