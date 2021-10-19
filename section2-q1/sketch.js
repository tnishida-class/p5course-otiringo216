// 小手調べ
function setup(){
  createCanvas(500,500);
  for(let i = 0; i < 10; i++){

  if(i<5){
  noFill();
  stroke(0,0,255);
  }
  else {
    noFill();
    stroke(255,0,0);
  }
  let x = i * 10 + 10;
  ellipse(50, 50, x);  // BLANK[1]
  }
}
