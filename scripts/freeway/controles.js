function mostraObjetos () {
    quadro.drawImage(ator, xAtor, yAtor, wAtor, hAtor);
    for(i = 0; i < listaCarros.length; i++) {
        quadro.drawImage(listaCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
    }
}

function atualizaTela () {
    quadro.clearRect(0, 0, 500, 400);
    mostraObjetos();
}

function movimentaCarro () {
    for(i = 0; i < listaCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
        if(xCarros[i] < intervalo) {
            xCarros[i] = xCarroInicial;
        }
    }
    atualizaTela(); //para manter a tela limpa a cada atualização
    requestAnimationFrame(movimentaCarro); //para deixar a atualização de tela mais suave
}
requestAnimationFrame(movimentaCarro); //para deixa a animação mais suave
  
function movimentaAtor () {
    if(cima) {
        yAtor -= velocidadeAtor;
    } else if(baixo && (yAtor < yInicial)) { //para limitar movimento na parte inferior da tela
        yAtor += velocidadeAtor;
    } 
    marcaPonto();
    atualizaTela(); //para manter a tela limpa a cada atualização
    requestAnimationFrame(movimentaAtor); //para deixar a atualização de tela mais suave
}
requestAnimationFrame(movimentaAtor); //para deixa a animação mais suave

document.onkeydown = function (evento) {
    if(evento.code == "KeyW") {
        cima = true;
    } else if (evento.code == "KeyS") {
        baixo = true;
    } 
}

document.onkeyup = function (evento) {  //para impedir o ator de andar infinitamente
    if(evento.code == "KeyW") {
        cima = false;
    } else if (evento.code == "KeyS") {
        baixo = false;
    }
}

function marcaPonto () {
    if (yAtor < yFinal) {
        yAtor = yInicial;
    }
}

