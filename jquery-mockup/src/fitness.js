"use strict";
exports.__esModule = true;
var $ = require("jquery");
var Exercise = /** @class */ (function() {
  function Exercise(name) {
    this.name = name;
  }
  return Exercise;
})();
exports.Exercise = Exercise;
var Person = /** @class */ (function(F) {
  function Person() {
    this.exerciseList = [
      {
        name: "Weight Lifting",
        time: "0 minutes",
        sets: 0,
        reps: 0,
        weight: 0
      },
      { name: "Jogging", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
      { name: "Swimming", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
      { name: "Cycling", time: "0 minutes", sets: 0, reps: 0, weight: 0 }
    ];
  }
  Person.prototype.drawExercises = function() {
    var index = 0;
    $("#defaultExercises").html(
      this.exerciseList
        .map(function(x) {
          return (
            '<li class="list-group-item">' +
            x.name +
            " " +
            x.time +
            " " +
            x.sets +
            " " +
            x.reps +
            " " +
            x.weight +
            "</li>"
          );
        })
        .join("")
    );
    $("#defaultExercises button").each(function(index) {
      $(this).attr("id", "id" + index);
      index++;
    });
  };
  Person.prototype.drawmyExercises = function() {
    var index = 0;
    $("#my-routines").html(
      this.myExercises
        .map(function(x) {
          return (
            '<li class="list-group-item">' +
            x.name +
            " " +
            x.time +
            " " +
            x.sets +
            " " +
            x.reps +
            " " +
            x.weight +
            "</li>"
          );
        })
        .join("")
    );
  };
  return Person;
})();
exports.Person = Person;
//Controller
var person = new Person();
person.drawExercises();

// $(".list-group-item").click(function(e) {
//   e.preventDefault();
//   var workoutName = e.target.textContent;
//   document.getElementById("default-message").innerHTML = "";
//   var newRoutine = new Exercise(workoutName, "t", 0, 0,0);
//   person.myExercises.push(newRoutine);
//   console.log(JSON.stringify(person.exerciseList));
//   person.drawmyExercises();
// });

