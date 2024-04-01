let numeroSecreto  = gerarNumeroAleatorio();

//criando a função com parâmetros
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//chamando a função no código
exibirTextoTela("h1", "Jogo do número secreto")
exibirTextoTela("p", "Escolha um número entre 1 e 10" )

//criando uma função sem parâmetros com o js (para verificar se o valor do número que foi escolhido no chute se é igual ao número secreto)
function verificarChute() {
    let chute = document.querySelector("input").value
    console.log(chute == numeroSecreto); //ele dá um resultado de valor booleano - true ou false
}

//Função com retorno
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10  + 1);
}