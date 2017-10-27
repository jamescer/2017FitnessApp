"use strict";
exports.__esModule = true;
var $ = require("jquery");

var Person = /** @class */ (function(F) {
  function Person(n) {
    this.name = n;
  }

  Person.prototype.drawGreeting = function() {
    $("#greetings")
      .html(`<h1 class="display-3">Hello, ${this.name}</li>`)
      .join("");
  };
  Person.prototype.drawExercises = function() {
    var index = 0;
    $("#defaultExercises").html(
      this.exerciseList
        .map(function(x) {
          return '<li class="list-group-item"  href="">' + x.name + "</li>";
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
            ", time: " +
            x.time +
            ", sets: " +
            x.sets +
            ", reps: " +
            x.reps +
            ", weight: " +
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
var person = new Person("James Cerniglia");
person.drawExercises();
person.drawGreeting();
