
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;



var ground;
var tree;
var boyImage;
var mango1, mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var stone;
var string;

function preload()
{
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(width/2,600,width,20)
  tree = new Tree(600,400,10,500)
  mango1= new Mango(610,210,60,60)
  mango2= new Mango(500,230,60,60)
  mango3=  new Mango(450,280,60,60)
  mango4= new Mango(800,290,60,60)
  mango5= new Mango(600,350,60,60)
  mango6= new Mango(730,300,60,60)
  mango7= new Mango(600,290,60,60)
  mango8= new Mango(500,340,60,60)
  mango9= new Mango(720,240,60,60)
  stone= new Stone(195,520,50,50)
  string= new Rubber(stone.body,{x:195,y:520})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display()
  tree.display()
  image(boyImage,150,450,200,300)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  stone.display()
  string.display()
  hitMango(stone,mango1)
  hitMango(stone,mango2)
  hitMango(stone,mango3)
  hitMango(stone,mango4)
  hitMango(stone,mango5)
  hitMango(stone,mango6)
  hitMango(stone,mango7)
  hitMango(stone,mango8)
  hitMango(stone,mango9)
}

function mouseDragged(){
  //6. DRAG ONLY WHEN ON SLING 
  //if (gameState==="onSling"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
 // }
}


function mouseReleased(){
  string.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:195,y:520})
    
     string.attach(stone.body);
  }}


  function hitMango(stone,mango){ //dist() Function is used to measure the distance between two points in 2D
     var distance=dist(stone.body.position.x, stone.body.position.y,mango.body.position.x, mango.body.position.y)
      if(distance<=mango.r+stone.r)
       { Matter.Body.setStatic(mango.body,false); } }
