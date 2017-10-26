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
var Tracker = /** @class */ (function(F) {
  function Tracker() {
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
  Tracker.prototype.drawExercises = function() {
    var index = 0;
    $("#routine-List").html(
      this.exerciseList
        .map(function(x) {
          return (
            '<li class="list-group-item">' +
            x.name + " " +
            x.time + " " +
            x.sets + " " +
            x.reps + " " +
            x.weight +
            "</li>"
          );
        })
        .join("")
    );
    $("#routine-List button").each(function(index) {
      $(this).attr("id", "id" + index);
      index++;
    });
  };
  Tracker.prototype.drawmyExercises = function() {
    var index = 0;
    $("#my-routines").html(
      this.myExercises.map(function(x) {
          return (
            '<li class="list-group-item">' +
            x.name + " " +
            x.time + " " +
            x.sets + " " +
            x.reps + " " +
            x.weight +
            "</li>"
          );
        })
        .join("")
    );
  };
  return Tracker;
})();
exports.Tracker = Tracker;
//Controller
var tracker = new Tracker();
tracker.drawExercises();
$(".list-group-item").click(function(e) {
  e.preventDefault();
  
  //const workoutID = e.target.id;
  var workoutName = e.target.textContent;
  document.getElementById("default-message").innerHTML = "";
  //$("#my-routines").append($("<li class=\"list-group-item\">").text(workoutName));
  var newRoutine = new Exercise(workoutName, "0", 0, 0, 0);
  tracker.myExercises.push(newRoutine);
  console.log(JSON.stringify(tracker.exerciseList));
  tracker.drawmyExercises();
});

// $(".list-group-item").click(function(e) {
//   e.preventDefault();
//   // tracker.myExercises.pop();
//   $("#test").html('<p>it worked! by pressing on my exercises</p>');
// });
