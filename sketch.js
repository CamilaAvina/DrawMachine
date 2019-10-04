let array = [];



function setup() {
  createCanvas(600, 600);
  background(220);
  strokeWeight(5);
  noFill();
}

function draw() {



  if (mouseIsPressed) {
  //  stroke(map(mouseX, 0, 600, 0, 255, true));
    //  line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

  }

}

function keyTyped() {


  if (key === 's') {
    //save this image
    saveCanvas('Drawing Machine', 'png');
  } else if (key === 'd') {
    //display image
    //console.log(array[0]);
    //  console.log(array[0][1]);
  beginShape();
    for (let i = 0; i < array.length -1; i++) {
      //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);

      curveVertex(array[i][0], array[i][1]);
      }
  endShape();

}
return false;
}
