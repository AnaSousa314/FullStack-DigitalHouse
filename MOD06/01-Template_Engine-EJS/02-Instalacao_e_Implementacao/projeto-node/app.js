//Essa é a forma manual de se fazer o projeto com express e engine

const express = require("express")

const app = express()

// .set()  é um método que nos permite definir confihurações expressas. É executada sobre a variável que tem a execução expressa associada, na maioria dos casos chamada 'app'. Para montar o template engine passamos a string 'view engine' e o nome do motor modelo que instalamos. Como abaixo
app.set('view engine', 'ejs')

/* Para configurar a pasta que armazena os arquivos nós passamos a string 'view' e caminho absoluto para esta pasta usando __dirname. 

app.set('view',__dirname + '/visualizacoes-de-pastas');

*/


app.listen(3000,()=>{
    console.log("Server rodando")
})