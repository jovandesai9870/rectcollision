var movRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movRect = createSprite(400, 200, 50, 80);
  fixedRect = createSprite(400,400,80,30);

  movRect.shapeColor="red";
  fixedRect.shapeColor="red";

  movRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0);  

  movRect.x=mouse.x;
  movRect.y=mouse.y;

  if(movRect.x-fixedRect.x<fixedRect.width/2+movRect.width/2 && fixedRect.x-movRect.x<fixedRect.width/2+movRect.width/2 && movRect.y-fixedRect.y<fixedRect.height/2+movRect.height/2 && fixedRect.y-movRect.y<fixedRect.height/2+movRect.height/2){
          movRect.shapeColor="blue";
          fixedRect.shapeColor="blue";
  }

  drawSprites();
}