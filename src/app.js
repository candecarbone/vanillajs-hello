/* eslint-disable */
import "bootstrap";
import "./style.css";

function excuseGenerator() {
  let who = ["My cat", "My cousin", "My fish", "My grandma", "My neighbor"];
  let action = ["ate", "hid", "crushed", "robbed"];
  let what = ["my homework", "my phone", "the car", "my bike", "my lunch"];
  let when = [
    "before the class started",
    "when I was sleeping",
    "while I was at church",
    "during my free period",
    "while I was away"
  ];
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = excuseGenerator();
};
