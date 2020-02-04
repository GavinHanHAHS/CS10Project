"use strict";

document.getElementById("doodooface").addEventListener("click", executePlanDooDoo);
document.getElementById("biggiecheese").addEventListener("click", executeplanCheese);


let biggiecheese = 0;
let doodooState = 0;

function executePlanDooDoo() {
  doodooState++;

  if (doodooState == 1) {
    document.getElementById("doodoo").innerHTML = "Kerolos is a doo doo face.";
  } else if(doodooState == 2){
    document.getElementById("doodoo").innerHTML = "Kerolos is still a doo doo face."
  } else if(doodooState == 3){
    document.getElementById("doodoo").innerHTML = "Ah, yes."
    doodooState = 0;
  }
  
}

function executeplanCheese() {
  if(biggiecheese == 0) {
    biggiecheese = 1;
    document.getElementById("biggiecheese").src = "media/BiggieCheese.jpg";
  } else if(biggiecheese == 1) {
    biggiecheese = 0;
    document.getElementById("biggiecheese").src = "media/sunrise.png";
  }
}
