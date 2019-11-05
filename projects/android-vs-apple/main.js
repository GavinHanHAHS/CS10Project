'use strict';

function androidButton() {
  document.getElementById('android-vs-apple').src = 'images/Android-Logo.jpg';
  document.getElementById('explorethedebate').innerHTML = 'Android Home';
  document.getElementById('explorethedebate').style.backgroundColor = '#a4c93b';
  document.getElementById('explorethedebate').href = 'https://www.android.com/';
  document.getElementById('body').style.backgroundColor = '#a4c93b';
}

function appleButton() {
  document.getElementById('android-vs-apple').src = 'images/Apple-Logo.jpg';
  document.getElementById('explorethedebate').innerHTML = 'Apple home';
  document.getElementById('explorethedebate').style.backgroundColor = '#b6bcca';
  document.getElementById('explorethedebate').href = 'https://www.apple.com/';
  document.getElementById('body').style.backgroundColor = '#b6bcca';
}

document.getElementById('android-btn').addEventListener('click', androidButton);

document.getElementById('apple-btn').addEventListener('click', appleButton);