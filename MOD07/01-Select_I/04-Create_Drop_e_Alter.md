### Create, Drop e Alter  

* CREATE TABLE - cria a tabela do zero junto com suas colunas, seus tipos e seus constraints. EX.:  

CREATE TABLE movies(
  id INT AUTO_ICREMENT PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  realese_date DATE NOT NULL,
  FOREIGN KEY (actor_id) REFERENCES actors(id)
  
);  


* **DROP TABLE** - exclui a tabela que especificarmos.EX.:    
DROP TABLE IF EXIST movies;  

* **ALTER TABLE** - permite alterar uma tabela, opera com três comandos:  
1. ADD, para adicionar uma coluna
2. MODIFY, para modificar uma coluna
3. DROP, para excluir uma coluna  

// Adiciona a coluna rating
ALTER TABLE movies  
ADD rating DECIMAL(3,1) UNSIGNED NOT NULL;  

// Modifica o decimal da coluna rating, embora o restante da tabela não seja alterada, devemos escrêve-las.   
ALTER TABLE movies  
MODIFY rating DECIMAL(4,1) UNSIGNED NOT NULL;  

//Exclui a coluna rating  
DROP rating;
