"use strict";

document.getElementById("submit").addEventListener("click", solveTrigFunction);
let toSolve = document.getElementById("solveFor");
let hyp = document.getElementById("hyp");
let opp = document.getElementById("opp");
let adj = document.getElementById("adj");
let output = document.getElementById("text");

function solveTrigFunction() {
  if(toSolve.value = "0") {
    document.getElementById("text").innerHTML = "Please put something to solve for!";
  } else if(toSolve.value = "1") {
    if(hyp.value) {
      output.innerHTML 
    }
  }


}

function clearUserText() {
  document.getElementById("text").innerHTML = "";
}