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

let ingredientFalling = false;
let ingredientHeight = -300;
let ingredientSpeed = 0;

let potionCase = 0;

let image = {
  bookInside: document.getElementById("bookInside"),
  slime: document.getElementById("slime"),
  eyeball: document.getElementById("eyeball"),
  batWing: document.getElementById("batWing"),
  batWingCocktail: document.getElementById("batWingCocktail")
};

let recipes = {
  batWingCocktail: ["slime", "eyeball", "batWing"]
};

let ingredients = [];
let targetPotion;


document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("click", clickHandler);


requestAnimationFrame(mainLoop);

function mainLoop() {

  //draw background
  drawBackground();

  drawIngredients();

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

  ctx.drawImage(image.bookInside, 0, potionBookHeight - 30, 875, 470);
  
}

function potionMagic() {
  //logic for potion ingredients and potion brewing
  if(!targetPotion) {
    //random num generator for random potion
    let rand = 1;
    switch(rand) {
      case 1:
        targetPotion = JSON.stringify(recipes.batWingCocktail);
        dropIngredients("batWingCocktail");
        console.log(targetPotion);
        break;
      default:
        targetPotion = "error";
        console.log("error");
    }
  }

  // if(ingredientFalling) {
  //   if(!(ingredientHeight >= 50)) {
  //     ingredientHeight += ingredientSpeed;
  //     ingredientSpeed += 0.5;
  //   } else {
  //     ingredientSpeed = 0;
  //   }
  // }
  
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

function dropIngredients(potion) { 
  //random number function
  let rand = 1;
  console.log("ingredients dropping");
  console.log(potion);
  if(potion == "batWingCocktail") {
    console.log("batWingCocktail");
    switch(rand) {
      case 1: 
        //draw image 1 as slime, image 2 as eyeball, and image 3 as bat wing.
        console.log("ingredients: slime, eyeball, batwing");
        ingredientFalling = true;
        potionCase = 1;
        break; // add more cases for more variation.
      default:
        console.log("error: dropIngredients invalid random num (" + potion + ")");
    }
  }
  

}

function drawIngredients() {
  if(ingredientFalling == true) {
    if(targetPotion == JSON.stringify(recipes.batWingCocktail)) {
      if(potionCase == 1) { //use potionCase to determine which potion you click when detecting that
        ctx.drawImage(image.slime, 50, ingredientHeight);
        ctx.drawImage(image.eyeball, 350, ingredientHeight);
        ctx.drawImage(image.batWing, 650, ingredientHeight);
      }
    }

    if(ingredientHeight <= 50) {
      ingredientHeight += ingredientSpeed;
      ingredientSpeed += 0.1;
    }
  }
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