let listaDeNumerosSorteado = [];
let numeroLimite = 10
let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio)

function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo dos numeros');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value; 
    if (chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'acertou');
        exibirTextoNaTela('p', 'você descobriu o numero secreto');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            exibirTextoNaTela('p', 'o numero secreto é menor');

        } else {
            exibirTextoNaTela('p', 'o numero secreto é maior');
        }
        limparCampo();
    }

}
function gerarNumeroAleatorio(){
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteado.length;
   if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteado = [];
   }
   if(listaDeNumerosSorteado.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
   } else {
    listaDeNumerosSorteado.push(numeroEscolhido);
    console.log (listaDeNumerosSorteado);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
