"use strict";
var $ = require("jquery");
var Exercise = /** @class */ (function() {
  function Exercise(name, repCount, setCount, weightCount) {
    this.name = name;
    this.weight = weightCount;
    this.reps = repCount;
    this.sets = setCount;
  }
  return Routine;
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
      this.routineList
        .map(function(x) {
          return '<li class="list-group-item">${x.name}: Sets: ${x.sets}, Reps: ${x.reps}</li>';
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
      this.myRoutines
        .map(function(x) {
          return '<li class="list-group-item">${x.name}: Sets: ${x.sets}, Reps: ${x.reps}</li>';
        })
        .join("")
    );
  };
};
exports.Person = Person;
var P = Person;
P.drawCanDo();
P.drawDone();
$(".btn btn-primary").click(function(e) {
  e.preventDefault();
  //const workoutID = e.target.id;
  var NAME = e.getElementById("name");
  var SETS = e.getElementById("sets");
  var REPS = e.getElementById("reps");
  var WEIGHT = e.getElementById("weight");
  var workoutName = e.target.textContent;
  document.getElementById("default-message").innerHTML = "";
  // var reps = e.target.textContent.
  //$("#my-routines").append($("<li class=\"list-group-item\">").text(workoutName));
  var newE = new Exercise(NAME, SETS, REPS, WEIGHT);
  P.done.push(newE);
  console.log(JSON.stringify(P.done));
  P.drawDone();
});
