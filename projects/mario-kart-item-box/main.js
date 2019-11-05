"use strict";

document.getElementById("button").addEventListener("click", calculateItem);
document.getElementById("button5").addEventListener("click", calculate5);
document.getElementById("button10").addEventListener("click", calculate10);
document.getElementById("buttonN").addEventListener("click", calculateN);

let numBanana = 0;
let numShell = 0;
let numStar = 0;
let numMush = 0;
let numBullet = 0;

function calculateItem() {
  //get Racer position
  let racerPos = Number(document.getElementById("racerPosition").value);
  console.log(racerPos);

  //get key variables for item generation
  let item = Math.random();
  let itemGen;



  console.log(item);

  if (racerPos <= 6) { //racer is top 6
    if (item <= 0.45) {
      itemGen = "Banana";
    } else if (item <= 0.8) {
      itemGen = "Green Shell";
    } else if (item <= 0.95) {
      itemGen = "Star";
    } else if (item <= 0.99) {
      itemGen = "Golden Mushroom";
    } else {
      itemGen = "Bullet Bill";
    }
  } else {
    if (item <= 0.05) {
      itemGen = "Banana";
    } else if (item <= 0.1) {
      itemGen = "Green Shell";
    } else if (item <= 0.35) {
      itemGen = "Star";
    } else if (item <= 0.70) {
      itemGen = "Golden Mushroom";
    } else {
      itemGen = "Bullet Bill";
    }
  }

  if (itemGen == "Banana") {
    document.getElementById("box").src = "images/banana_box.png";
    document.getElementById("list").innerHTML += "<li>Banana</li>"
    numBanana++;
    document.getElementById("bananaCount").innerHTML = numBanana;
  } else if (itemGen == "Green Shell") {
    document.getElementById("box").src = "images/shell_box.png";
    document.getElementById("list").innerHTML += "<li>Green Shell</li>"
    numShell++;
    document.getElementById("shellCount").innerHTML = numShell;
  } else if (itemGen == "Star") {
    document.getElementById("box").src = "images/star_box.png";
    document.getElementById("list").innerHTML += "<li>Starman</li>"
    numStar++;
    document.getElementById("starCount").innerHTML = numStar;
  } else if (itemGen == "Golden Mushroom") {
    document.getElementById("box").src = "images/goldmush_box.png";
    document.getElementById("list").innerHTML += "<li>Golden Mushroom</li>"
    numMush++;
    document.getElementById("mushroomCount").innerHTML = numMush;
  } else {
    document.getElementById("box").src = "images/bulletbill_box.png";
    document.getElementById("list").innerHTML += "<li>Bullet Bill</li>"
    numBullet++;
    document.getElementById("bulletCount").innerHTML = numBullet;
  }
}

function calculate5() {
  for (let i = 0; i < 5; i++) {
    calculateItem();
  }
}

function calculate10() {
  let count = 0;
  while (numBullet < 10) {
    calculateItem();
  }
  console.log(count);
}

function calculateN() {
  let repeat = document.getElementById("generateAmount").value;
  while (repeat > 0) {
    calculateItem();
    repeat--;
  }
}

