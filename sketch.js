const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var stand1,stand2,ground,block2;

function preload(){
    polygonImg = loadImage("polygon.png");
}


function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


   fill(255);
   ground = new Ground();

   stand1 = new Stand(800,135,100,5);
   stand2 = new Stand(500,275,200,5);

   fill(255)
   block1 = new Block(792,125,15,15);
   fill(255)
   block2 = new Block(800,125,15,15);
   fill(255)
   block3 = new Block(808,125,15,15);
   fill(255)
   block4 = new Block(792.5,110,15,15);
   fill(255)
   block5 = new Block(808,110,15,15);
   fill(255)
   block6 = new Block(800,95,15,15);


   fill(255)
   block7 = new Block(492.5,265,15,15);
   fill(255)
   block8 = new Block(507.5,265,15,15);
   fill(255)
   block9 = new Block(523,265,15,15);
   fill(255)
   block10 = new Block(477,265,15,15);
   fill(255)
   block11 = new Block(500,250,15,15);
   fill(255)
   block12 = new Block(515.5,250,15,15);
   fill(255)
   block13 = new Block(484.5,250,15,15);
   fill(255)
   block14 = new Block(492.5,235,15,15);
   fill(255)
   block15 = new Block(507.5,235,15,15);
   fill(255)
   block16 = new Block(500,220,15,15);

   fill(225);
   ball = Bodies.circle(200,175,20);
   World.add(world,ball);
   fill("yellow")
   slingshot = new SlingShot(this.ball,{x: 225, y: 175})
}


function draw(){
    background(0);
    fill(255);
    text(mouseX + "," + mouseY,mouseX,mouseY)
    ground.display();
    stand1.display();
    stand2.display();
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
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    imageMode(CENTER);
    image(polygonImg, ball.position.x, ball.position.y, 40,40);
    slingshot.display();
}


function mouseDragged(){
    Matter .Body.setPosition(this.ball,{x: mouseX, y: mouseY})
}
function mouseReleased(){
    slingshot.fly()
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball)
    }
}