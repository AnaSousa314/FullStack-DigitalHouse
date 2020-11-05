module.exports = {
    index(req,res){
        res.send("Você está na HOME")
    },
    cumprimentar(req,res){
  
        console.log(req.params)//aparece no terminal
      
       // let nome = req.params.nome
        let {nome} = req.params
         
        res.send("Olá, "+nome )
        
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