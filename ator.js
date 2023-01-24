//Variaveis do ator
let xAtor = 100;
let yAtor = 365;
let colisao = false;
let meusPontos = 0;

function mostraAtor () {
  image (imagemAtor, xAtor, yAtor, 30, 30)
}

function moveAtor () {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (limitaMovimento()) {
    yAtor += 3;
    }
  }
}

function verificaColisao () {
  for (let i = 0; i < imagemCarros.length; i ++) {
    colisao = collideRectCircle (xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor+10, yAtor+10, 15)
    if (colisao) {
      colidiu ();
      somColisao.play ();
      meusPontos = 0;
    }
  }
}

function colidiu () {
  yAtor = 366
}

function mostraPontos () {
  textAlign (CENTER);
  textSize (25);
  fill (127, 255, 200)
  text (meusPontos, width / 2, 27)
}

function marcaPontos () {
  if (yAtor < 15) {
    meusPontos += 1;
    somPonto.play ();
    colidiu ();
  } 
}

function limitaMovimento () {
  return yAtor < 366
}