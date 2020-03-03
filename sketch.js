const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;
    
    box = new Box(30,200,40,360);
    box1 = new Box(370,200,40,360);
    box2 = new Box(80,270,40,220);
    box3 = new Box(320,270,40,220);
    box4 = new Box(120,310,40,140);
    box5 = new Box(280,310,40,140);
    box6 = new Box(200,270,120,200);
    box7 = new Box(200,160,280,20);
    box8 = new Box(80,140,20,20);
    box9 = new Box(160,70,40,40);
    box10 = new Box(240,70,40,40);
    box11 = new Box(320,140,20,20);
    box12 = new Box(200,30,40,40);
    box13 = new Box(120,225,30,30);
    box14 = new Box(280,225,30,30);
    box15 = new Box(120,200,20,20);
    box16 = new Box(280,200,20,20);
    box17 = new Box(120,120,60,60);
    box18 = new Box(200,120,60,60);
    box19 = new Box(280,120,60,60);
    


    ground = new Ground(200,380,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display(); 
    box1.display();
    box2.display(); 
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();


    ground.display();
}