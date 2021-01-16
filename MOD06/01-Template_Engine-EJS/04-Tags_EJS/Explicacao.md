 <% %> Usamos para incorporar código JavaScript, como condicionais, estruturas de fluxo, etc. 
      EX.:
      <% for(let i=0; i<3;i++) %{>
        <p>Testando a tag <% %> </p>
        <% }%>

<%= %>Usamos para incorporar o código e imprimir o resultado de uma expressão ou um valor. Usado para imprimir dados de um BD, por exemplo.


EX.: 
    <%= for(let i=0;i<3;i++){%>
        <p>Nesta volta o i vale <%= i ></p>
    <%=}%>

