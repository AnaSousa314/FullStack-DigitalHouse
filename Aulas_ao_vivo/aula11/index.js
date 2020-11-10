const express = require('express');

//criando aplicação express
const app = express();

//assim consegue pegar o que foi escrito no req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//importando rotas
const routes = require("./routes/routes")

app.use(routes)




app.listen(3000, () => {
  console.log('Servidor rodando na porta: 3000');
});
