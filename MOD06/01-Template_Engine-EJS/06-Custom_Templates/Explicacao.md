<h1>Custom Templates - Modelos Personalizados</h1>

<p>
  Para modularizarmos nosso código precisamos encntrar nele todas as partes que se repetem nas paginas do nosso site.

  Em uma estrutura HTML é comum que a head, a barra de navegação e o footer se repitam em todos os arquivos.

  Podemos criar um arquivo novo para cada uma dessas partes que se repetem, e se estivermos trabalhando em arquivos ejs, colocá-las dentro da view em uma pasta que criaremos chamada partials
</p>

<p>
  Para reutilizarmos esse código que modularizamos, precisamos usar a função <em>include()</em>. Ela recebe como parametro uma string que será a route para o arquivo que queremos incluir. Colocando dentro da tag ejs. 
  EX.: <%- include('./partials/head') %>
</p>

<p>
  A modularização torna nosso código bem menos repetitivo e torna a sua manutenção bem mais simples
</p>