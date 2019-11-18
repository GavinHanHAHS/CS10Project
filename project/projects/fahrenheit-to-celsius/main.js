"use strict";

document.getElementById("submit").addEventListener("click", submit)

function submit() {
  //input
  let input = Number(document.getElementById("fahrenheit").value);

  //process
  let output = (input - 32) * 5 / 9;
  output = Math.round(output * 100) / 100;

  //output
  document.getElementById("celsius").innerHTML = output;
}