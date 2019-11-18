"use strict";

//Variables
let cnv = document.getElementById("mainCanvas");
let ctx = cnv.getContext("2d");

cnv.height = 500;
cnv.width = 800;

let player = {
  x: 200,
  y: 250,
  speed: 0
}

let keydown = false;

//Event Listeners
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

/*
To Do List
 - Add Main Menu
 - Obstacles to dodge
 - Background
 - Character Spritesheet
 - bullets from jetpack?
 - Game Over Screen
*/

requestAnimationFrame(draw);

function draw() {

  playerMovement();

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "black";
  ctx.fillRect(player.x, player.y, 20, 40);

  requestAnimationFrame(draw);
}

function playerMovement() {

  if(keydown) {
    player.speed += 0.6;
  }
  player.speed -= 0.25 ;

  player.y -= player.speed;

  if(player.y > cnv.height - 40) {
    player.y = cnv.height - 40;
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