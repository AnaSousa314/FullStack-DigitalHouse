const ContatoController = {
    index: (req,res)=>{
        return res.render('contato');/* é o nome da view que está na pasta views. No entanto, por padrão não se coloca a extensão, assim contato.ejs. 
        Também não é necessário colocar o caminho onde se encontra, pq ele já está definido no app.js*/ 
    },
}

module.exports = ContatoController