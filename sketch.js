var box;
function setup() {
  createCanvas(1300,800);
  box = createSprite(1000, 400, 100, 100);
}

function draw() 
{
  background("blue");
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
    box.shapeColor = "red";
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
    box.shapeColor = "green";
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5;
    box.shapeColor = "yellow";
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 5;
    box.shapeColor = "white";
  }
  drawSprites();

}




