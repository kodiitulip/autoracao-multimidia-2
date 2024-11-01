var pressed = 0;
var name;

function setup() {
  createCanvas(200, 100);
  textAlign(CENTER, CENTER);
  
  const b = createButton('Click Me!');
  b.position(10,10);
  b.mousePressed(() => {
    name = prompt('What is your Name?');
  })
}

function draw() {
  background(220);

  text(`Mouse Pressed: ${pressed} times`, width / 2, height / 2);
  
  if (name)
    text(`Welcome, ${name}!`, width / 2, height * 3 / 4);
}

function mousePressed() {
  pressed++;
}
