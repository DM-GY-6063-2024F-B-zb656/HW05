let img;
function preload() {
  img = loadImage('/images/testimage.jpg');
}

let w = 1
let h = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(255);
}

function draw() {
  image(img, width/2, height/2, w, h);
}

function mouseClicked() {
  w += 10;
  h += 10;
}
