var Food,database;
var position
var dog,dogHappy,dogImg,foodStock;

function preload()
{
  dogHappy = loadImage("images/dogImg1.png");
  dogImg = loadImage("images/dogImg.png");
  
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,20,60);
  
  database = firebase.database()
  var foodStock = database.ref("dog/food")
  foodStock.on("value",readStock);
}


function draw() {  
  background()
  drawSprites();
  if(keyDown(UP_ARROW)){
    changePosition(0,-1);
    dog.addImage(dogHappy )
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1);                      
}

}

function readStock(data){
  food = data.val();
  dog.x = position.x;
  dog.y = position.y;
}

function changePosition(y){
  database.ref('/').update({
      y: position.y + y
  })

}

