
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
//chamada de função de gerar um número aleatório e armazenar esse número em uma variável
let numeroSecreto  = gerarNumeroAleatorio();
//chamada da função de exibir a mensagem inicial de quando você inicia o jogo
exibirMensagemInicial();
//variável para fazer o contador de tentativas
let tentativas = 1;

//criando a função com parâmetros
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//chamando a função de exibir o texto na tela dentro de outra função para receber as duas mensagens juntas (para n ficar repetindo muito e n ter que alterar as coisas em duas chamadas diferentes)
function exibirMensagemInicial() {
    exibirTextoTela("h1", "Jogo do número secreto");
    exibirTextoTela("p", "Escolha um número entre 1 e 10" );
}

//criando uma função sem parâmetros com o js (para verificar se o valor do número que foi escolhido no chute se é igual ao número secreto)
function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoTela("h1", "Acertou!!");
        //contador de tentativas
        let pTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${pTentativa}!`;
        exibirTextoTela("p", mensagemTentativas);
        //removendo o atributo de deixar o botão de novo jogo desabilitado depois que você acertar o número secreto
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (chute > numeroSecreto) {
            exibirTextoTela("p", "O número secreto é menor");
        } else {
            exibirTextoTela("p", "O número secreto é maior")
        }
        tentativas++; //ou tentativas = tentativas + 1
        limparCampo(); //chamada da função de limpar o campo
    }
}

//Função com retorno para gerar o número aleatório
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
   return parseInt(Math.random() * 10  + 1);
}

//função responsável por limpar o campo de números depois do chute
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true) //deixa o botão de novo jogo desabilitado até você acertar o número, quando você acerta, ele é habilitado para você começar um novo jogo
}