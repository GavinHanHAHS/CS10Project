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
  Img: document.getElementById("playerImg")
}

let bullet = {
  x: 0,
  y: 0,
  angle: 0,
  direction: 0,
  speed: 0
}

let backgroundobjs = {
  cautionlines: 200,
  cautionspeed: 5
}

let gameState = 0;

let keydown = false;
let mouseIsPressed = false;

let mouseX;
let mouseY;
let floorHeight = 50;

//Event Listeners
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);

/*
To Do List
 - Make Main Menu Look Pretty
 - Obstacles to dodge
 - Background
 - Character Spritesheet
 - bullets from jetpack?
 - Game Over Screen
*/


requestAnimationFrame(draw);


function draw() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

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
    playerMovement();

    ctx.fillStyle = "LightGray";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "yellow";
    //Rotate to make a diagonal line
    ctx.rotate(10 * Math.PI / 180);
    ctx.fillRect(backgroundobjs.cautionlines, -150, 25, 800);
    ctx.fillRect(backgroundobjs.cautionlines + 50, -170, 25, 850);
    //Reset rotation
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.font = "50px Arial";
    ctx.fillText("CAUTION", backgroundobjs.cautionlines + 75, 150);

    ctx.fillStyle = "DimGrey";
    ctx.fillRect(0, 440, cnv.width, 100);
    ctx.fillRect(0, 0, cnv.width, 15);

    ctx.fillStyle = "grey";
    ctx.fillRect(0, 430, cnv.width, 40);
    ctx.fillRect(0, 10, cnv.width, 25);

    //ctx.fillStyle = "black";
    //ctx.fillRect(player.x, player.y, 20, 40);

    ctx.drawImage(player.Img, player.x, player.y, player.width, player.height);

    backgroundobjs.cautionlines -= backgroundobjs.cautionspeed;
    if(backgroundobjs.cautionlines <= -350) {
      backgroundobjs.cautionlines = 950;
      backgroundobjs.cautionspeed == 0;
      setTimeout(getRandomBackgroundobj, 3000);
    }
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
  }

  if(player.y < 0) {
    player.y = 0;
    player.speed = 0;
  }

  console.log("Speed: " + player.speed);
  console.log("Y Pos: " + player.y);
}

function getRandomBackgroundobj() {
  //get random number
  //use random number to select random background obj
  //change the background obj's speed in the main "draw" loop (which will be 0)
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