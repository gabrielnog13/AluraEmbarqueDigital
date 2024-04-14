let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto  = gerarNumeroAleatorio();
//variável para fazer o contador de tentativas
let tentativas = 1;

//criando a função com parâmetros
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//chamando a função no código
exibirTextoTela("h1", "Jogo do número secreto");
exibirTextoTela("p", "Escolha um número entre 1 e 10" );

//criando uma função sem parâmetros com o js (para verificar se o valor do número que foi escolhido no chute se é igual ao número secreto)
function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoTela("h1", "Acertou!!");
        //contador de tentativas
        let pTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${pTentativa}!`;
        exibirTextoTela("p", mensagemTentativas);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoTela("p", "O número secreto é menor");
        } else {
            exibirTextoTela("p", "O número secreto é maior")
        }
        tentativas++; //ou tentativas = tentativas + 1
    }
}

//Função com retorno
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite  + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}