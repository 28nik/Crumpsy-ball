
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var keychecker = 1;
var box1, box2, box3;
var xPos = 450;
var yPos = 10;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(xPos+600,yPos+525,20,50);
	box2 = new Box(xPos+650,yPos+560,120,20);
	box3 = new Box(xPos+700,yPos+525,20,50);

	trashBody = Bodies.circle(100 , 200 , 15 , {restitution:0.3, isStatic:false, friction: 0.5, density: 1.5});
	World.add(world, trashBody);

	ground = Bodies.rectangle(width/2, height-15, width, 70, {isStatic: true})
	World.add(world, ground);

	groundSprite = createSprite(ground.position.x, ground.position.y, width, 50)

	Engine.run(engine);
  
}


function draw() {
	
	

	Engine.update(engine);
	rectMode(CENTER);
	background(0);
	rect(100,573,50,15);
	box1.display();
	box2.display();
	box3.display();
	fill("pink");
	circle(trashBody.position.x,trashBody.position.y,30);
	drawSprites();
 
	fill("white");
	textSize(32)
	text(mouseX+ ", "+mouseY,400,100);
	
	keypress()
}


function keypress() {
	if (keyCode === UP_ARROW && keychecker ===1) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.applyForce(trashBody, trashBody.position, {x:60,y:-60});
		keychecker = 2
	}
}
