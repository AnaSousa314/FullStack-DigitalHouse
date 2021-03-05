### Where + Order By  

* **WHERE** - é uma função condicional usada para filtrar consultas. 
~~~
SELECT nome_colunaN
FROM  nome_tabela 
WHERE condicao
~~~  
 
Os únicos operadores que se diferem dos que usamos usualmente no JS são o:  
* = igual;
* <> ou != diferente    

Outros operadores:  
* IS NULL é nulo;  
* BETWEEN entre dois valores;
* IN lista de valores;  
* LIKE como...  

* **ODER BY** - usado para ordenar os resultados de uma consulta de acordo com valor dela. Pode ser ASC de ascendente e DESC de descendente.  
~~~
SELECT nome_colunaN
FROM  nome_tabela 
WHERE condicao 
ORDER BY nome_coluna1;
~~~  

Exemplo:  
~~~
SELECT nome, idade
FROM  usuarios
WHERE idade > 21
ORDER BY nome DESC;
~~~
