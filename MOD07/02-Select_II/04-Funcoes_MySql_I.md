6

### Funções MySQL I  

* **CONCAT** - usamos para concatenar duas ou mais expressões. EX.:  
~~~
SELECT CONCAT("Ola","fulano");
// Ola fulano
~~~  

* **COALESCE** - para obter a primeira expressão que não é null. EX.:  
~~~
SELECT COALESCE(NULL,1,20,'Digital House');
// 1
~~~  

* **DATEDIFF** - calcula a diferença entre as datas data2 e data1, retornando um resultado inteiro.  
~~~
SELECT DATEDIFF(hora, '2017/08/25 07:00', '2017/08/25 12:45');
~~~  

* **EXTRACT** - extrair partes de uma data.  
~~~
SELECT EXTRACT(SECOND FROM '2014-02-13 08:44:21');
// 21

// WEEK, MONTH, QUARTER, YEAR
~~~  

* **REPLACE** - substituir um sequencia de caracteres por outra em uma cadeia.  
~~~
SELECT REPLACE('abc abc', 'a', 'B');
//Bbc Bbc
~~~  

* **DATE_FORMAT** - usamos para formatar a data.  
~~~
SELECT DATE_FORMAT('2017-06-15', '%W %M %e %Y'); 
// Thursday June 15 2017
~~~  

* **CASE** - avalia as condições e retorna a primeira que for cumprida