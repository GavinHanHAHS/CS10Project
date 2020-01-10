"use strict";

let cnv = document.getElementById("game");
let ctx = cnv.getContext("2d");

let keydown = false;

document.addEventListener("keydown", playerInput);

cnv.width = 800;
cnv.height = 450;

requestAnimationFrame(mainLoop);

function mainLoop() {
  drawBackground();









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
  ctx.arc(670, 180, 3, 0, 2 * Math.PI); //top right top
  ctx.fill();
  ctx.fillRect(667, 180, 6, 20); //right
  ctx.beginPath();
  ctx.arc(670, 200, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(645, 197, 23, 6);
  ctx.beginPath();
  ctx.arc(625, 185, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(622, 185, 6, 30);
  ctx.beginPath();
  ctx.arc(625, 215, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(625, 212.5, 25, 6);
}

function playerInput(event) {
  if(event.code == "Space") {
    keydown = true;
  }
}

