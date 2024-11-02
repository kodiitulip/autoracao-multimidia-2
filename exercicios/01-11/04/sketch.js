var size = [0,0];
var area = 0;

function setup() {
  createCanvas(200, 100);
  
  const b = createButton('Click Me!');
  b.position(10,10);
  b.mousePressed(() => {
    try {
      size[0] = Number(prompt('Size X'));
      size[1] = Number(prompt('Size Y'));
      area = getArea(size[0], size[1]);
    } catch (error) {
      alert(error);
    }
  })
}

function draw() {
  background(220);

  text(`Size X: ${size[0]} Par: ${isEven(size[0])}
Size Y: ${size[1]} Par: ${isEven(size[1])}`, 10, 50);
  
  if (area)
    text(`Area: ${area} Par: ${isEven(area)}`, 10, 90);
}

function getArea(sizeX, sizeY) {
  if (isNaN(sizeX) || isNaN(sizeY)) {
    alert(`${sizeX} or ${sizeY} is NaN`);
    return 0
  }
  return sizeX * sizeY;
}

function isEven(n) {
  if (isNaN(n)) {
    alert(`${n} is NaN`);
    return 0
  }

  return n % 2 == 0;
}