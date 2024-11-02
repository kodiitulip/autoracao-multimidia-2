var booleano = 0;

function setup() {
  createCanvas(200, 100);
  const b = createButton('Click Me!');
  b.position(10,10)
  b.mousePressed(() => {
    booleano = round(random(1,11));
  })
}

function draw() {
  if (mouseY > height / 2) 
    background('yellow');
  else
    background('lime');
  
  if (booleano > 5)
    text(`${booleano} is Greater than 5`, 10, 70);
  else if (booleano == 5)
    text(`${booleano} is 5`, 10, 70);
  else
    text(`${booleano} is Lesser than 5`, 10, 70);
}