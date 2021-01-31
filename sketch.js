// variable area
// variable for adding background image
var backgroundImg;
// variable for blackhole and its image
var blackhole,blackholeImg;
// variable for spaceship and its images
var spaceship,spaceshipImg;
// variable for the space station and its image
var spaceStation,spaceStationImg;
// variables for intro images
var introImage,introImageImg 
// variable for score
var score = 0;

var startButton,startButtonImg
// making a variable for game state
var gameState = 0;
// making variables for each variable
var WAIT = 0
var PLAY = 1;
var END = 2;

// image loading function
function preload(){
    // loading the background image into its variable
    backgroundImg = loadImage("Images/Background.jpg");
    // loading the blackhole image into its variable
    blackholeImg = loadImage("Images/Blackhole.jpg");
    // loading the spaceship image into its variable
    spaceshipImg = loadImage("Images/Spaceship1.jpg");
    // loading the space station's image into its variable
    spaceStationImg = loadImage("Images/Space Station and Astros.jpg");
    // loading the intro image into its variable
    introImageImg = loadImage("Images/Intro Image.jpg")
    //  loading the start button image into its variable
    startButtonImg = loadImage("Images/Start Button Image.jpg");
}

// function for creating sprites and addind images to the sprites
function setup(){
    // making a canvas variable 
    var canvas = createCanvas(displayWidth,displayHeight-75);
    // making the spaceship object and adding its image
    spaceship = createSprite(500,displayHeight/2);
    spaceship.addImage(spaceshipImg);
    // making the blackhole object and adding its image
    blackhole = createSprite(100,displayHeight/2-10);
    blackhole.addImage(blackholeImg);
    blackhole.scale = (0.8);
    // making the space station object and adding its image
    spaceStation = createSprite(displayWidth-100,displayHeight/2-100);
    spaceStation.addImage(spaceStationImg);
    spaceStation.scale = 0.8
    // making the start button and adding its image
    startButton = createSprite(displayWidth/2+450,displayHeight/2);
    startButton.addImage(startButtonImg);
    startButton.scale = 0.2;
  

    
}

// functions making background and other mechanical function
function draw(){

    // making an if condition to arrange the function according the game states
    if(gameState === 0){
        background(0);
        fill("white");
        textSize(50);
        text("Welcome to the Space Mission",displayWidth/2-120,displayHeight/2-50);
        spaceship.visible = false;
        spaceStation.visible = false;
        blackhole.visible = false;
        image(introImageImg,0,displayHeight/2-100);
        if(mousePressedOver(startButton)){
            gameState = 1;
        }
    }
    if(gameState === 1){
        // adding the background to the main output
        background(backgroundImg);
        // displaying the scores
        fill("#7AD3D0");
        textSize(35);
        textStyle(BOLD);
        text("Score: " + score, displayWidth/2+400,displayHeight/2-250);
        // vanishing the start button
        startButton.visible = false
        // adding velocity to the spaceship
        spaceship.velocityX = -5;
        
        // making key controls to rescue the spaceship
        if(keyIsDown(RIGHT_ARROW)){
        spaceship.velocityX = 1;
        }
        if(keyIsDown(UP_ARROW)){
        spaceship.velocityY = -1;
        }
        if(keyIsDown(DOWN_ARROW)){
        spaceship.velocityY = 1;
        }
        // making the spaceship stop when reaches the spacestation
        if(spaceship.isTouching(spaceStation) ){
        spaceship.velocityX = 0;
        spaceship.velocityY = 0;         
        }    


    }

    if(spaceship.isTouching(blackhole)){
        spaceship.remove();
        gameState = 2;        
        
    }
    // making an if condition for displaying the text
    if(gameState === 2){
        background("black");
        // vanishing the start button
        startButton.visible = false;
        // vanishing the blackhole in the last stage
        blackhole.visible = false;
        // vanishing the space station in the last stage
        spaceStation.visible = false;
        fill("white");
        textSize(50);
        text("Game Over",displayWidth/2-100,displayHeight/2-50);    
       
    }

    
   
    
    

drawSprites();
}

