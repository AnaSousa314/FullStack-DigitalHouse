### Funções de Agregação  

* **COUNT** - retorna a quantidade de linhas/registros que atendem aos critérios.  
~~~
// Retorna tudo
SELECT COUNT(*) movies;  

SELECT COUNT(id) AS total FROM movies WHERE genre_id = 3;
// Retorna a quantidade de filmes com o genero_id 3 em uma coluna chamada total
~~~  

* **AVG,SUM** - Retorna a media e a soma de uma coluna com valores numéricos respectivamente.  
~~~
// Media do rating 
SELECT AVG(rating) movies;

// soma da duração dos filmes
SELECT SUM(length) FROM movies;
~~~  

* **MIN,MAX** - retorna valor mínimo e maximo de uma coluna com valores numericos respectivamente.  
~~~
SELECT MIN(rating) movies;

SELECT MAX(rating) movies;

~~~