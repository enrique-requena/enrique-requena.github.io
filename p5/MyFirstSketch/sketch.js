
var w=50;
var h=50;

var quantity = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#222222');

while(quantity < windowWidth) {
  x = random(windowWidth);
  y = random(windowHeight);
  stroke('#222222')
  fill('#BD2E15')
  rect(x,y,w,h*2)
  quantity = quantity + 1;
}

}

function draw() {
  // put drawing code here
if (mouseIsPressed) {
  stroke('#430AFC');
  strokeWeight(5);
  fill('#3CFFFF');
  ellipse(mouseX,mouseY,h,w);
}
else {
  stroke('#222222');
  strokeWeight(5)
  fill('#E6FF00');
  square(250, 250, 250);
  square(335,335,75);
  ellipse(300,200,50,50);
  ellipse(450,200,50,50);
  ellipse(300,200,25,25);
  ellipse(450,200,25,25);
  text("Echo The Robot",330,450)
  text("BEEP BOOP",510,400)
  text("BEEP BOOP",590,400)
  text("BEEP BOOP",510,450)
  text("BEEP BOOP",590,450)
  text("BEEP BOOP",90,400)
  text("BEEP BOOP",175,400)
  text("BEEP BOOP",90,450)
  text("BEEP BOOP",175,450)
  text("Stay Back I Am Going To Malfunction",275,550)
  ellipse(mouseX,mouseY,h,w);
}




}
