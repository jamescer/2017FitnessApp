"use strict";
var $ = require("jquery");
var Exercise = /** @class */ (function() {
  function Exercise(name, repCount, setCount, weightCount) {
    this.name = name;
    this.weight = weightCount;
    this.reps = repCount;
    this.sets = setCount;
  }
  return Exercise;
})();
exports.Exercise = Exercise;
var Person = /** @class */ function() {
  function Person() {
    this.done = [];
    this.canDo = [];
  }

  Person.prototype.drawCanDo = function() {
    var index = 0;
    $("#my-canDo").html(
      this.canDo
        .map(function(x) {
          return '<li class="list-group-item"> Name: ${x.name}: Sets: ${x.sets}, Reps: ${x.reps}, Weight ${x.weight}</li>';
        })
        .join("")
    );
    $("#routine-List button").each(function(index) {
      $(this).attr("id", "id" + index);
      index++;
    });
  };
  Person.prototype.drawDone = function() {
    $("#my-Done").html(
      this.Done
        .map(function(x) {
          return '<li class="list-group-item">${x.name}: Sets: ${x.sets}, Reps: ${x.reps}, Weight: ${x.weight}</li>';
        })
        .join("")
    );
  };
};
exports.Person = Person;
const P = Person;
$(".btn btn-primary").click(function(e) {
  e.preventDefault();
  //const workoutID = e.target.id;
  var NAME = e.getElementById("name").textContent;
  var SETS = e.getElementById("sets").value;
  var REPS = e.getElementById("reps").value;
  var WEIGHT = e.getElementById("weight").value;
  // var workoutName = e.target.textContent;
  // document.getElementById("default-message").innerHTML = "";
  // var reps = e.target.textContent.
  //$("#my-routines").append($("<li class=\"list-group-item\">").text(workoutName));
  var newE = new Exercise(NAME, SETS, REPS, WEIGHT);
  P.done.push(newE);
  console.log(JSON.stringify(P.done.name));
  P.drawDone();
});
$("#Adding1").click(function(e) {
  e.preventDefault();
  //const workoutID = e.target.id;
  var NAME = e.target.getElementById("name");
  var SETS = e.target.getElementById("sets");
  var REPS = e.target.getElementById("reps");
  var WEIGHT = e.target.getElementById("weight");
  // var workoutName = e.target.textContent;
  // document.getElementById("default-message").innerHTML = "";
  // var reps = e.target.textContent.
  //$("#my-routines").append($("<li class=\"list-group-item\">").text(workoutName));
  var newE = new Exercise(NAME, SETS, REPS, WEIGHT);
  P.done.push(newE);
  console.log(JSON.stringify(P.done));
  P.drawDone();
});
$("#Adding2").click(function(e) {
  e.preventDefault();
  //const workoutID = e.target.id;
  var NAME = e.target.getElementById("name").textContent;
  var SETS = e.target.getElementById("sets").value;
  var REPS = e.target.getElementById("reps").value;
  var WEIGHT = e.target.getElementById("weight").value;
  //var workoutName = e.target.textContent;
  //document.getElementById("default-message").innerHTML = "";
  // var reps = e.target.textContent.
  //$("#my-routines").append($("<li class=\"list-group-item\">").text(workoutName));
  //var newE = new Exercise(NAME, SETS, REPS, WEIGHT);
});
