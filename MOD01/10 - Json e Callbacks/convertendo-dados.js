
//typeof()
let texto = 'abc';
let numero = 1.10;
console.log(typeof(texto))
console.log(typeof(numero))

//parseInt()
let text = "5";
let alfa = '123abc'
let num = parseInt(text);
let num2 = parseInt(alfa); //só dá certo se o primeiro caractere for um número
console.log(num)
console.log(typeof(num))
console.log(num2)

//parseFloat
let numbe = 12.6
let decimal = parseFloat(numbe);
console.log(decimal)

//Number()
let tex = "5";
let alf = '123abc'
let numer = Number(tex);
let numer2 = Number(alf)
console.log(numer)
console.log(typeof(numer));
console.log(numer2)


//String()

let numb = 111;
let textoo = String(numb);
let array = ['João', 123];
let objeto = {nome:'Ana',idade:25};
console.log(typeof(textoo))
console.log(textoo)
console.log(String(array))
console.log(String(objeto))//ele não é capaz de transformar objeto


//.toString()
let numb2 = 111;
let textoo2 = numb2.toString();
console.log(typeof textoo2)
console.log(textoo2)


var subtracao = 2 - 3;
console.log(typeof subtracao)