function Sprite(x, y, largura, altura){
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas){
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);

	}
}

var bg = new Sprite(0, 0, 600, 300),
spriteBoneco = new Sprite(655, 57, 50, 50),
spriteBonecoclick = new Sprite (655, 120, 50, 50),
spritePoderB = new Sprite(655, 199, 50, 50),
spritePoderR = new Sprite(657, 262, 50, 50),
spritePoderY = new Sprite(660, 328, 50, 50),
obsMarron = new Sprite(7, 666, 50, 120),
obsAzul = new Sprite(63, 666, 50, 120),
obsAmarelo = new Sprite(120, 666, 50, 120),
obsAzulClaro = new Sprite(179, 666, 50, 120),
obsRosa = new Sprite(237, 666, 50, 120),
spritePlay = new Sprite(32, 409, 220, 230),
spriteChao = new Sprite(0, 303, 600, 50),
spriteRestore = new Sprite(270, 432, 220, 200),
spriteBlack = new Sprite(741, 0, 600, 300),
spriteScore = new Sprite(519, 517, 166, 72),
spriteNScore = new Sprite(511, 409, 178, 81),
spritePD = new Sprite(760, 328, 50, 50)
;