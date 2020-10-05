//Para trabalhar com datas primeiro temos que criar uma variavel para instaciar o objeto Date
const data1 = new Date();

console.log(data1.getDay());
console.log(data1.getMonth() + 1);//retorna o mês, mas para o JS os meses e dias começam com indice zero, para mandar o correto pode-se colocar +1
console.log(data1.getFullYear());//retorna o ano completo 
console.log(data1);//retorna a data e hora do sistema
console.log(data1.getDate())//retorna o dia

const date = new Date('2020-01-04')
console.log(date.getMonth())//Retorna o mês da data criada e não do mês corrente, também começando o mês com indice 0
console.log(date)//retorna a data que criei 

//EXEC. 01

let data = new Date();

data.setDate(04)
data.setMonth(10)
data.setFullYear(2020) // o playground só aceita com setYear, mas no tereminal dele é impresso uma variável vazia
console.log(data)


//link para consulta => https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date