//Lista das variavies dos carros
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 95, 150, 210, 265, 320]
let veloCarros = [3, 2, 4, 5, 2, 3] 
let comprimentoCarro = 70;
let alturaCarro = 40; 

function mostraCarros () {
  for (let i = 0; i < imagemCarros.length; i ++) {
    image (imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function moveCarros () {
  for (let i = 0; i < imagemCarros.length; i ++) {
    xCarros[i] -= veloCarros[i];
  }
}

function voltaCarros () {
  for (let i = 0; i < imagemCarros.length; i ++) {
    if (verificaPassou(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function verificaPassou (xCarros) {
  return xCarros < -50;
}