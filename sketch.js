var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);

  
  clues();
  security.display();

  // Add code to display score in the middle of the screen
fill("255")
text("score :"+score,800,50)

  // Add code to display the end screen


  drawSprites()
}







