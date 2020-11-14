const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box11 , box12 , box13 , box14 , box15 , box21 , box22 , box23 , box31 ;
var ball;
var slingshot;
var gamemode;
var score=0;
var bg="nothing";

function setup() 
{
  getBackgroundImg();
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  ground = new Ground( 550 , 300 , 200 , 20 );

  box11 = new Box( 460 , 270, 40 , 40 );
  box12 = new Box( 500 , 270, 40 , 40 );
  box13 = new Box( 540 , 270, 40 , 40 );
  box14 = new Box( 580 , 270, 40 , 40 );
  box15 = new Box( 620 , 270, 40 , 40 );
  box21 = new Box( 500 , 230, 40 , 40 );
  box22 = new Box( 540 , 230, 40 , 40 );
  box23 = new Box( 580 , 230, 40 , 40 );
  box31 = new Box( 540 , 270, 40 , 40 );

  ball = new Polygon( 150 , 150 , 30 , 30 );

  slingshot = new SlingShot( ball.body , {x:150,y:150} );

  gamemode = "unlaunched";
}

function draw() 
{
  Engine.update(engine);
  background( bg );  
  display();
  Score();
  push();
  fill( "red" );
  textSize( 20 );
  text( "Drag the hanging box to aim and release to fire, press space to take a second turn" , 30 , 30 );
  text( "Score:"+score , 700 , 380 );
  pop();
}

function display()
{
  ground.display("red");
  box11.display("blue");
  box12.display("blue");
  box13.display("blue");
  box14.display("blue");
  box15.display("blue");
  box21.display("blue");
  box22.display("blue");
  box23.display("blue");
  box31.display("blue");
  ball.display( "yellow" );
  slingshot.display();
}
function Score()
{
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box21.score();
  box22.score();
  box23.score();
  box31.score();
}

function mouseDragged()
{
  if( gamemode==="unlaunched" )
  {
    Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased()
{
  slingshot.fly();
  gamemode = "launched";
}
function keyPressed()
{
  if( keyCode===32 )
  {
    slingshot.attach( ball.body );
    gamemode = "unlaunched";
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>06 && hour<=19){
      bg = "white";
  }
  else{
      bg = "black";
  }
}