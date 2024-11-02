const coords = [];

function setup() {
  createCanvas(200, 100);
}

function draw() {
  background(220);

  text('Press "R" to clear');

  coords.forEach(({x, y}) => {
    rect(x - 10, y - 10, 20);
  })
}

function mousePressed(event) {
  const {x, y} = event;
  
  coords.push({x, y});
}

function keyPressed(event) {
  const {code} = event;

  if (code === 'KeyR')
    coords.length = 0;
}