### Error 404

<p>
É um erro que o servidor envia quando não encontra um recurso solicitado pelo cliente.</p>

<p>
O Express já traz consigo uma resposta padrão para casos de erros, se quisermos renderizar uma resposta própria mais bonita para o usuário fazemos o seguinte no app.js 
</p>

app.use((req,res,next)=>{
  
  //dessa forma iremos rendererizar a nossa propria página de erro chamada 'not-found'
  res.status(404).render('not-found')
  });
