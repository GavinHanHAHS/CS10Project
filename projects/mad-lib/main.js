"use strict";

document.getElementById("result").innerHTML = "";
document.getElementById("getButton").addEventListener('click', libTheMad);

function libTheMad() {
  let n1 = document.getElementById("noun1").value;
  let n2 = document.getElementById("noun2").value;
  let pn = document.getElementById("pluralNoun").value;
  let v = document.getElementById("verb").value;
  let adj = document.getElementById("adjective").value;

  let result = "On the day of apocalypse, <span class='option'>" + n1 + "</span> will walk the <span class='option'>" + n2 + "</span>. " +
  "<span class='option'>" + pn +"</span> will learn to <span class='option'>" + v +"</span> the day they let " +
  "this <span class='option'>" + adj +"</span> apocalypse happen."

  document.getElementById("result").innerHTML = result;
}