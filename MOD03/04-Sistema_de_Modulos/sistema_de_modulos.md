## Sistema de Módulos  

* **Node Modules** - São **estruturas** de **código**que juntas, compõem toda a nossa aplicação e configuram sua usabilidade.  

* Um **módulo** é um bloco de *código reutilizável*, uma unidade funcional, cuja a existência não altera o comportamento de outros blocos de código.   

* Três tipos de módulos: 
1. -  **Módulos Nativos** que já vieram instalados.    
2. - **Módulos de Terceiros** que podemos instalar usando um gerenciador de pacotes, como o npm.  
3. - **Módulos Criados** que nós mesmos definimos.  

* Por **convenção**, o **nome** da variável que armazena o módulo que estamos requerendo, geralmente recebe o **mesmo nome do módulo**, ou uma **abreviação** dele. 

* Para requerer módulos de terceiros, primeiro o instalamos usando o comando `npm intall nomeDaPackage --save`  

* Para requerer um módulo criado por nós, primeiro devemos criar um arquivo com extensão `.js` e dentro escrever o script que precisamos. Ao final do script colocamos o module.exports e lhe atribuimos o nome da variável que contém a informação que queremos exportar.  





**Referências**  
* https://www.nodejs.org/api