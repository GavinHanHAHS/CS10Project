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

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "DimGrey";
    ctx.fillRect(0, 440, cnv.width, 100);

    ctx.fillStyle = "grey";
    ctx.fillRect(0, 430, cnv.width, 30);

    //ctx.fillStyle = "black";
    //ctx.fillRect(player.x, player.y, 20, 40);

    ctx.drawImage(player.Img, player.x, player.y, player.width, player.height);
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