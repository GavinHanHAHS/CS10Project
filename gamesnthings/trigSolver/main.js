"use strict";

document.getElementById("submit").addEventListener("click", solveTrigFunction);
let toSolve = document.getElementById("solveFor");
let hyp = document.getElementById("hyp");
let opp = document.getElementById("opp");
let adj = document.getElementById("adj");
let theta = document.getElementById("theta");
let output = document.getElementById("text");

function solveTrigFunction() {
  console.log(toSolve.value);


  if(toSolve.value == 0) {
    document.getElementById("text").innerHTML = "Please put something to solve for!";
  } else if(toSolve.value == 1) {                                 //hypotenuse
    if(hyp.value) {
      output.innerHTML = "There's already a hypotenuse value!";
    } else if(opp.value && adj.value) {
      let a = Math.pow(opp.value, 2);
      let b = Math.pow(adj.value, 2);
      let c = a + b;
      c = Math.pow(c, 0.5);
      output.innerHTML = c;
    } else if(theta.value && opp.value || adj.value) {
      
    }
  } else if(toSolve.value == 2) {                                 //opposite

  } else if(toSolve.value == 3) {                                 //adjacent

  } else if(toSolve.value == 4) {                                 //other angle

  }


}

function clearUserText() {
  document.getElementById("text").innerHTML = "";
}