"use strict";

document.getElementById("login").addEventListener("click", submit);

function submit() {
  //input
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  //process
  let usernameCorrect = false;
  let passwordCorrect = false;
  if (username == "admin") {
    usernameCorrect = true;
  }
  if (password == "password") {
    passwordCorrect = true;
  }

  //output
  if (usernameCorrect && passwordCorrect) {
    alert("Log In Successful");
  } else if (usernameCorrect && !passwordCorrect) {
    alert("The Password is Incorrect");
  } else if (!usernameCorrect && passwordCorrect) {
    alert("The Username is Incorrect");
  } else {
    alert("Both Username and Password is Invalid");
  }

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}