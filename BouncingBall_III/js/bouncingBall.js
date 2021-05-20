
//2021

"use strict";
//create  an empty array to hold all the balls object into here later
let balls = [];



//create selectRandom object to hold values for different speed, color and radius
const selectRandom = {
    //different speed selection
    speed: [4, 5, 6, 3, 2],
    //different color for the balls
    color: ['red', 'blue', 'yellow', 'brown', 'green'],
    //different radius for balls 
    radius: [30, 40, 50, 70, 55]
}


let ball;
//default funtion setup
function setup(){
    //create canvas 800 width and 600 height
    createCanvas(800, 600)

    //create 10 balls by using for loop based on the Ball class
    for(let i = 0; i < 12; i++){
        ball = new Ball(i*60 + 100, 50, randomSpeed(), randomSpeed(), randomColor(), randomRadius())
        //push new objects to the balls array
        balls.push(ball);

    }

}


//codes run inside draw()
function draw(){
    background('#e0cba6'); 
        
    //show first ball and and then make it move and so on
    for(let i = 0; i < balls.length; i++ ){
        //all of the balls constantly changing the color
        fill(randomColor())
        //from the ball array, show the balls, make them move and bounce
        balls[i].moveBalls();
        balls[i].showBalls();
        balls[i].test();
    }
    
}


//create randomspeed function to generate random speed for the balls
function randomSpeed(){
    //it chooses a random speed from the selectRandom object
    return random(selectRandom.speed);
}


//create randomColor function to generate a random color for each ball
function randomColor(){
    //choose a random color and return
    return random(selectRandom.color);
}

//create randomRadius function to generate a random radius for each ball
function randomRadius(){
    //choose a random radius from selectRandom object and then return 
    return random(selectRandom.radius);
}




