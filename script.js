


let platform = [];
var platformNumber = 50;
var platformGap = 50;
var grape;
var r = 0;

function Grape() {
  this.x = 10;
  this.y = 10;
}

function Platform() {
  this.x = 10;
  this.y = 10;
  this.height = 10;
}


function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);

  //creat platforms
  for (let i = 0; i < platformNumber; i++) {
    platform[i] = new Platform();
    platform[i].x = random(0, 700);
    platform[i].y = 500 + i * platformGap;
  }

  //set the starting status of the grape and platform
  platform[0].x = 0;
  grape = new Grape();
  grape.x = platform[0].x + 50;
  grape.y = platform[0].y - 5;
}


function draw() {
  background(51);
  drawPlatform();
  drawGrape();

  //make the grape move with mouse and stay on the platform/ drop
  grape.x = mouseX;
  if (mouseX < platform[r].x || mouseX > platform[r].x + 100) {
    grape.y = grape.y + 5;

    if (grape.y > platform[r].y + 10) {
      r++;
    }
  } else {
    grape.y = platform[r].y - 5;
  }
}


function drawPlatform() {
 
  fill(111, 38, 189);
  for (let i = 0; i < platformNumber; i++) {
    rect(platform[i].x, platform[i].y, 100, platform[i].height, 10);
    platform[i].y = 500 + i * platformGap - (frameCount / 0.7 % (500 + i * platformGap));

    //score
    textSize(20);
    textFont("Rubik Light");
    text('SCORE:', 625, 30);
    var score = parseInt(frameCount / 42) + 1;
    text(score, 715, 30);
  }
}

function drawGrape() {
  push();
  translate(grape.x, grape.y);
  circle(0, 0, 20);
  fill(79, 25, 70);
  pop();


  //Game over
  if (grape.y < 0 || grape.y > 500) {
    stroke(139, 0, 0);
    
    textFont("Segoe Script");
    fill(139, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text('GAME OVER', 400, 250);
    noLoop();
    noFill();
    noStroke();
  }
}

