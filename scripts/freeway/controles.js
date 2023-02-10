// function passouDaTela(xCarro) {
//     return xCarros[i] < intervalo;
//   }

// function movimentaCarro() {
//   for(i = 0; i < xCarros.length; i++) {
//     xCarros[i] -= velocidadeCarros[i];
//   }
// }

// function loopingCarro() {
//   for(i = 0; i < xCarros.length; i++) {
//     if(passouDaTela(xCarros[i])) {
//       xCarros[i] = xCarroInicial;
//     }
//   }
// }

function movimentaCarro () {
    for(i = 0; i < listaCarros.length; i++) {
        quadro.clearRect(0, 0, 500, 400);
        xCarros[i] -= velocidadeCarros[i];
    }
    mostraObjetos();
}


