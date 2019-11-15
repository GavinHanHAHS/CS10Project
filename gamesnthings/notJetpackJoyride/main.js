"use strict";

let cnv = document.getElementById("mainCanvas");
let ctx = cnv.getContext("2d");

cnv.height = 500;
cnv.width = 800;

let player = {
  x: 200,
  y: 250,
  speed: 0
}

requestAnimationFrame(draw);

function draw() {

  

  ctx.fillStyle = "black";
  ctx.fillRect(player.x, player.y, 20, 40);
}