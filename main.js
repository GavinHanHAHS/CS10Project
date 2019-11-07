"use strict";

document.getElementById("doodooface").addEventListener("click", executePlanDooDoo);

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