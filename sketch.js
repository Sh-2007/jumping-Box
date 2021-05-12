var canvas;
var music;
var block1, block2, block3, block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);

    //create 4 different surfaces
 block1 = createSprite(85,550,170,20);
 block1.shapeColor = "red";
 block2 = createSprite(250,550,170,20);
 block2.shapeColor = "green";
 block3 = createSprite(420,550,170,20);
 block3.shapeColor = "orange";
 block4 = createSprite(590,550,170,20);
 block4.shapeColor = "blue";

 

    //create box sprite and give velocity
  ball = createSprite(200,200,20,20);
  ball.shapeColor = "white";
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function draw() {
    background(0);
    //create edgeSprite
 edges = createEdgeSprites();
 ball.bounceOff(edges);
 if(block1.isTouching(ball)){
music.play();
ball.bounceOff(block1);
ball.shapeColor = "red";
 }
 if(block2.isTouching(ball)){
    music.stop();
    ball.bounceOff(block2);
    ball.shapeColor = "green";
     }
if(block3.isTouching(ball)){
     ball.bounceOff(block3);
     ball.shapeColor = "orange";
     }
     if(block4.isTouching(ball)){
        ball.bounceOff(block4);
        ball.shapeColor = "blue";
        }   



    //add condition to check if box touching surface and make it box
    drawSprites();
}
