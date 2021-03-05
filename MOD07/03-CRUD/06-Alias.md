### Alias 

<p>
ALIAS são usados para dar um nome temporário e mais amigável a tabelas, colunas, e funções. Os alias são definidos durante uma consulta e persistem apenas durante essa consulta. 
Eles podem ser usados em nomes tanto de colunas quanto de tabelas.
</p>

~~~
// Alias para uma coluna
SELECT razao_social_cliente AS nome
FROM  cliente 
WHERE nome LIKE 'a%';

// Alias para uma tabela
SELECT nome, sobrenome, idade
FROM  alunos_comissao_inicial AS alunos;
~~~  

<p>
SELECT - Nunca altera a estrutura das tabelas nem os dados internos!

ALIAS - Só dá um nome temporário!
</p>