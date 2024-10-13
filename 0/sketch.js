function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  //style text
  textAlign(LEFT, CENTER);
  textSize(20);
  textFont('Courier New');

  //seconds count
  let s = millis() / 1000;
  let sc = round(s % 60)

  //minutes count
  let m = (s / 60);
  let mc = Math.trunc(m % 60);

  //display seconds text
  text(`seconds: ${nf(sc,2)}`, width/2, height/2);

  //display minutes text
  text(`minutes: ${nf(mc,2)}`, width/2, height/2 + 100);



  //display text EVENTUALLY
  //text(`[hour function]:[minute function]:[seconds function]` width/2, height/2);
}
