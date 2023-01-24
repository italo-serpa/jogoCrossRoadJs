function setup() {
  createCanvas(500, 400);
  somTrilha.loop (); 
}

function draw() {
  background(imagemEstrada);
  mostraAtor ();
  moveAtor ();
  mostraCarros ();
  moveCarros ();
  voltaCarros ();
  verificaPassou();
  verificaColisao ();
  mostraPontos ();
  marcaPontos ();
}