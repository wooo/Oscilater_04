var osc1;
var osc2;


function setup() {
  createCanvas(400, 400);

  osc1 = new p5.Oscillator();
  osc1.setType('sine');
  //osc1.setType('square');
  //osc.setType('triangle');
  osc1.freq(220);
  osc1.amp(0.0);
  osc1.start();

  osc2 = new p5.Oscillator();
  osc2.setType('sine');
  //osc.setType('square');
  //osc.setType('triangle');
  osc2.freq(220);
  osc2.amp(0.0);

  osc2.start();

}

function draw() {

  background(0);
  var pitch = mouseX;
  var pitch2 = mouseY;
  osc1.freq(pitch);
  osc2.freq(pitch2);

  if (mouseIsPressed) {
    osc1.amp(0.6);
    osc2.amp(0.6);
  }

  fill(255);
  textSize(20);
  text("Oscillator 1:" + pitch + "Oscillator 2:" + pitch2, 10, 50);
}

function mouseReleased() {
  osc1.amp(0.0);
  osc2.amp(0.0);
}