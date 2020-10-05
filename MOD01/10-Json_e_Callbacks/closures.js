//Closures são funções aninhadas, ou seja, funções que vivem dentro de outras funções.
//Closures vivem dentro de uma função container(pai) e é usada somente quando essa função é executada

function saudacao(nome){
    let mensagem = 'Olá seja bem vindo(a)';

    function juntarNome(){
        return mensagem + ' ' + nome;
    }

    return juntarNome();
}

console.log(saudacao("Ana"))