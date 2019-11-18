"use strict";

//set up canvas
let cnv = document.getElementById("mainCanvas");
let ctx = cnv.getContext("2d");

cnv.height = 400;
cnv.width = 400;

let cloud1X = 120;
let cloud2X = 150;

let sunGreen = 0;
let sunRadius = 15;
let sunHeight = 300;

//draw stuff

//draw sky
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

//draw sun
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 15, 0, Math.PI * 2);
ctx.fill();

//draw ground
ctx.fillStyle = "green";
ctx.fillRect(0, 300, cnv.width, 100);

//draw clouds
let htmlImg = document.getElementById("cloud");
ctx.drawImage(htmlImg, cloud1X, 100);
ctx.drawImage(htmlImg, cloud2X, 85);



requestAnimationFrame(draw);

function draw() {
  //update elements on canvas
  if(cloud1X < 400) {
    cloud1X += 2;
    cloud2X -= 2;
  }

  if(sunGreen < 255) {
    sunGreen += 2;
    sunHeight--;
    sunRadius+= 0.1;
  }

  //redraw sky
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //redraw clouds
  ctx.drawImage(htmlImg, cloud1X, 100);
  ctx.drawImage(htmlImg, cloud2X, 85);

  //redraw sun
  ctx.fillStyle = "rgb(" + "255, " + sunGreen + ", 0)"
  ctx.beginPath();
  ctx.arc(200, sunHeight, sunRadius, 0, 2 * Math.PI);
  ctx.fill();

  //redraw ground
  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, cnv.width, 100);

  requestAnimationFrame(draw);
}


