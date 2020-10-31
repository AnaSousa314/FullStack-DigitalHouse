//Desafio - criar um servidor com express e utilizar o método listen
//contendo dentro um console.log('Servidor rodando na porta: numeroDaPortaEscolhida')


const express = require('express');

const app = express();

app.get('/', (req,res)=>{
  res.send("Olá")
});

/* //Desafio - Criar uma rota parametrizada, que irá se chamar /cumprimentar 
e terá um parâmetro que será um nome, logo, ele terá que receber esse parâmetro
que foi informado e exibir uma mensagem de cumprimento "Olá, nome" */

//criando rota parametrizada
app.get('/cumprimentar/:nome', (req,res)=>{

  console.log(req.params)//aparece no terminal

 // let nome = req.params.nome
  let {nome} = req.params
   
  res.send("Olá, "+nome )
  
});

/* Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
deverá retornar ele, ou, caso recebe os dois parâmetros terá que somar os dois e retornar
o resultado.
 */

//criando rota parametrizada com rotas opcionais //optional parameters
app.get('/calcular/:num1/:num2?', (req,res)=>{
 
  console.log(req.params)

  let {num1,num2} = req.params;
  
  if (num2 != undefined) {
    let resultado =  parseInt(num2) + parseInt(num1)
    
    res.send("O valor da soma dos parametros informados na url é: " + resultado)
  } else {
    res.send("O valor do primeiro parametro informado na url é: "+num1)
  }
 
});





app.listen(3000, () => {
  console.log('Servidor rodando na porta: 3000');
});
