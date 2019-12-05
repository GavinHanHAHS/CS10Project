"use strict";

//Variables
let cnv = document.getElementById("mainCanvas");
let ctx = cnv.getContext("2d");

cnv.height = 500;
cnv.width = 800;

let player = {
  x: 200,
  y: 250,
  height: 80,
  width: 40,
  speed: 0,
  Img: document.getElementById("playerImg"),
  onground: false
}

let backgroundobjs = {
  metalline: 100,
  metalline2: 660,
  metalspeed: 5,
  cautionlines: 200,
  cautionspeed: 5,
  windowx: 800,
  windowspeed: 0
}

let lasers = {
  x1: 900,
  y1: 200,
  speed1: 0,
  x2: 900,
  y2: 200,
  speed2: 0
}

let bullet = {
  Img: document.getElementById("bulletImg"),
  speed: 10,
  speed2: 13,
  one: -50,
  onecanshoot: true,
  two: -50,
  twocanshoot: true
}

let gameState = 0;
let keydown = false;
let mouseIsPressed = false;
let mouseX;
let mouseY;
let floorHeight = 50;

let obstacleTimer = 50;

//Event Listeners
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);

/*
To Do List
 - Obstacles to dodge
 - Character Spritesheet
 - Game Over Screen

 =============Polish===============
 - Make Main Menu good
 - More background objects
 - Make bullets look better lol
*/

requestAnimationFrame(draw);


