const path = require("path")
//npm install path

module.exports = {
    index(req,res){
      let pathFile = __dirname + '/teste.html'
      res.sendFile(pathFile) //ele renderiza o teste.html
        //res.sendFile(path.join(__dirname + '/teste.html'));
    },

    postIndex(req,res){
      console.log(req.body)
    },

    cumprimentar(req,res){
  
        //console.log(req.params)//aparece no terminal
      
        //console.log(req.url)//a rota que esta sendo acessada na aplicação
       // console.log(req.method)//o metodo que esta sendo usado
        //console.log(req.headers)
        //console.log(req.cookie)
        console.log(res.statusCode)
        //console.log(res)

        let {nome} = req.params;
         
        res.send("Olá, "+nome );  
      },
    calcular(req,res){
   
        console.log(req.params)
      
        let {num1,num2} = req.params;
        
        if (num2 != undefined) {
          let resultado =  parseInt(num2) + parseInt(num1)
          
          res.send("O valor da soma dos parametros informados na url é: " + resultado)
        } else {
          res.send("O valor do primeiro parametro informado na url é: "+num1)
        }
      },
    getQueryParams(req,res){
        const {nome} = req.params
        const {sobrenome} = req.query;
  
        res.send("Olá "+ nome+" "+sobrenome)
        console.log(sobrenome)
    }

}