var movingRect, fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(800, 200, 50, 50);
 movingRect = createSprite(400,350,50,50);
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";
 gameObject1 = createSprite(100,100,50,50);
 gameObject1.shapeColor = "blue";
 gameObject2 = createSprite(200,100,50,50);
 gameObject2.shapeColor = "red";
 gameObject3 = createSprite(300,100,50,50);
 gameObject3.shapeColor = "green";
 gameObject4 = createSprite(400,100,50,50);
 gameObject4.shapeColor = "yellow";
}

function draw() {
  background(130,110,230);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,gameObject1) ) {
gameObject1.shapeColor = "red";
 movingRect.shapeColor = "red";
  }
  else {
 gameObject1.shapeColor = "green";
 movingRect.shapeColor = "green";
  }
  drawSprites();
}
