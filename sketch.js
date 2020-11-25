var PLAY = 1;
var END = 0;
var gameState = 1;

var enemy1, enemy2, enemyGroup, enemyImage;
var monsterImage;
var fruits, fruit1, fruit2, fruit3, fruit4, fruitGroup, fruitImage;
var sword, swordImage;
var gameOver, gameOverImage;
var score;
var knifeSwooshSound, gameOverSound;

function preload() {
  swordImage = loadImage("sword.png");
  enemy1 = loadImage("alien1.png");
  enemy2 = loadImage("alien2.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png");
 knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameover.mp3");
}



function setup() {
  createCanvas(600, 600)
  sword = createSprite(0, 0, 0, 0);
  sword.addImage(swordImage);
  sword.scale = 1;


  fruitGroup = createGroup();
  enemyGroup = createGroup();
  score = 0;
}




function draw() {
  background("lightblue");
  
  sword.y=World.mouseY;
  sword.x=World.mouseX;
     
  if (gameState===PLAY) {
    fruits();
    enemys();
        text("Score: "+ score, 270,30);
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    knifeSwooshSound.play;
    score=score+1;
    sword.addImage(swordImage);
    }
  
   drawSprites();

  }
 
  if(enemyGroup.isTouching(sword)){
    gameState===END;
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    score=score-2;
    sword.addImage(gameOverImage);
    gameOverSound.play;
    
  }
  
  }
  



   






function enemys() {
if(World.frameCount%150===0){
  monster=createSprite(600,200,20,20);
  monster.addAnimation("moving", enemy1);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-(8+(score/8));
  monster.setLifetime=50;
  enemyGroup.add(monster);
}
}


function fruits() {
  var r;
  if (World.frameCount%80===0) {
    fruit = createSprite(600, 200, 20, 20);
    fruit.scale = 0.2;
    r = Math.round(random(1, 4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    fruit.y = Math.round(random(20, 340));
    fruit.velocityX = -(7+(score/2));
    fruit.setLifetime = 100;
    fruitGroup.add(fruit);
  }


}