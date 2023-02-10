//listas para carros
let yCarros = [40, 100, 155, 215, 270];
let xCarros = [500, 500, 500, 500, 500];
let velocidadeCarros = [6, 4.5, 2.5, 6.5, 3.5];
const xCarroInicial = 500;

//dimensões do ator
const xAtor = 85;
const yAtor = 370;
const wAtor = 30;
const hAtor = 25;
const yInicial = yAtor;
const meusPontos = 0;
let velocidadeAtor = 4;

//dimensões do carro
const wCarro = 55;
const hCarro = 35;
let intervalo = -80;

function constroiCenario () {
    quadro.drawImage(cenario, 0, 0, 500, 400);

}

function mostraObjetos () {
    quadro.drawImage(ator, xAtor, yAtor, wAtor, hAtor);
    for(i = 0; i < listaCarros.length; i++) {
        quadro.drawImage(listaCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
    }
}



