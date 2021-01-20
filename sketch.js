const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball,ground;

var boptions={
    restitution:0.8
}
var goptions={
    isStatic:true
}

function setup(){
     createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ball = Bodies.circle(200,300,20,boptions);
    World.add(world,ball);

    ground = Bodies.rectangle(200,height,400,20,goptions);
    World.add(world,ground);
 
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,400,20);
    
    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(ball.position.x,ball.position.y,20,20);

}