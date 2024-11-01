const circles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  circles.forEach(({ x, y }) => {
    fill("white");
    circle(x, y, 50);
  });

  if (mouseIsPressed) fill("red");
  else fill("blue");

  triangle(
    mouseX + 15,
    mouseY - 15,
    mouseX - 15,
    mouseY - 15,
    mouseX,
    mouseY + 15
  );
}

function mousePressed(event) {
  const { x, y } = event;
  circles.push({ x, y });
}
