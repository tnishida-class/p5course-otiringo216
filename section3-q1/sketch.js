// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  noStroke();
  fill(180,0,0);
  if(mouseIsPressed){
    count = (count + 5) % cycle;
  }
  else{
    count = (count + 2) % cycle;
  }
  size = 110 + count
   // BLANK[1]
  ellipse(width / 2, height / 2, size);
}
