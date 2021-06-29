var bgImg;
var tom,catImg,catImg2,catAni;
var jerry,mouseImg,mouseImg2,mouseAni;

function preload() {
    //load the images here
 bgImg=loadImage("garden.png");
 catImg=loadImage("cat1.png");
 cat_running=loadAnimation("cat2.png","cat3.png");
 catImg2=loadImage("cat4.png")
 mouseImg=loadImage("mouse2.png");
 mouse_teasing=loadAnimation("mouse3.png","mouse4.png");
 mouseImg2=loadImage("mouse1.png");
 

}

function setup(){
    createCanvas(1400,800);
    //create tom and jerry sprites here
jerry= createSprite(400,650,20,20);
jerry.addImage("mouse",mouseImg);
jerry.scale=0.2;
tom= createSprite(1000,650,20,20);
tom.scale=0.2;
tom.addAnimation("cat",catImg);

}

function draw() {

    background(bgImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.addAnimation("happyCat",catImg2);
    tom.changeAnimation("happyCat");
    jerry.addAnimation("happyMouse",mouseImg2);
    jerry.changeAnimation("happyMouse");  
    tom.velocityX=0;
    tom.x=1000;
    tom.y=650;
   }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
 jerry.addAnimation("mouseTeasing",mouse_teasing);
 jerry.changeAnimation("mouseTeasing");
 jerry.frameDelay=25;
  }

  if(keyCode === LEFT_ARROW){
    tom.addAnimation("catRunning",cat_running);
    tom.changeAnimation("catRunning");
    tom.frameDelay=25;
    tom.velocityX=-4;
  }


}
