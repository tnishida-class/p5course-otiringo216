let x,y;
let grabbed1,grabbed2;
let imgCake;
let imgWoman;
let ax,ay;
let bx,by;
let p,q;
function preload(){
  imgCake=loadImage("cake.png");
  imgWoman=loadImage("woman.png");
  imgSmile=loadImage("smile.png");
  imgBad=loadImage("bad.png");
  imgMazui=loadImage("mazui.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  bx = width / 2 + 100;
  by = height / 2;
  grabbed1 = false;
  grabbed2 = false;
}


function draw(){
  background(900);
  image(imgWoman,0,0,p,q);
  p=300;
  q=300;

  image(imgCake,x,y,80,80);
  image(imgMazui,bx,by,80,80);
  if(dist(x+40,y+40,150,150) < 30){
    image(imgSmile,0,0,300,300);
    p=-1;
    q=-1;
    fill(199+sin(frameCount*0.1) * 128,0,0);
    textSize(98);
    text("おいしい！",100,500);
  }
  if(dist(bx+40,by+40,150,150)<30){
    image(imgBad,0,0,300,300);
    p=-1;
    q=-1;
    fill(0,0,199+sin(frameCount*0.1) * 128);
    textSize(98);
    text("まず～い！",100,500);
  }
}

function mousePressed(){
  grabbed1 = dist(mouseX, mouseY, x+40, y+40) < 40;
  grabbed2 = dist(mouseX, mouseY, bx+40, by+40) < 40;
}

function mouseDragged(){
  if(grabbed1){
    x = mouseX-40;
    y = mouseY-40;
  }
  else if (grabbed2) {
    bx = mouseX-40;
    by = mouseY-40;
  }
}

function keyPressed(){
  if(key == " "){
    x = width / 2;
    y = height / 2;
    bx = width / 2 +100;
    by = height / 2;
    grabbed1 = false;
    grabbed2 = false;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
