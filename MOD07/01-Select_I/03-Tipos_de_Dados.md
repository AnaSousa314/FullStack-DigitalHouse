### Tipos de Dados 

* **Dados do tipo numérico.** - Tinyint; SmallInt; MediumInt; int; bigint. Numéricos decimais: Float; Double; Decimal. Booleanos, mas é melhor usar o tinyint no lugar dele.  

* **Dados do tipo Data** - O mysql não verifica rigorosamnte se uma data é válida ou não. São 03: Date AAAA-MM-DD. Time HH:MM:SS. DateTime AAAA-MM-DD HH:MM:SS.  

* **Dados do tipo texto** : 

CHAR(num): o número entre parânteses indicará a quantidade exata de caracteres.  

VARCHAR(num): o número entre parânteses indicará a quantidade máxima de caracteres.  

TEXT: determina dado do tipo texto sem limite de caracteres. Muito usado em Blogs  

* **Constraints** - Unique Keys; Null/NotNull; Default; Auto_increment 