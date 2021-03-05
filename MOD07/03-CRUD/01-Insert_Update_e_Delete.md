### Insert, Update e Delete  

* **INSERT** - existem duas formas de se inserir dados em uma tabela, uma em que você não é necessário especificar o nome de cada coluna, pois você inserirá dados em todas de acordo com a ordem. E a outra em que você vai inserir dados apenas em algumas colunas, logo deve especificar o nome da coluna.  

~~~
// sem especificar as colunas
INSERT INTO usuarios VALUES(DEFAULT,'Diego','Silva');  

// especificando colunas
INSERT INTO usuarios (id,nome,sobrenome) VALUES(DEFAULT,'Diego','Silva');
~~~  

* **DELETE** - exclui a informação de uma tabela. Lembrando que precisamos colocar o WHERE especificando uma condição do que será apagado na tabela, caso contrário, toda a tabela será excluída.  
~~~
DELETE FROM usuarios WHERE usuario_id = 4;
~~~  

* **UPDATE** - modifica dados na tabela. Também necessita do WHERE.  
~~~
UPDATE usuarios SET nome = "Pedro", sobrenome = "Dante" WHERE id = 1;
~~~