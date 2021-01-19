  const World = Matter.World;
  const Event = Matter.Event;
  const Bodies = Matter.Bodies;
  const Engine = Matter.Engine;

  var world, engine;
  var particle;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var count = 0;
var gameState = "Play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");
  Engine.update(engine);
 
    if(gameState === "End"){
      textSize(40);
      text("Game Over", 400, 400);
    }
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

     fill("white");
     textSize(30);
     text("Score: " + score, 600, 40)
     text("100", 335, 495)
     text("100", 415, 495)
     text("200", 255, 495)
     text("200", 495, 495)
     text("300", 175, 495)
     text("300", 575, 495)
     text("400", 95, 495)
     text("400", 655, 495)
     text("500", 15, 495)
     text("500", 735, 495)

    if(particle!=null){
    particle.display();

    if(particle.body.position.y > 760){

      if(particle.body.position.x > 735 || particle.body.position.x < 15){
        score = score + 500;
        particle = null;
        if(count >= 5) gameState = "End";
      }

      else if(particle.body.position.x < 655 || particle.body.position.x > 95){
        score = score + 400;
        particle = null;
        if(count >= 5) gameState = "End";
      }

      else if (particle.body.position.x < 575 || particle.body.position.x > 175){
        score = score + 300;
        particle = null;
        if(count >= 5) gameState = "End";
      }

      else if(particle.body.position.x < 495 || particle.body.position.x > 255){
        score = score + 200;
        particle = null;
        if(count >= 5) gameState = "End";
      }

      else if(particle.body.position.x < 415 || particle.body.position.x > 335){
        score = score + 100;
        particle = null;
        if(count >= 5) gameState = "End";
      }
     }
    } 

     for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    }
}

function mousePressed(){
  if(gameState!=="End"){
    count++
    particle = new Particle(mouseX, 10, 10, 10);
  }
}