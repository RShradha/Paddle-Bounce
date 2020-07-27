var ball,img,paddle,pimg;
function preload() {
  /* preload your images here of the ball and the paddle */
  img=loadImage("ball.png");
  pimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(40,200,20,20);
  paddle=createSprite(200,200,20,70);
  
  /* assign the images to the sprites */
  ball.addImage(img);
  paddle.addImage(pimg);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
 edge= createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edge[0]);
  ball.bounceOff(edge[2]);
  ball.bounceOff(edge[3]);
  

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff=(paddle, randomVelocity);
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  { paddle.y=paddle.y+20;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  { paddle.y=paddle.y-20;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{  
  
    ball.velocityY=random(-8,8);
      
      
      
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

