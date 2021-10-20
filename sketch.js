const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage, playerimage, playerArcherIMG;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherIMG = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  playerArcher = new PlayerArcher(250,300,100,150, 200); 

  //create player base body
var options = {
  isStatic: true 
};
  //create player body
playerBase = Bodies.rectangle(200,350,100,150,options);
World.add(world, playerBase)

player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
World.add(world, player)

playerArcher = Bodies.rectangle(250, playerBase.position.y - 100, 50, 180, options);
World.add(world, playerArcher)
}

function draw() {
  background(backgroundImg);
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150)
  image(playerimage, player.position.x, player.position.y, 50, 180)
  image(playerArcherIMG, playerArcher.position.x, playerArcher.position.y, 100, 180)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
