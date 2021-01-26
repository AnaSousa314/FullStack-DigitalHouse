const EstudanteController = {
    index: (req,res)=>{

        /* .render() é um método que se encontra dentro do objeto response da requisição. Nos permite enviar uma view ao navegador para que ele a renderize  */

        return res.render('estudantes');/* é o nome da view que está na pasta views. No entanto, por padrão não se coloca a extensão, assim contato.ejs. 
        Também não é necessário colocar o caminho onde se encontra, pq ele já está definido no app.js*/ 
    },
}

module.exports = EstudanteController;