/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var excusa1 = who[Math.floor(Math.random() * who.length)];
  var excusa2 = action[Math.floor(Math.random() * action.length)];
  var excusa3 = what[Math.floor(Math.random() * what.length)];
  var excusa4 = when[Math.floor(Math.random() * when.length)];

  var excusaFinal = excusa1 + " " + excusa2 + " " + excusa3 + " " + excusa4;

  document.getElementById("excuse").innerHTML = excusaFinal;
  console.log(action);
};
