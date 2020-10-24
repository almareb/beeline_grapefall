
const width = 500;
const height = 600;
const grapeD = 50;

let grapeX = width/2;
let grapeY = height-grapeD/2;
let platX,platY;
let rectX, rectY;
let l = true;


function setup() {
  createCanvas(width, height);
  
  
}

function draw() {
  background(51);
  grape();
  if (l == true){
    platforms();
  }
}


function grape(){
  circle(grapeX, grapeY, grapeD);
  if (keyIsDown(LEFT_ARROW) && (grapeX-grapeD/2)>=0) {
    grapeX -= 5;
  } else if(keyIsDown(RIGHT_ARROW)&& (grapeX+grapeD/2)<=width) {
    grapeX += 5;
  }
}

function platforms(){
  
  for (let i = 0; i < 3; i++) {
    let platGap = height / 3;
    rectY = 100 + i * platGap;
    rectX = random(0, width-150);
    rect(rectX, rectY, 150,20);
    
  }
}