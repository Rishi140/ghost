var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg=loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav"); 

}

function setup(){
createCanvas(600,600);  
  
tower=createSprite(300,300) ; 
tower.addImage(towerImg);  
tower.velocityY=3;  
doorsGroup=new Group();  
climbersGroup=new Group();
invisibleBlockGroup=new Group();  
  
ghost=createSprite(200,200,20,20);  
ghost.addImage(ghostImg) ; 
ghost.velocityY=3; 
ghost.scale=0.4;  
}

function draw(){
background(0) ;
if (gameState==="play"){
  
if (keyDown("left_arrow")){
ghost.x=ghost.x-3;  
}
  
if (keyDown("right_arrow")) {
ghost.x=ghost.x+3;  
}  
  
  
if (keyDown("space")) {
ghost.velocityY=-3;
}  
ghost.velocityY=ghost.velocityY+0.5;  

if (climbersGroup.isTouching(ghost)){
 ghost.velocityY=0; 
}  
 
if (invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
ghost.destroy();
gameState="end";  
}  
  
if (tower.y>400) {
tower.y=300;  
} 
  
spawnDoors();
   
drawSprites();
}  
 if (gameState==="end") {
 stroke("yellow") ;
 fill("yellow");  
 textSize(30);
 text("GAME OVER",230,250) ;
  
   
 }
  
  
  
}

function spawnDoors(){
if (frameCount%240===0){
door=createSprite(200,-50) ; 
door.addImage(doorImg);

door.x=Math.round(random(120,400));  
door.velocityY=3  
door.lifetime=800; 
doorsGroup.add(door) ; 

climber=createSprite(200,10);
climber.addImage(climberImg) ; 
climber.x=door.x;
climber.velocityY=3  
climber.lifetime=800;
climbersGroup.add(climber) ;
 ghost.depth=door.depth                               
  
invisibleBlock=createSprite(200,15);  
invisibleBlock.velocityY=3; 
invisibleBlock.lifetime=800;  
invisibleBlock.x=door.x;
invisibleBlock.width=climber.width;
invisibleBlock.height=2;
invisibleBlock.debug=true ;
invisibleBlockGroup.add(invisibleBlock);  
}  
  
}

















