// variable area
// variable for adding background image
var backgroundImg;
// variable for blackhole and its image
var blackhole,blackholeImg;
// variable for spaceship and its images
var spaceship,spaceshipImg;
// variable for the space station and its image
var spaceStation,spaceStationImg;

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
    spaceStation = createSprite(displayWidth-100,displayHeight/2-20);
    spaceStation.addImage(spaceStationImg);
    spaceStation.scale = 0.8

    
}

// functions making background and other mechanical function
function draw(){
    // adding the background to the main output
    background(backgroundImg);
    // adding velocity to the spaceship
    spaceship.velocityX = -5;
    // writing an if statement to vanish the spaceship
    if(spaceship.isTouching(blackhole)){
        spaceship.remove();
    }
 

    

drawSprites();
}