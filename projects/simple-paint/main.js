"use strict";

//Set up canvas and graphics context
let cnv = document.getElementById("mainCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let mouseIsPressed = false;
let mouseX, mouseY, pMouseX, pMouseY;
let size = 5;
let penColor = "black";

//Main Program Loop (60fps?)
requestAnimationFrame(loop);

function loop() {
  //Update variables
  


  //Draw a circle if mouse is pressed
  if (mouseIsPressed) {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(pMouseX, pMouseY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  }


  requestAnimationFrame(loop);
}

//Document Event Stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler)

function mousedownHandler() {
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();

  //save previous mousex mousey
  pMouseX = mouseX;
  pMouseY = mouseY;

  //update mousex mousey
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}

function keydownHandler(event) {
  if (event.code == "Space") {
    //Draw a Background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "ArrowUp") {
    size++;
  } else if (event.code == "ArrowDown") {
    size--;
    if (size == 0) {
      size = 1;
    }
  } else if (event.code == "Digit1") {
    setBlack();
  } else if (event.code == "Digit2") {
    setRed();
  } else if (event.code == "Digit3") {
    penColor = "green";
  } else if (event.code == "Digit4") {
    penColor = "blue";
  } else if (event.code == "Digit5") {
    penColor = "purple";
  }
}

//Colour Events
document.getElementById("blackButton").addEventListener("click", setBlack);
document.getElementById("redButton").addEventListener("click", setRed);
document.getElementById("greenButton").addEventListener("click", setGreen);
document.getElementById("blueButton").addEventListener("click", setBlue);
document.getElementById("purpleButton").addEventListener("click", setPurple);
document.getElementById("colorPicker").addEventListener("change", changeColor);

function setBlack() {
  penColor = "black";
}

function setRed() {
  penColor = "red";
}

function setGreen() {
  penColor = "green";
}

function setBlue() {
  penColor = "blue";
}

function setPurple() {
  penColor = "purple";
}

function changeColor() {
  penColor = document.getElementById("colorPicker").value;
}