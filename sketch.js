const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//criar corpo da bola
	ball = Bodies.circle(260,100,radius,ball_options);
	World.add(world,ball);
	
	//criar chão e paredes
	groundObj = new Ground(width/2,height -50,width,20)
	leftSide = new Ground(1100,575,20,120)
	rightSide = new Ground(1350,575,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

//desenhar bola na tela
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,radius ,radius)
  groundObj.display()
  leftSide.display()
  rightSide.display()
}

//criar função para aplicar força na bola
function keyPressed(){
	if (keyCode == UP_ARROW ) {
		Body.applyForce(ball,ball.position,{
			x:350.55,
			y:-350.45,
		})
	}
}