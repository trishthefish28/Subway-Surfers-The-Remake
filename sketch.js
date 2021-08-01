var track, track_image, runner, running, edge1, edge2;

function preload(){
  track_image = loadImage("path.png");
  running = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);

  edges = createEdgeSprites();

  //Create a track sprite
  track = createSprite(200,200,100.50);
  track.addImage("track_image",track_image);
  track.scale = 1.5;

  //Create the runner
  runner = createSprite(200,350,50,50)
  runner.addAnimation("running", running);
  runner.scale = 0.05;
}

function draw() {
  background("white");

  //make the runner move
  if (keyWentDown("left")){
    runner.velocityX = -3
  }

  if (keyWentDown("right")){
    runner.velocityX = 3;
  }
  
  //making the ground move
  track.velocityY = 3;
  if (track.y > 400){
    track.y = 20;
  }

  //colliding
  runner.collide(edges[0]);
  runner.collide(edges[1]);

  drawSprites();
}
