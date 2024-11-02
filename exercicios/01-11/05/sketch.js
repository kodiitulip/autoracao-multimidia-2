function setup() {
  createCanvas(200, 100);
  
  let c = 0;
  while (c < width) {
    stroke('black');
    strokeWeight(4);
    line(c,0,c,height);
    c += 8;
  }
  
  strokeWeight(1);
  for (let i = 0; i < 10; i++) {
    circle(i * 20 + 10, height / 2, 20);
  }
}