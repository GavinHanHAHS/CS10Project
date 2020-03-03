"use strict";

let cnv = document.getElementById("game");
let ctx = cnv.getContext("2d");

let keydown = false;
let resetkey = false;
let gamestate = 0;
let score = 0;

let mouseX;
let mouseY;
let mouseIsPressed = false;

let object = {
  x1: 420,
  y1: 300,
  direction1: 1,
  x2: 250,
  y2: 330,
  direction2: 1,
  counter2: 0,
  x3: 600,
  y3: 340,
  direction3: -1
};

let dynamiteImg = document.getElementById("dynamite");
let explosionImg = document.getElementById("explosion")
let checked = false;

document.addEventListener("keydown", playerInput);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

cnv.width = 800;
cnv.height = 450;

requestAnimationFrame(mainLoop);

function mainLoop() {

  if(gamestate == 0) {
    drawBackground();
    //draw the big start button.
    ctx.fillStyle = "lime";
    ctx.fillRect(325, 200, 150, 45);
    ctx.fillStyle = "black";
    ctx.font = "35px Arial";
    ctx.fillText("Start", 360, 237);

    ctx.fillStyle = "white";
    ctx.fillText("X: " + mouseX, 5, 35);
    ctx.fillText("Y: " + mouseY, 5, 75);

    if(mouseIsPressed && mouseX >= 325 && mouseY >= 202 && mouseX <= 475 && mouseY <= 244) {
      gamestate++;
    }
  }

  if(gamestate == 1) {
    drawBackground();

    ctx.drawImage(dynamiteImg, 350, 300, 75, 25);

    ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
    ctx.beginPath();
    ctx.arc(400, 200, 175, 0, 2 * Math.PI);
    ctx.fill();
    
    //first object
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(object.x1, object.y1, 40, 0, 2 * Math.PI);
    ctx.fill();

    if(object.direction1 == 1 && object.x1 > 669) {
      object.direction1 = -1;
    } else if (object.direction1 == -1 && object.x1 < 100) {
      object.direction1 = 1;
    }
    
    object.x1 += 2 * object.direction1;

    //second object
    ctx.fillStyle = "purple";
    ctx.beginPath();
    ctx.arc(object.x2, object.y2, 25, 0, 2 * Math.PI);
    ctx.fill();

    if(object.counter2 >= 30) {
      object.x2 += 75 * object.direction2;
      object.counter2 = 0;
    }

    object.counter2++;
    
    if(object.x2 >= 650) {
      object.direction2 = -1;
    } else if(object.x2 <= 200) {
      object.direction2 = 1;
    }

    //third object
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(object.x3, object.y3, 35, 0, 2 * Math.PI);
    ctx.fill();

    object.x3 += 7 * object.direction3;

    if(object.x3 >= 725) {
      object.direction3 = -1;
    } else if(object.x3 <= 45) {
      object.direction3 = 1;
    }

    if(keydown == true) {
      gamestate++;
    }
  }

  if(gamestate == 2) {
    score = 0;
    
    checkObjects();
    if(resetkey == true) {
      resetVariables();
      gamestate = 0;
    }
  }




  requestAnimationFrame(mainLoop);
} 

function drawBackground() {
  //draw the background==============================
  ctx.fillStyle = "rgb(64, 210, 210)";
  ctx.fillRect(0, 0, 800, 450);
  ctx.fillStyle = "rgb(255, 219, 98)";
  ctx.fillRect(0, 250, 800, 200);
  ctx.fillStyle = "rgb(255, 211, 64)";
  ctx.fillRect(0, 390, 800, 60);

  
  //foreground cactus
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(120, 230, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(110, 230, 20, 50);
  ctx.beginPath();
  ctx.arc(120, 280, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(120, 270, 30, 20);
  ctx.fillRect(150, 190, 35, 150);
  ctx.beginPath();
  ctx.arc(167.5, 190, 17.5, 0, 2 * Math.PI);
  ctx.fill();
  
  //background cactus
  ctx.beginPath();
  ctx.arc(650, 180, 5, 0, 2 * Math.PI); //top of main body
  ctx.fill();
  ctx.fillRect(645, 180, 10, 90); //main body
  ctx.beginPath();
  ctx.arc(665, 180, 3, 0, 2 * Math.PI); //top right top
  ctx.fill();
  ctx.fillRect(662, 180, 6, 20); //right
  ctx.beginPath();
  ctx.arc(665, 200, 3, 0, 2 * Math.PI); //right side bottom
  ctx.fill();
  ctx.fillRect(645, 197, 23, 6);
  ctx.beginPath();
  ctx.arc(635, 185, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(632 , 185, 6, 30);
  ctx.beginPath();
  ctx.arc(635, 215, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(635, 212.5, 19, 6);
}

function playerInput(event) {
  if(event.code == "Space") {
    keydown = true;
  } else if(event.code == "Enter") {
    resetkey = true;
  }
}

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();

  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}

function mousedownHandler() {
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function checkObjects() {
  if(checked == false) {
    checked = true;

    //draw explosion on circle
    ctx.drawImage(explosionImg, 165, -10, 450, 450);

    //check first object
    checkOneObject(object.x1, object.y1, 40);

    //check second object
    checkOneObject(object.x2, object.y2, 25);

    //check third object
    checkOneObject(object.x3, object.y3, 35);

    console.log(score);

    //display score to user
    ctx.fillStyle = "black";
    ctx.fillText("YOUR SCORE:", 250, 220);
    ctx.fillText(score, 500, 220);
    ctx.font = "20px Arial"
    ctx.fillText("Press enter to reset", 300, 240);
  }
}

function checkOneObject(x, y, radius) {
  //set a and b for pythagoras
  let a = 400 - x;
  let b = 200 - y;
  //do pythagoras
  let c = Math.hypot(a, b);
  console.log(c);
  //add score if c is less than both radii.
  if(c <= (175 + radius)) {
    score++;
    ctx.drawImage(explosionImg, x - 70, y - 70, 150, 150)
  }
}

function resetVariables() {
  keydown = false;
  resetkey = false;
  checked = false;
  score = 0;
  object.x1 = 420;
  object.y1 = 300;
  object.direction1 = 1;
  object.x2 = 250;
  object.y2 = 330;
  object.direction2 = 1;
  object.counter2 = 0;
  object.x3 = 600;
  object.y3 = 340;
  object.direction3 = -1;
}