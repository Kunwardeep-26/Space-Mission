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
var introImage,introImageImg;
// variable for score
var score = 0;
// variables for start button and its image
var startButton,startButtonImg;
// variables for restart button and its image
var restartButton,restartButtonImg;
// making a variable for game state
var gameState = 0;
// making variables for each variable
var WAIT = 0
var PLAY = 1;
var END = 2;

var timerValue = 20;

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
    introImageImg = loadImage("Images/Intro Image.jpg");
    // loading the start button image into its variable
    startButtonImg = loadImage("Images/Start Button Image.jpg");
    // loading the start button image into its variable
    restartButtonImg = loadImage("Images/Restart Button Image.jpg");  
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
    // making the restart button and adding its image
    restartButton = createSprite(displayWidth/2,displayHeight/2);
    restartButton.addImage(restartButtonImg);
    restartButton.scale = 0.2   

    textSize(20);
    fill("");
    setInterval(timeIt,1000);


    
}

// functions making background and other mechanical function
function draw(){
    // changing the background 
    background(0);
    // making an if condition to arrange the function according the game states    
        // adding text 
        fill("white");
        textSize(50);
        text("Welcome to the Space Mission",displayWidth/2-120,displayHeight/2-50);
        // making the start button visible
        startButton.visible = true;
        // making everything invisible
        spaceship.visible =false;
        spaceStation.visible = false;
        blackhole.visible = false;
        // adding an image for the intro
        image(introImageImg,0,displayHeight/2-100);
        // making the resart button invisible
        restartButton.visible = false;
        // making the start button accessable
        if(mousePressedOver(startButton)){
            gameState = 1;
        }


    

    if(gameState === 1){
        // adding the background to the main output
        background(backgroundImg);
        // code to display the timer
        if (timerValue >= 10) {
            text("0:" + timerValue, displayWidth / 2-500, displayHeight /2-250);
        }
        if (timerValue < 10) {
        text('0:0' + timerValue, displayWidth / 2-500, displayHeight /2-250);
        }
        if (timerValue == 0) {
            text( displayWidth / 2-500, displayHeight /2-250);
        }
        // making the restart button invisible
        restartButton.visible = false;
        // making everything visible back again
        spaceship.visible = true;
        spaceStation.visible = true;
        blackhole.visible = true;
        //startButton.visible = true;
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
            background(0);         
            spaceship.velocityX = 0;
            spaceship.velocityY = 0;  
            timerValue = 0;
            textSize(50);
            text("You Win",displayWidth/2-100,displayHeight/2);
            spaceship.visible = false;
            spaceStation.visible = false;
            blackhole.visible = false;                       
        }

        

    }
    if(spaceship.isTouching(blackhole)){
        spaceship.visible = false;
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
        // adding the text for displaying game over
        fill("white");
        textSize(50);
        text("Game Over",displayWidth/2-100,displayHeight/2-50);   
        restartButton.visible = true;
        spaceship.velocityX = 0; 
        restartButton.visible = false;
    }
    if(mousePressedOver(restartButton)){
        reset();
        // gameState = 0;   
        // Score = 0;                  
        // blackhole.visible = false;
        // spaceStation.visible = false;
        // spaceship.visible = false;
    }    
    drawSprites();
}

function reset(){
    gameState = 0;
    score = 0;
    // spaceship.visible = true;
    // restartButton.visible = false;
    
}

function timeIt() {
    if (timerValue > 0) {
      timerValue--;
    }
  }