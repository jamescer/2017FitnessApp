"use strict";
exports.__esModule = true;
var $ = require("jquery");

var Person = /** @class */ (function(F) {
  function Person() {}
  return Person;
})();
exports.Person = Person;

//Controller
var person = new Person();
person.drawExercises();
person.drawGreeting();

function maxBench() {
  var x = document.createElement("OUTPUT");
  var r = parseFloat(document.getElementById("r0").value);
  var w = parseFloat(document.getElementById("w0").value);
  if (isNaN(r)) {
    r = 0;
  }
  if (isNaN(w)) {
    w = 0;
  }
  var ONEREPMAX = w * (1 + r / 30);
  console.log(ONEREPMAX);
  document.getElementById("MaxBench").appendChild(ONEREPMAX);
}
function maxDeadlift() {
  var x = document.createElement("OUTPUT");
  var r = parseFloat(document.getElementById("r1").value);
  var w = parseFloat(document.getElementById("w1").value);
  if (isNaN(r)) {
    r = 0;
  }
  if (isNaN(w)) {
    w = 0;
  }
  var ONEREPMAX = w * (1 + r / 30);
  console.log(ONEREPMAX);
  document.getElementById("MaxDeadlift").appendChild(ONEREPMAX);
}
function maxSquat() {
  var x = document.createElement("OUTPUT");
  var r = parseFloat(document.getElementById("r2").value);
  var w = parseFloat(document.getElementById("w2").value);
  if (isNaN(r)) {
    r = 0;
  }
  if (isNaN(w)) {
    w = 0;
  }
  var ONEREPMAX = w * (1 + r / 30);
  console.log(ONEREPMAX);
  document.getElementById("MaxSquat").appendChild(ONEREPMAX);
}
