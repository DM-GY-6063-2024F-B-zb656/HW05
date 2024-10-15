let img;
function preload() {
  img = loadImage("../images/whitelily.jpg");
}

let w;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(255);

  w = 1;
  h = 1;
}

function draw() {
  image(img, width / 2, height / 2, w, h);
}

function mouseClicked() {
  if (w < width && h < height) {
    w += 10;
    h += 10;
  } else {
    setup();
  }
}
