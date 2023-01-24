var barco;
var mar;

function preload(){
  sea = loadImage("assets/sea.png");
  ship = loadAnimation("assets/ship-1.png","assets/ship-2.png","assets/ship-3.png","assets/ship-4.png");
}

function setup(){
  mar = createSprite(200,200,20,20);
  barco = createSprite(200,200,20,20);
}

function draw() {
  background("blue");
  barco.addAnimation("molhado",ship);
  barco.scale = 0.3;
  mar.addImage(sea);
  mar.scale = 0.6;
  mar.velocityX = -2
  if(mar.x<0){
    mar.x = mar.width/2;
  }
  drawSprites();
}
