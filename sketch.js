var Mrect, Crect;
function setup() {
  createCanvas(800,400);
  Mrect = createSprite(400, 200, 50, 50);
  Mrect.shapeColor="red"
  Crect = createSprite(400, 100, 50, 50);
  Crect.shapeColor="red"
}

function draw() {
  background(255,255,255);  

  Mrect.x = World.mouseX;
  Mrect.y = World.mouseY;
  if(Mrect.x-Crect.x<Mrect.width/2+Crect.width/2 &&
    Crect.x-Mrect.x<Mrect.width/2+Crect.width/2&&
    Mrect.y-Crect.y<Mrect.height/2+Crect.height/2 &&
  Crect.y-Mrect.y<Mrect.height/2+Crect.height/2){
      
    Mrect.shapeColor="green"
    Crect.shapeColor="green"
  }
  else {
    Mrect.shapeColor="red"
    Crect.shapeColor="red"
  }
  drawSprites();
}