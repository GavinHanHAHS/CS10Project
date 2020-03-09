"use strict";

let cnv = document.getElementById("mainCanvas");
let ctx = cnv.getContext("2d");
let mouseX;
let mouseY;


cnv.width = 900;
cnv.height = 600;

let potionBookUp = false;
let potionBookHeight = 700;
let bookSpeed = 5;

document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("click", clickHandler);


requestAnimationFrame(mainLoop);

function mainLoop() {

  //draw background
  drawBackground();

  //potion book drawing and logic
  potionBook();

  //potion crafting logic
  potionMagic();

  


  requestAnimationFrame(mainLoop);
}

function drawBackground() {

  //draw background
  ctx.fillStyle = "darkGrey";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "grey";
  ctx.beginPath();
  ctx.arc(cnv.width / 2, 400, 100, 0, 2 * Math.PI);
  ctx.fill();

  //draw potion book
  ctx.fillStyle = "brown";
  ctx.fillRect(100, potionBookHeight, 700, 400);
}

function potionMagic() {
  //logic for potion ingredients and potion brewing
}

function potionBook() {
  //drawing potion book

  ctx.fillStyle = "green";
  ctx.fillRect(700, 550, 195, 45);

  if(!potionBookUp) {
    ctx.fillStyle = "lime";
    ctx.font = "35px Arial";
    ctx.fillText("Open Book", 710, 585);

    if(potionBookHeight < 700) {
      bookSpeed++;
      potionBookHeight += bookSpeed;
    } else {
      bookSpeed = 5;
    }
  } else {
    ctx.fillStyle = "lime";
    ctx.font = "35px Arial";
    ctx.fillText("Close Book", 710, 585);

    if(potionBookHeight > 100) {
      bookSpeed++;
      potionBookHeight -= bookSpeed;
    } else {
      bookSpeed = 5
    }
    
  }

  

  //potion book page flip logic
}

function mousemoveHandler() {
  let cnvRect = cnv.getBoundingClientRect(); //check could be run only once if game lags
  mouseX = event.clientX - cnvRect.left;
  mouseY = event.clientY - cnvRect.top;
}

function clickHandler() {
  if(mouseX >= 700 && mouseX <= 895 && mouseY >= 550 && mouseY <= 595) {
    potionBookUp = !potionBookUp;
  }
}