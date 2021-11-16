// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
}
function draw(){
  background(255);
  balloon("I love keyakizaka46",mouseX,mouseY);
}

function balloon(t,x,y,){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(188,55,0);
  rect(x, y, w + p * 2, h + p * 2);
  triangle(x,y+h,x,y+h+10,x+10,y+h)
  noStroke();
  fill(155,299,255);
  text(t, x+p, y+h + p);
}
