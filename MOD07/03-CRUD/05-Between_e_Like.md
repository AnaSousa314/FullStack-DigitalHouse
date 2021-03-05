### Between e Like  

* **BETWEEN** - usado para obter valores dentro de um intervalo específico.  
* > Inclui os extremos.  
* > funciona com números, textos e datas.  
* > Se usa com WHERE.  

~~~
SELECT nome,idade
FROM  alunos 
WHERE idade BETWEEN 6 AND 12;
~~~  

* **LIKE** - podemos estabelecer um padrâo de busca que nos permite especificar o que estamos procurando nos registros. Conseguimos isso através dos caracteres curinga(wildcards).

* > Curinga % - é um substituto que representa zero, um ou vários caracteres.  
* > Curinga _ - é um substituto para um só caractere.  

~~~
// Retorna nomes que tem a letra 'a' como segundo caractere
SELECT nome
FROM  usuarios 
WHERE idade LIKE '_a%';  


// Retorna os endereços dos usuários que incluem a avenida "Paulista"
SELECT nome
FROM  usuarios 
WHERE direccion LIKE '%Paulista%';
~~~