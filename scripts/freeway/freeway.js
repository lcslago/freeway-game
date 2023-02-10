const canvas = document.querySelector('canvas');
const quadro = canvas.getContext('2d');

const cenario = new Image(500, 400);
cenario.onload = constroiCenario;
cenario.src = "assets/freeway/estrada.png";

quadro.fillStyle = 'white';
quadro.fillRect(0, 0, 500, 400);

function constroiCenario () {
    quadro.drawImage(cenario, 0, 0, 500, 400);
}
