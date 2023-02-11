const canvas = document.querySelector('canvas');
const quadro = canvas.getContext('2d');

function mostraObjetos() { //para carregar elementos do jogo e suas funções
    if (jogo) {
        quadro.drawImage(ator, xAtor, yAtor, wAtor, hAtor);
        for (i = 0; i < listaCarros.length; i++) {
            quadro.drawImage(listaCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
        }
        verificaColisão();
        incluiPonto();
        incluiContador();
        encerraJogo();
    } else {
        mostraMenu();
    }
}

function atualizaTela() { //para limpar a tela a cada momento que houver "movimento" dos objetos
    quadro.clearRect(0, 0, 500, 400);
    mostraObjetos();
}

function movimentaCarro() {
    for (i = 0; i < listaCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
        if (xCarros[i] < intervalo) {
            xCarros[i] = xCarroInicial;
        }
    }
    atualizaTela(); //para manter a tela limpa a cada atualização
    requestAnimationFrame(movimentaCarro); //para deixar a atualização de tela mais suave
}
requestAnimationFrame(movimentaCarro); //para deixa a animação mais suave

function movimentaAtor() {
    if (cima) {
        yAtor -= velocidadeAtor;
    } else if (baixo && (yAtor < yInicial)) { //para limitar movimento na parte inferior da tela
        yAtor += velocidadeAtor;
    }
    marcaPonto();
    atualizaTela(); //para manter a tela limpa a cada atualização
    requestAnimationFrame(movimentaAtor); //para deixar a atualização de tela mais suave
}
requestAnimationFrame(movimentaAtor); //para deixa a animação mais suave

document.onkeydown = function (evento) { //para controlar o ator bem como iniciar o jogo
    if (evento.code == "KeyW") {
        cima = true;
    } else if (evento.code == "KeyS") {
        baixo = true;
    } else if (evento.code == "Space" && jogoParado) {
        jogoParado = false;
        jogo = true;
        resetaVariaveis();
    }
}

function resetaVariaveis() { //para o jogo recomeçar zerado
    meusPontos = 0;
    contador = 50;
    fimDeJogo = false;
    yAtor = yInicial;
}

document.onkeyup = function (evento) {  //para impedir o ator de andar infinitamente
    if (evento.code == "KeyW") {
        cima = false;
    } else if (evento.code == "KeyS") {
        baixo = false;
    }
}

function incluiPonto() { // coloca os pontos na tela
    quadro.fillText(meusPontos, 350, 30);
    quadro.font = "bold 35px arial";
}

function marcaPonto() { // incrementa ou decrementa pontos
    if (yAtor < yFinal) {
        meusPontos += 1;
        yAtor = yInicial;
    } else if (meusPontos < 0) {
        fimDeJogo = true;
    }
}

function incluiContador() { //contador na tela em segundos
    quadro.fillText(contador, 420, 30);
    quadro.font = "bold 35px arial";
}

function marcaTempo() { // condições para o contador funcionar
    if (jogo) {
        contador -= 1;
        if (contador == 0) {
            fimDeJogo = true;
        }
    }
}
setInterval(marcaTempo, 1000); // a cada 1000 ms, ele irá retirar 1s do contador

function colidiu(x1, y1, w1, h1, x2, y2, w2, h2) { // função que verifica colisão entre objetos retangulares
    if (x1 + w1 >= x2 &&
        x1 <= x2 + w2 &&
        y1 + h1 >= y2 &&
        y1 <= y2 + h2) {
        return true;
    }
    return false;
}

function verificaColisão() {
    for (i = 0; i < listaCarros.length; i++) {
        if (colidiu(xAtor,
            yAtor,
            wAtor,
            hAtor,
            xCarros[i],
            yCarros[i],
            wCarro,
            hCarro)) {
            yAtor = yInicial;
            meusPontos -= 1;      //se houver colisão, 1 ponto será perdido
        }
    }
}

function encerraJogo() {
    if (fimDeJogo) {
        quadro.drawImage(gameOver, 0, 0, 500, 400);
        quadro.fillText("Você fez " + meusPontos + " pontos!", 95, 200);
        quadro.font = "bold 35px arial";
        if (meusPontos < 0) {
            meusPontos = 0;
        }  // as condições abaixo impedem o jogo de continuar rodando por trás da tela de game over
        cima = false;
        baixo = false;
        jogoParado = true;
    }
}

function mostraMenu() {
    quadro.fillStyle = 'black';
    quadro.fillRect(0, 0, 500, 400);
    quadro.drawImage(menu, 0, 0, 500, 400);
}