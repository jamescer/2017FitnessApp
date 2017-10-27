"use strict";
exports.__esModule = true;
var $ = require("jquery");

var Person = /** @class */ (function(F) {
  function Person(n) {
    this.name = n;
  }
  return Person;
})();
exports.Person = Person;

//Controller
var person = new Person();
person.drawExercises();
person.drawGreeting();