function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Main Menu!===========================================================================
  if(gameState == 0) {
    ctx.fillStyle = "lime";
    ctx.fillRect(cnv.width/2 - 30, cnv.height/2 - 20, 60, 40);

    ctx.font = "11px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Start", cnv.width/2 - 11, cnv.height/2 + 4);

    ctx.fillStyle = "black";
    ctx.fillText("X: " + mouseX, 20, 40);
    ctx.fillText("Y: " + mouseY, 20, 60);

    if(mouseIsPressed && mouseX > 370 && mouseX < 430 && mouseY > 230 && mouseY < 268) {
      ctx.fillRect(0, 0, cnv.width, cnv.height);
      gameState++;
    }
  }

  if(gameState == 1) {
    //player movement===================================================================
    playerMovement();

    //background=======================================================================
    ctx.fillStyle = "LightGray";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    //Background Details!=================================================================
    //Draw 'em

    //Metal Line(s)
    ctx.fillStyle = "DimGray";
    //line
    ctx.fillRect(backgroundobjs.metalline, 0, 2, 500);
    for(let i = 0; i < 10; i++) {
      //dots!
      ctx.fillRect(backgroundobjs.metalline + 5, 60 + (i * 50), 2, 2);
    }

    ctx.fillRect(backgroundobjs.metalline2, 0, 2, 500);
    for(let i = 0; i < 10; i++) {
      //dots!
      ctx.fillRect(backgroundobjs.metalline2 + 5, 60 + (i * 50), 2, 2);
    }
   
    

    //Caution Lines
    ctx.fillStyle = "yellow";
    //Rotate to make a diagonal line
    ctx.rotate(10 * Math.PI / 180);
    ctx.fillRect(backgroundobjs.cautionlines, -150, 25, 800);
    ctx.fillRect(backgroundobjs.cautionlines + 50, -170, 25, 850);
    //Reset rotation
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.font = "50px Arial";
    ctx.fillText("CAUTION", backgroundobjs.cautionlines + 75, 150);

    //Window
    ctx.fillStyle = "Black";
    ctx.fillRect(backgroundobjs.windowx, 100, 400, 200);
    ctx.fillStyle = "Gray";
    ctx.fillRect(backgroundobjs.windowx + 10, 110, 380, 180);
    ctx.fillStyle = "AliceBlue";
    ctx.fillRect(backgroundobjs.windowx + 20, 115, 360, 170);
    //rotate around frost's center
    ctx.translate(backgroundobjs.windowx + 20 + 60 / 2, 90 + 200);
    ctx.rotate(20 * Math.PI / 180);
    ctx.translate(-1 * (backgroundobjs.windowx + 10 + 50 / 2), -1 * (90 + 200 / 2));
    //draw dat shit
    ctx.fillStyle = "white";
    ctx.fillRect(backgroundobjs.windowx + 20, 45, 5, 100);
    ctx.fillRect(backgroundobjs.windowx + 40, 50, 10, 100);
    ctx.fillRect(backgroundobjs.windowx + 60, 55, 5, 100);
    ctx.setTransform(1, 0, 0, 1, 0, 0);



    //Make 'em move
    backgroundobjs.cautionlines -= backgroundobjs.cautionspeed;
    if(backgroundobjs.cautionlines <= -350) {
      backgroundobjs.cautionlines = 950;
      backgroundobjs.cautionspeed = 0;
      setTimeout(getRandomBackgroundobj, 3000);
    }

    backgroundobjs.windowx -= backgroundobjs.windowspeed;
    if(backgroundobjs.windowx <= -400) {
      backgroundobjs.windowx = 800;
      backgroundobjs.windowspeed = 0;
      setTimeout(getRandomBackgroundobj, 3000);
    }

    backgroundobjs.metalline -= backgroundobjs.metalspeed;
    backgroundobjs.metalline2 -= backgroundobjs.metalspeed;
    if(backgroundobjs.metalline <= -200) {
      backgroundobjs.metalline = 800;
    }
    if(backgroundobjs.metalline2 <= -200) {
      backgroundobjs.metalline2 = 800;
    }


    //SURFACES====================================================
    //Base top & bottom
    ctx.fillStyle = "DimGrey";
    ctx.fillRect(0, 440, cnv.width, 100);
    ctx.fillRect(0, 0, cnv.width, 15);

    //surface top & bottom
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 430, cnv.width, 40);
    ctx.fillRect(0, 10, cnv.width, 25);

    //Bullets!=========================================================
    ctx.fillStyle = "Gold"
    if(player.y < cnv.height - (player.height + floorHeight) && keydown && bullet.onecanshoot) {
      bullet.onecanshoot = false;
      player.onground = false;
      bullet.one = player.y + 60;
    }
    if(bullet.one > 0) {
      bullet.one += bullet.speed;
      if(bullet.one > cnv.height - (floorHeight + 20)) {
        if(keydown && player.onground == false) {
          bullet.one = player.y + 60;
        } else {
          bullet.one = -50;
          bullet.onecanshoot = true;
        }
      }
    }
    if(player.y < 250 && bullet.twocanshoot && keydown) {
      bullet.twocanshoot = false;
      bullet.two = player.y + 60;
    }
    if(bullet.two > 0) {
      //bullet2 travels at a different speed to give illusion of more bullets
      bullet.two += bullet.speed2;
      if(bullet.two > cnv.height - (floorHeight + 20)) {
        if(keydown && player.y < 250) {
          bullet.two = player.y + 60;
        } else {
          bullet.two = -50;
          bullet.twocanshoot = true;
        }
      }
    }

    //ctx.fillRect(player.x, bullet.one, 10, 20);
    ctx.drawImage(bullet.Img, player.x, bullet.one, 20, 30);
    ctx.drawImage(bullet.Img, player.x, bullet.two, 20, 30);
    //ctx.drawImage(player.Img, player.x, bullet.one, 20, 40);
    
    //old player
    //ctx.fillStyle = "black";
    //ctx.fillRect(player.x, player.y, 20, 40);


    //OBSTACLES!==============================================
    if(obstacleTimer < 0) {
      //generate obstacle
      let random = Math.floor(Math.random() * 2) + 1;
      console.log(random);
      switch(random) {
        case 1:
          //horizontal laser
          lasers.speed1 = 5;
          break;
        case 2:
          //vertical laser
          lasers.speed2 = 5;
          break;
      }
      

      //set obstacletimer to a new random number
      obstacleTimer = 100;
    } else {
      obstacleTimer--;
    }

    //Drawing obstacles
    //horizontal laser
    ctx.fillStyle = "yellow";
    lasers.x1 -= lasers.speed1;
    ctx.fillRect(lasers.x1, lasers.y1, 200, 20);
    if(lasers.x1 + 200 < -30) {
      lasers.speed1 = 0;
      lasers.x1 = 900;
      lasers.y1 = Math.random() * 401 + 100;
    }

    //vertical laser
    lasers.x2 -= lasers.speed2;
    ctx.fillRect(lasers.x2, lasers.y2, 20, 200);
    if(lasers.x2 + 20 < -30) {
      lasers.speed2 = 0;
      lasers.x2 = 900;
      lasers.y2 = Math.random() * 301 + 100;
    }

    //Actually draw the player!===============================================
    ctx.drawImage(player.Img, player.x, player.y, player.width, player.height);
  }

  if(gameState == 3) {

  }

  requestAnimationFrame(draw);
}

function playerMovement() {

  if(keydown) {
    player.speed += 0.6;
  }
  player.speed -= 0.25 ;

  player.y -= player.speed;

  if(player.y > cnv.height - (player.height + floorHeight)) {
    player.y = cnv.height - (player.height + floorHeight);
    player.speed = 0;
    player.onground = true;
  }

  if(player.y < 0) {
    player.y = 0;
    player.speed = 0;
  }

  //console.log("Speed: " + player.speed);
  //console.log("Y Pos: " + player.y);
}

function getRandomBackgroundobj() {
  //get random number
  //use random number to select random background obj
  //change the background obj's speed in the main "draw" loop (which will be 0)
  let random = Math.floor(Math.random() * 2) + 1
  console.log(random);

  switch(random) {
    case 1:
      //Caution Lines
      backgroundobjs.cautionspeed = 5;
      break;
    case 2:
      //Window
      backgroundobjs.windowspeed = 5;
  }
}

function keydownHandler(event) {
  if(event.code === "Space") {
    keydown = true;
  }
}

function keyupHandler(event) {
  if(event.code === "Space") {
    keydown = false;
  }
}

function mousedownHandler() {
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function mousemoveHandler() {
  let cnvRect = cnv.getBoundingClientRect();

  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}