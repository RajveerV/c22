const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var ball_options ={
    restitution:0.5,
  friction:1

  }
  ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball)

  var ground_options = {
    isStatic :true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  console.log(ground);

}

function draw() {
  background("green");

  Engine.update(engine)

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}