//2021
//Ball.js
//Ball class - A blueprint to create multiple balls

class Ball{
    constructor(x, y, xspeed, yspeed, color, radius){
        //positionX for x-axis
        this.positionX = x;
        //positionY for Y-axis
        this.positionY = y;
        //speed for x coordinate
        this.xspeed = xspeed;
        //speed for y coordinate
        this.yspeed = yspeed
        //color of the balls
        this.color = color;
        //radius of the balls
        this.radius = radius; 
    }
    //this method is used to move the balls when we call inside draw()
    moveBalls(){
        this.positionX = this.positionX + this.xspeed;
        this.positionY = this.positionY + this.yspeed; 
    }
    //making test cases for all the balls
    test(){
        //the balls bounce when they hit the right wall
        if(this.positionX > 800){
            this.positionX = 800;
            this.xspeed = -this.xspeed
        //bounce when they hit the bottom wall
        }else if(this.positionY > 600){ 
            this.positionY = 600;
            this.yspeed = -this.yspeed
        //bounce when they hit the left wall
        }else if(this.positionX < 0){
            this.positionX = 0;
            this.xspeed = -this.xspeed
        //bounce when they hit the top wall
        }else if(this.positionY < 0){
            this.positionY = 0;
            this.yspeed = -this.yspeed
        }
        
    }
    //this method is used to show all the balls on screen
    showBalls(){
        // fill(this.color)   //I can uncomment this line to fill each ball with one color only, but I want them to change color constantly so
                                //so I i make them change color inside draw() 
        circle(this.positionX, this.positionY, this.radius)
    }
}