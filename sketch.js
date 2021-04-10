const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var dustbin;
var paper;

function preload() {
    paperImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbin.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    paper  = new Paper(100,100);

    Slingshot = new SlingShot(paper.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   
    paper.display();
  
    Slingshot.display();    
}
function mouseDragged (){

Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});



}
function mouseReleased(){
 SlingShot.fly();



}


