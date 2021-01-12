const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;


function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(800,400);
 clock1=new CLock(200,200,50)

}

function draw() {
  engine=Engine.update()
  clock1.display()
  background(255,255,255);  
  drawSprites();
}