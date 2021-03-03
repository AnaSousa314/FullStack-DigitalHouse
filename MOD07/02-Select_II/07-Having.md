### Having  

Cumpre a mesma função que WHERE, com a difereça que HAVING poderá ser usada em conjunto com as funções de agregação para filtrar dados agregados. Lembrando que HAVING só aparece onde existe GROUP BY.  

~~~
SELECT COUNT(cliente_id), pais FROM clientes GROUP BY pais HAVING COUNT(clienteId) > 3;
~~~