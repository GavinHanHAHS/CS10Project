"use strict";

let cnv = document.getElementById("game");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 450;

requestAnimationFrame(mainLoop);

function mainLoop() {
    //draw the background==============================
    ctx.fillStyle = "rgb(10, 40, 150)";
    ctx.fillRect(0, 0, 800, 450);
    ctx.fillStyle = "rgb(20, 173, 238)";
    ctx.fillRect(0, 350, 800, 100);
    ctx.fillStyle = "rgb(20, 140, 200)";
    ctx.fillRect(0, 390, 800, 60);

    //draw guy ghaiyu==================================
    //head
    ctx.fillStyle = "rgb(255, 240, 162)";
    ctx.beginPath();
    ctx.arc(640, 120, 60, 0, 2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(580, 120);
    ctx.lineTo(600, 200);
    ctx.lineTo(680, 200);
    ctx.lineTo(700, 120);
    ctx.fill();

    //neckkk
    ctx.beginPath();
    ctx.moveTo(660, 200);
    ctx.lineTo(690, 260);
    ctx.lineTo(710, 260);
    ctx.lineTo(680, 200);
    ctx.fill();
}

