### Limit e Offset  

* **LIMIT** - limita o número de linhas(registros/resultados) retornadas nas consultas SELECT e deletados no DELETE.  

~~~
SELECT *
FROM  filmes 
WHERE premios > 4
LIMIT 10;
~~~  

* **OFFSET** - permite especificarde qual linha(registro/resultado) iniciar a recuperação dos dados.  
~~~
SELECT *
FROM  filmes 
WHERE premios > 4
LIMIT 10
OFFSET 20; // ou seja, mostrara a partir da posição 21
~~~
