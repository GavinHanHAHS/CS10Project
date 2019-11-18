'use strict';

document.getElementById('mark-btn').addEventListener('click', mark);
document.getElementById('1HundredButton').addEventListener('click', hundredButtonClick);

var score = 0;
var buttonClicksLeft = 100;

function mark() {
  //input
  let countryFlag = document.getElementById('canadaInput').value.toLowerCase();
  let chessPiece = document.getElementById("chessInput").value.toLowerCase();
  let kungFuPanda = document.getElementById("kungfupanda").value.toLowerCase();
  let frenchInput =  document.getElementById('frenchInput').value.toLowerCase();

  //process
  if (countryFlag == 'canada') {
    score += 1;
  }
  if (buttonClicksLeft == 0) {
    score += 1;
  }
  if (chessPiece == "cardinal") {
    score += 1;
  }
  if (kungFuPanda == "tai lung") {
    score += 1;
  }
  if (frenchInput == "vends" || frenchInput == "french is dumb") {
    score += 1;
  }

  //output
  let scorePercent = (score/5) * 100
  document.getElementById('results').innerHTML = '<button type="button" id="refresh-btn">Refresh Page</button> Your score is ' 
  + score + ' / 5 (' + scorePercent + " %)";
  document.getElementById("refresh-btn").addEventListener('click', refresh);
}

function hundredButtonClick() {
  buttonClicksLeft -= 1;
  document.getElementById('100text').innerHTML = "Click this button " + buttonClicksLeft + " more times";
}

function refresh() {
  window.location.reload(false);
}