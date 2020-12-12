const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine, myWorld;
var ground,ball;

function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();//myEngine.world;
  myWorld=myEngine.world;

  var options={
    isStatic:true
  }

   ground= Bodies.rectangle(200,390,400,10,options)
  World.add(myWorld,ground);
  console.log(ground.position);

var ball_options={
  restitution:1.3


}

ball= Bodies.circle(200,200,20,ball_options)
World.add(myWorld,ball);

}

function draw() {
  background("lightblue");  
  Engine.update(myEngine);


  fill("brown")

  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,10)
 fill("Pink")
 circle(ball.position.x,ball.position.y,20)
}