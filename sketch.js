const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player;
var bomb;
var bombs;
var thief,thieves;
var villian,villians;
var gameState="play";
var bullet,bullets;

function setup(){
var canvas = createCanvas(600,400);

    engine = Engine.create();
    world = engine.world;

    player=createSprite(50,200,80,20);
    bombs=createGroup();
    thieves=createGroup();
    villians=createGroup();
    bullets=createGroup();
}

function draw(){
    background("black");
    if(gameState==="play"){
    if(keyWentDown(UP_ARROW)){
        player.velocityY=-5;
    }

    if(keyWentUp(UP_ARROW)){
        player.velocityY=0;
    }

    if(keyWentDown(DOWN_ARROW)){
        player.velocityY=+5;
    }

    if(keyWentUp(DOWN_ARROW)){
        player.velocityY=0;
    }
     if(keyWentDown("space")){
         shoot();
     }
    
spawnBomb();
  spawnTheives();  
spawnVillians();

if(player.isTouching(bombs)){
    player.destroy();
    gameState="end";
}

for(i=0;i<villians.length;i++){
    if(bullets.isTouching(villians.get(i))){
        var k=villians.get(i);
        console.log(k);
        //villians.i.destroy();
    }
    }
    
}  
    drawSprites();
}
function spawnBomb(){
if(frameCount%60===0){
    bomb=createSprite(random(600,700),random(10,390),20,20);
    bomb.shapeColor="blue";
    bomb.velocityX=random(-7,-9);
    bomb.lifetime=150;
    bombs.add(bomb);
}}

function spawnTheives(){
    if(frameCount%90===0){
        thief=createSprite(random(600,700),random(10,390),20,40);
        thief.shapeColor="green";
        thief.velocityX=-6;
        thief.lifetime=150;
        thieves.add(thief);
    }}

    function spawnVillians(){
        if(frameCount%90===0){
            villian=createSprite(random(600,700),random(10,390),40,80);
            villian.shapeColor="red";
            villian.velocityX=-5;
            villian.lifetime=150;
            villians.add(villian);
        }}

        function shoot(){
            
                bullet=createSprite(player.x+40,player.y,20,10);
                bullet.velocityX=9;
                bullet.lifetime=100;
                bullets.add(bullet);
        }