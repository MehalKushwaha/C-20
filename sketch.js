var f,m;

function setup() {

  createCanvas(800,800);
  f=createSprite(600, 400, 30, 50);
  m= createSprite(400,200,40,60);
  f.shapeColor="white";
  m.shapeColor="white";
}
function draw() {
  background("black");  
  m.y=World.mouseY;
  m.x=World.mouseX;
console.log(f.x-m.x);

if(f.x-m.x<f.width/2+m.width/2&&m.x-f.x<m.width/2+f.width/2&&
  f.y-m.y<f.height/2+m.height/2&&m.y-f.y<m.height/2+f.height/2){

  f.shapeColor="blue";
  m.shapeColor="blue";

}
else{
  f.shapeColor="white";
  m.shapeColor="white";
}

  drawSprites();
}