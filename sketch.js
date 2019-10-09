let array = [];
let backgroundColor = 200;
let noiseOffset = 0.0;
let strokeWidth = 5;


function setup() {
  createCanvas(550,550);
  background(backgroundColor);
  strokeWeight(strokeWidth);
  noFill();
}

function draw() {

  strokeWeight(strokeWidth);

  noiseOffset += 0.01;
  strokeWidth = noise(noiseOffset) * 100;
  //  background(200,50,133,5);
  if (mouseIsPressed) {
    //  stroke(map(mouseX, 0, 600, 0, 255, true));
    //  line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    //  line(mouseX, mouseY, pmouseX, pmouseY);
    backgroundColor -= 3;
    background(backgroundColor);
    //line(mouseX, mouseY, pmouseX, pmouseY);

    array.push([mouseX, mouseY]);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);

      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  }


}

function keyTyped() {


  if (key === 's') {
    //save this image
    saveCanvas('Drawing Machine', 'png');
  } else if (key === 'd') {
    background(255);
  
    //display image

    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);

      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  }

  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 255;

}

function drawGrid(){
  for (let i = 0; i < 3; i++){
    ellipse(i * 100, 50 ,50,50);
    for (let j = 0; j < 3; j++){

      ellipse(i *100, j *100,50,50);
    }
    }
  }
