
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload() {
	dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(230, 450, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

   paper.display();
  groundObject.display();
  dustbinObj.display();
   imageMode(CENTER);
   image( dustbinImage, 1200 , 550, 250, 250)

}

function keyPressed() {
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:130, y:-145})
	}
} 
