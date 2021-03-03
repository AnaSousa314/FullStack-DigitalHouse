### Joins  

Servem a mesma função que a referência da tabela, JOINS:  

* Proporcionam certas flexibilidades adicionais.  
* Sintaxe muito mais utilizada.  
* Melhor desempenho.   

Os principais relacionamentos do JOIN são:  

* INNER JOIN:  
~~~
//Antes do join
SELECT clientes.id AS id, clientes.nome, vendas.data FROM clientes, vendas.  

// Com join, a sintaxe não usa where, mas requer a palavra ON. 
SELECT clientes.id AS id, clientes.nome, vendas.data FROM clientes INNER JOIN vendas ON clientes.id = vendas.cliente_id  
~~~  

* LEFT JOIN:  
~~~
SELECT clientes.id AS id, clientes.nome, vendas.contas FROM clientes LEFT JOIN vendas ON clientes.id = vendas.cliente_id  
~~~    

* RIGHT JOIN:  
~~~
SELECT clientes.id AS id, clientes.nome, vendas.data FROM clientes RIGHT JOIN vendas ON clientes.id = vendas.cliente_id
~~~

