
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,470,width,20);
	dustbinObj=new dustbin(600,450);
	papery=new paper(100,200,50)
	

	Engine.run(engine);
  
}


function draw() {
  
  background(230);
  Engine.update(engine)

  groundObject.display();
  dustbinObj.display();

  papery.display()
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(papery.body,papery.body.position,{x:250,y:-180});

  
	}
}

