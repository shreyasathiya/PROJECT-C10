var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e98c4726-b827-4208-933d-841d62aef2c4","0f7e5480-df2b-4cf8-986d-d8538f7ff331","490f7e39-cbfe-4bc6-87c3-0464c7fb7365"],"propsByKey":{"e98c4726-b827-4208-933d-841d62aef2c4":{"name":"sports_scoccer_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"MvzylpdAtbGvUwLlAMM2Y9IbA2D0Hxff","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/e98c4726-b827-4208-933d-841d62aef2c4.png"},"0f7e5480-df2b-4cf8-986d-d8538f7ff331":{"name":"soccer_yellow_1","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"TigtEc0AkhYaVNMrodJ26rSwBWVOlvaG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/0f7e5480-df2b-4cf8-986d-d8538f7ff331.png"},"490f7e39-cbfe-4bc6-87c3-0464c7fb7365":{"name":"puck_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png","frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var player1Paddle=createSprite(200,50,80,13);
player1Paddle.shapeColor=("black");
var Player1Score=0;

var player2Paddle=createSprite(200,350,80,13);
player2Paddle.shapeColor=("black");
var player2Score=0;

var Ball=createSprite(200,250,10,10);
Ball.setAnimation("soccer_yellow_1");
Ball.scale=0.1;

var Goal1=createSprite(200,10,150,30);
Goal1.shapeColor=("yellow");
var Goal2=createSprite(200,390,150,30);
Goal2.shapeColor=("yellow");

var Boundary1=createSprite(5,200,5,400);
Boundary1.shapeColor=("white");
var Boundary2=createSprite(395,200,5,400);
Boundary2.shapeColor=("white");
var Boundary3=createSprite(200,5,400,5);
Boundary3.shapeColor=("white");
var Boundary4=createSprite(200,395,400,5);
Boundary4.shapeColor=("white");

var gameState="serve";
function draw() {
background("BLUE");
createEdgeSprites();
fill("red");
textSize(25);
text("score:"+player2Score,10,250);
 fill("red");
textSize(25);
text("score:"+Player1Score,10,150);


 

if (gameState=="serve"){
  textSize(25);
  text("PRESS SPACE TO START",50,200);
  if(keyDown("space")){
  Ball.velocityX=5;
  Ball.velocityY=7;
  gameState="play";
}        
}

if (gameState=="play"){
  Ball.bounceOff(Boundary1);
Ball.bounceOff(Boundary2);
Ball.bounceOff(Boundary3);
Ball.bounceOff(Boundary4);
Ball.bounceOff(player1Paddle);
Ball.bounceOff(player2Paddle);
  if(keyDown("right")){
    player1Paddle.x=player1Paddle.x+10;
  }
  
  if(keyDown("left")){
    player1Paddle.x=player1Paddle.x-10;
  }
  
  if(keyDown("d")){
    player2Paddle.x=player2Paddle.x+10;
  }
  
  if(keyDown("a")){
    player2Paddle.x=player2Paddle.x-10;
  }  
   if(Ball.isTouching(Goal1)){
    player2Score=player2Score+1;
    Ball.x=200;
    Ball.y=200;
  }
  
  if(Ball.isTouching(Goal2)){
    Player1Score=Player1Score+1;
    Ball.x=200;
    Ball.y=200;
  }
   if(Player1Score==5||player2Score==5){
     Ball.x=200;
     Ball.y=200;
     gameState="end";
   }
}
  
  if(gameState=="end"){
    background("white");
    text(Player1Score+":"+player2Score,200,250);
    if(player2Score==5){
    text("GAME OVER PLAYER2 WON",30,180);
    text("PRESS SPACE TO RESTART",60,300);
    Ball.y=200;
    Ball.x=200;
 } 
 
 if(Player1Score==5){
    text("GAME OVER PLAYER1 WON!",30,180);
    text("PRESS SPACE TO RESTART",60,300);
    Ball.y=200;
    Ball.x=200;
 } 
  if(keyDown("space")){
    gameState="serve"; 
    Player1Score=0;
    player2Score=0;
  }
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
