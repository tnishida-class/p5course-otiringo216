// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    fill((j+i) % 2 == 0 ? 255 : 111);
    console.log(i,j);
    rect(size*i,size*j,size,size);


     // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }

  }
  for(let i=0;i<8;i++){
    for(let j=0;j<3;j++){
      if((i+j)%2==1){
        fill(196,0,0);
        ellipse(size*i+size/2,size*j+size/2,size-3);
      }
    }
  }
  for(let i=0;i<8;i++){
    for(let j=5;j<8;j++){
      if((i+j)%2==1){
        fill(0);
        ellipse(size*i+size/2,size*j+size/2,size-3);
      }
    }
  }
}
