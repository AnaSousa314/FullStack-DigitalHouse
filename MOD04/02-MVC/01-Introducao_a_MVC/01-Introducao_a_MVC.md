## Introdução a MVC  

* É um **design pattern**. Suas siglas correspondem a Model View Controller.  

* MVC - seu objetivo é criar aplicações modulares, dividindo a estrutura do projeto em *três componentes* principais, onde cada um deles cumpre com uma certa função. Estes componentes são: os **models**, as **views** e os **controllers**.  

* **Views** - compõem a *interface gráfica* da aplicação e contém todos os elementos visíveis ao usuário. Sua responsabilidade é *definir a aparência* dos dados e mostrá-los na tela. As views *não* se comunicam de forma direta com as models.  

* **Models** - compõem a parte lógica da aplicação. Suas responsbilidades são se *conectar* com o banco de dados, realizar *consultas* e *administrar* a regra de negócio. *Não* se comunicam de forma direta com as views.  

* **Controllers** - compõem a camada intermediaria entre as views e os models. Sua responsbilidade é *processar* os dados que recebe das models e escolhe a view correspondente de acordo com os dados. Tem *relação direta* com as views e com os models e é um componente fundamental dentro do fluxo padrão.  

* **OBS:** É importante destacar que os design patterns *propõem* uma forma de trabalho e não há nada por trás que regule que estas formas são cumpridas. São usadas como uma *boa prática* que facilita o trabalho em equipe, permitindo a unificação de critérios e abordagens. 