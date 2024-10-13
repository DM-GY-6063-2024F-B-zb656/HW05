function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  //style text
  textAlign(CENTER);
  textSize(20);
  textFont('Courier New');

  //seconds count
  let s = millis() / 1000;
  let sc = Math.trunc(s % 60)

  //minutes count
  let m = (s / 60);
  let mc = Math.trunc(m % 60);

  //hours count
  let h = Math.trunc(m / 60);

  //display clock counter reset text
  text(`it has been ${nf(h)} hours, ${nf(mc)} minutes, and ${nf(sc)} seconds since you clicked this page`, width/2, height/2);
}

// function mouseClicked() {
//   setup();
// }
