const Engine=Matter.Engine,
const World=Matter.World,
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


 var engine, world,bodies;
var stand,block1,block2,block3,block4,block5,block6,
    block7,block8,block9;
    block10;


function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;


 stand =new Ground(1000, 20, 50, 20);

 //level one
 block1=new Box(330,235,30,40);
 block2=new Box(335,235,30,40);
 block3=new Box(340,235,30,40);
 block4=new Box(345,235,30,40);

 //level two
 block5=new Box(335,240,30,40);
 block6=new Box(340,240,30,40);
 block7=new Box(345,240,30,40);

 //level three
 block8=new Box(340,245,30,40);
 block9=new Box(345,245,30,40);

 //top
 block10=new Box(345,250,30,40);

}



function draw() {
  background(255,255,255); 

  Engine.update(engine);
  
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  
  drawSprites();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
