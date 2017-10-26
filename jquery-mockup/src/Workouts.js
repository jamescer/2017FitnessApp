"use strict";
exports.__esModule = true;
var $ = require("jquery");
var Exercise = /** @class */ (function() {
  function Exercise(name, t, s, r, w) {
    this.name = name;
    this.time = t;
    this.sets = s;
    this.reps = r;
    this.weight = w;
  }
  return Exercise;
})();
exports.Exercise = Exercise;
var Person = /** @class */ (function(F) {
  function Person() {
    this.name = "James Cerniglia";
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

  Person.prototype.drawGreeting = function() {
    $("#greetings").html(`<h1 class="display-3">Hello, ${this.name}</li>`);
  };
  Person.prototype.drawExercises = function() {
    var index = 0;
    $("#defaultExercises").html(
      this.exerciseList
        .map(function(x) {
          return '<li class="list-group-item">' + x.name + "</li>";
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
    $("#my-Exercises").html(
      this.myExercises
        .map(function(x) {
          return (
            '<li class="list-group-item">' +
            x.name +
            ", time:" +
            x.time +
            ", sets:" +
            x.sets +
            ", reps:" +
            x.reps +
            ", weight:" +
            x.weight +
            "</li>"
          );
        })
        .join("")
    );
    $("#my-Exercises button").each(function(index) {
      $(this).attr("id", "id" + index);
      index++;
    });
  };
  return Person;
})();
exports.Person = Person;

//Controller
var person = new Person();
person.drawExercises();
person.drawGreeting();
