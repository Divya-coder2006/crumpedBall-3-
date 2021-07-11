
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var ball;
var log1,log2,log3  ;
var ground,ground2,ground3,ground4;
var crImg;

function preload(){
	crImg=loadImage("cr.png")
}

function setup() {
	createCanvas(1600, 750);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,740,1600,20);
	ground2 = new Ground(10,375,20,730);
	ground3= new Ground(1590,375,20,730);
	ground4 = new Ground(800,10,1600,20);
	bin = new Dustbin(1180,740);
	ball=new Ball(80,420,45,45);

	Slingshot = new SlingShot(ball.body,{x:200,y:100})

	Engine.run(engine);
  
}


function draw() {  
	 background(crImg);
  rectMode(CENTER);

  
  
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  bin.display();
  ball.display();


  drawSprites();

}

function mouseDragged (){

    Matter.Body.setPosition(ball.body,{x:mouseX , y: mouseY })
}

function mouseReleased (){

   Slingshot.fly()

}
