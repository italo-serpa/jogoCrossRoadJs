//Imagens e sons do jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somColisao;
let somTrilha;
let somPonto;

function preload () {
  imagemEstrada = loadImage ("Imagens/estrada.png")
  imagemAtor = loadImage ("Imagens/ator-1.png")
  imagemCarro1 = loadImage ("Imagens/carro-1.png")
  imagemCarro2 = loadImage ("Imagens/carro-2.png")
  imagemCarro3 = loadImage ("Imagens/carro-3.png")
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  somColisao = loadSound ("Sons/colidiu.mp3")
  somTrilha = loadSound ("Sons/trilha.mp3")
  somPonto = loadSound ("Sons/pontos.wav")
}