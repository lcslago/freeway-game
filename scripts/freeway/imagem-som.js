//ator e carros
const ator = new Image(wAtor, hAtor);
const carroUm = new Image(wCarro, hCarro);
const carroDois = new Image(wCarro, hCarro);
const carroTres = new Image(wCarro, hCarro);
const carroQuatro = new Image(wCarro, hCarro);
const carroCinco = new Image(wCarro, hCarro);

ator.src = "assets/freeway/ator-1.png";
carroUm.src = "assets/freeway/carro-1.png";
carroDois.src = "assets/freeway/carro-2.png";
carroTres.src = "assets/freeway/carro-3.png";
carroQuatro.src = "assets/freeway/carro-4.png";
carroCinco.src = "assets/freeway/carro-5.png";

var listaCarros = [carroUm, carroDois, carroTres, carroQuatro, carroCinco];

//telas
const menu = new Image(500, 400);
const gameOver = new Image(500, 400);

menu.src = "assets/freeway/menu.png";
gameOver.src = "assets/freeway/game-over.png";

//sons
const colisao = new Audio("assets/audios/colidiu.mp3");
const ponto =  new Audio("assets/audios/pontos.wav");