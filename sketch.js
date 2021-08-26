var space,meteoroids,stars,rocket;
var spaceImg,meteoroidImg,starImg,rocketImg;
var starG,meteoroidG;
var treasureCollection=0;

//Game States
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
    spaceImg = loadImage("space.jpg");
    meteoroiodsImg = loadImage("meteoroids.jpg");
    rocketImg = loadAnimation("rocket2.png");
    starImg = loadImage("star.jpg");
  }
   
function setup(){
  createCanvas(400,600);

  space=createSprite(200,300,400,600);
  space.addImage("space",spaceImg);
  space.velocityY=6;

  //creating rocket flying
rocket = createSprite(200,550,20,20);
rocket.addAnimation("RocketFlying",rocketImg);
rocket.scale = 0.2 ;

  starG=new Group();
  meteoroidG=new Group();

}

  function draw() {

    background(0);

   
  
    rocket.x = World.mouseX;
    rocket.y = World.mouseY;
    
    edges= createEdgeSprites();
    rocket.collide(edges);


    //code to reset the background
  if(space.y > 400 ){
    space.y = height/2;
  }
  
  createstar();
  createmeteoroid();

  if (starG.isTouching(rocket)) {
   starG.destroyEach();
   treasureCollection=treasureCollection+50; 
  }

  if (meteoroidG.isTouching(rocket)) {
  meteoroidG.destroyEach();
  }


  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ treasureCollection,150,30);

}

  


  function createstar() {
    if (World.frameCount % 120 === 0) {
    var star = createSprite(Math.round(random(50, 350),40, 10, 10));
    star.addImage(starImg);
    star.scale=0.12;
    star.velocityY = 3;
    star.lifetime = 200;
    starG.add(star);
    }
  }

  function createmeteoroid() {
    if (World.frameCount % 200 === 0) {
    var meteoroid = createSprite(Math.round(random(50, 350),40, 10, 10));
    meteoroid.addImage(meteoroiodsImg);
    meteoroid.scale=0.05;
    meteoroid.velocityY = 3;
    meteoroid.lifetime = 150;
    meteoroidG.add(meteoroid);
    }
  }