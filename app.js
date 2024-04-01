let numeroSecreto  = gerarNumeroAleatorio();

//criando a função com parâmetros
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//chamando a função no código
exibirTextoTela("h1", "Jogo do número secreto")
exibirTextoTela("p", "Escolha um número entre 1 e 10" )

//criando uma função sem parâmetros com o js
function verificarChute() {
    console.log("o botão foi clicado");
}

//Função com retorno
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10  + 1);
}