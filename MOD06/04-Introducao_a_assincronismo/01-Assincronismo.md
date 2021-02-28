### Assincronísmo 
5  8  
<p>
Assincronismo é a falta de concordância ou simultaneidade de fatos ou fenômenos no tempo.

Em JavaScript significa que podemos implementar mais de uma ação por vez, sem depender da finalização de outras tarefas para começar cada ação.
</p>  

<p>
O JS é uma linguagem que tem uma única thread de execução. Isso significa que só pode fazer uma coisa de cada vez. 
</p> 

<p>
Para a execução das tarefas ele se baseia no conceito LIFO(Last In First Out).
</p>  

#### O Navegador e o APIs Web  

<p>
Se a pilha de tarefas estiver encarregada de ordenar as tarefas e executar uma após outra.
</p>  

<p>As APIs WEB se encarregarão de todas as chamadas que não possam ser resolvidas no momento, ou seja, as assíncronas.</p>  

* 1º, todo o código **síncrono** será resolvido.  
* 2º, as chamadas para as APIs WEB serão resolvidas. 

<p>
Ou seja, código síncrono primeiro código assíncrono depois.
</p>  

EXEMPLOS:  
1º -   
~~~
function alarme1(){
  return "Hora de acordar são 08:00";
}

function alarme2(){
  return "Está perto da sua hora de acordar são 07:50";
}

setTimeout(function(){
  console.log(alarme1());
}, 2000);

console.log(alarme2());
~~~  

2º -  
~~~
function saudacao(){
  return "Olá!";
}

function despedida(){
  return "Já passaram dois segundos, Tchau!"
}  

setTimeout(function(){
  console.log(despedida());
},2000);

console.log(saudacoes());
~~~  

#### EVENT LOOP  

<p>
Ele é responsável por monitorar quais funções são executadas e em que momento. Tem a capacidade de saber quando a nossa Pilha de Tarefas está vazia, e só então começar a executar as funções que estão na nossa Fila de Tarefas.
</p>  

<p>
É assim que o JS gera assincronismo, que é a possibilidade apresentada pela linguagem de realizar múltiplas tarefas no mesmo espaço de tempo.  
</p>