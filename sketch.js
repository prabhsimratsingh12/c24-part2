
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone= new Stone(700,320,100,100);
	plane= new Plane(600,height,1200,20)
	rubber= new Rubber(900,450,70)
	hammer= new Hammer(10,100)

	Engine.run(engine);
  
}


function draw() {
 
  background(0);

  stone.display();
  plane.display();
  hammer.display();
  rubber.display();

  drawSprites();
 
}



