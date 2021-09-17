var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3, gameobject4;

function setup(){
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,50);
  movingRect=createSprite(400,200,80,30);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="red";
  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="yellow";
  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="white";
  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="purple";
  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="brown";
}

function draw(){
  background(0,0,0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect, gameobject1)){
    movingRect.shapeColor="blue";
    gameobject1.shapeColor="red";
  }

  else{
    movingRect.shapeColor="green";
    gameobject1.shapeColor="green";
  }
  
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

