const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;
var ground_1,ground_2,ground_3;
var rope;
var box1_1,box1_2,box1_3,box1_4,box1_5,box1_6,box1_7;
var box2_1,box2_2,box2_3,box2_4,box2_5,box2_6,box2_7,box2_8,box2_9,box2_10;
var box3_1,box3_2,box3_3,box3_4,box3_5,box3_6;
var box4_1,box4_2;
var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  polygon = new Polygon(200,500,30);
  
  ground_1 = new Ground(600,680,1200,20);
  ground_2 = new Ground(600,500,285,10);
  ground_3 = new Ground(1000,250,220,10);

  rope = new Rope(polygon.body,{x:235,y:420});

  box1_1 = new Box_1(490,375,30,40);
  box1_2 = new Box_1(525,375,30,40);
  box1_3 = new Box_1(560,375,30,40);
  box1_4 = new Box_1(595,375,30,40);
  box1_5 = new Box_1(630,375,30,40);
  box1_6 = new Box_1(665,375,30,40);
  box1_7 = new Box_1(700,375,30,40);

  box2_1 = new Box_2(525,330,30,40);
  box2_2 = new Box_2(560,330,30,40);
  box2_3 = new Box_2(595,330,30,40);
  box2_4 = new Box_2(630,330,30,40);
  box2_5 = new Box_2(665,330,30,40);
  box2_6 = new Box_2(920,245,30,40);
  box2_7 = new Box_2(955,245,30,40);
  box2_8 = new Box_2(990,245,30,40);
  box2_9 = new Box_2(1025,245,30,40);
  box2_10 = new Box_2(1060,245,30,40);

  box3_1 = new Box_3(560,295,30,40);
  box3_2 = new Box_3(595,295,30,40)
  box3_3 = new Box_3(630,295,30,40);
  box3_4 = new Box_3(955,210,30,40);
  box3_5 = new Box_3(990,210,30,40)
  box3_6 = new Box_3(1025,210,30,40);

  box4_1 = new Box_4(595,250,30,40);
  box4_2 = new Box_4(990,175,30,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  polygon.display();
  ground_1.display();
  ground_2.display();
  ground_3.display();
  rope.display();
  box1_1.display();
  box1_2.display();
  box1_3.display();
  box1_4.display();
  box1_5.display();
  box1_6.display();
  box1_7.display();
  box2_1.display();
  box2_2.display();
  box2_3.display();
  box2_4.display();
  box2_5.display();
  box2_6.display();
  box2_7.display();
  box2_8.display();
  box2_9.display();
  box2_10.display();
  box3_1.display();
  box3_2.display();
  box3_3.display();
  box3_4.display();
  box3_5.display();
  box3_6.display();
  box4_1.display();
  box4_2.display();
  box1_1.score();
  box1_2.score();
  box1_3.score();
  box1_4.score();
  box1_5.score();
  box1_6.score();
  box1_7.score();
  

  drawSprites();
  text("Score: "+score,750,40); 
 
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(polygon.body);
  }
}

function mouseDragged()
	{
		Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
	}
	

	function mouseReleased()
	{
		rope.fly();
	}