/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generador_De_Excusas();
};

function generador_De_Excusas() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "my phone", "the car"];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let indice_who = Math.floor(Math.random() * who.length);
  let indice_action = Math.floor(Math.random() * action.length);
  let indice_what = Math.floor(Math.random() * what.length);
  let indice_when = Math.floor(Math.random() * when.length);

  return (
    who[indice_who] +
    " " +
    action[indice_action] +
    " " +
    what[indice_what] +
    " " +
    when[indice_when]
  );
}
