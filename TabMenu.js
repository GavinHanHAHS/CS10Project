"use strict";
//TabMenu
//Organize, and show/hide tabs for main page

document.getElementById("InClass").addEventListener("click", InClassTabHandler);
document.getElementById("Games").addEventListener("click", GamesTabHandler);
document.getElementById("FuncWeb").addEventListener("click", FuncWebTabHandler);
document.getElementById("RandStuff").addEventListener("click", RandStuffTabHandler);

let currentTab = 0;
let nextTab;

function InClassTabHandler() {
  nextTab = 0;
  changeTab();
}

function GamesTabHandler() {
  nextTab = 1;
  changeTab();
}

function FuncWebTabHandler() {
  nextTab = 2;
  changeTab();
}

function RandStuffTabHandler() {
  nextTab = 3;
  changeTab();
}

function changeTab() {
  //change color of previous tab to nothing
  if(currentTab == 0) {
    document.getElementById("InClass").style.backgroundColor = "rgb(10, 40, 45)";
  } else if(currentTab == 1) {
    document.getElementById("Games").style.backgroundColor = "rgb(10, 40, 45)";
  } else if(currentTab == 2) {
    document.getElementById("FuncWeb").style.backgroundColor = "rgb(10, 40, 45)";
  } else if(currentTab == 3) {
    document.getElementById("RandStuff").style.backgroundColor = "rgb(10, 40, 45)";
  }


  //change clicked tab's color to be active & change content
  HideTabs();
  if(nextTab == 0) {
    document.getElementById("InClass").style.backgroundColor = "rgb(40, 100, 70)";
    document.getElementById("InClassContent").style.display = "block";
    currentTab = 0;
  } else if(nextTab == 1) {
    document.getElementById("Games").style.backgroundColor = "rgb(40, 100, 70)";
    document.getElementById("GamesContent").style.display = "block";
    currentTab = 1;
  } else if(nextTab == 2) {
    document.getElementById("FuncWeb").style.backgroundColor = "rgb(40, 100, 70)";
    document.getElementById("FuncWebContent").style.display = "block";
    currentTab = 2;
  } else if(nextTab == 3) {
    document.getElementById("RandStuff").style.backgroundColor = "rgb(40, 100, 70)";
    document.getElementById("RandStuffContent").style.display = "block";
    currentTab = 3;
  }

  
}

function HideTabs() {
  document.getElementById("InClassContent").style.display = "none";
  document.getElementById("GamesContent").style.display = "none";
  document.getElementById("FuncWebContent").style.display = "none";
  document.getElementById("RandStuffContent").style.display = "none";
}