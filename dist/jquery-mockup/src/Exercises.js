"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var donecounter;
var candocounter;
candocounter = 0;
donecounter = 0;
var Quote = /** @class */ (function () {
    function Quote() {
    }
    return Quote;
}());
exports.Quote = Quote;
var Exercise = /** @class */ (function () {
    function Exercise(n, s, r, w) {
        this.reps = r;
        this.weight = w;
        this.name = n;
        this.sets = s;
    }
    return Exercise;
}());
exports.Exercise = Exercise;
var Person = /** @class */ (function () {
    function Person() {
        this.name = "James Cerniglia";
        // done: Exercise[] = [];
        this.done = [{ name: "Bicep Curls", reps: 6, sets: 3, weight: 30 }];
        this.canDo = [{ name: "Bent over Row", reps: 6, sets: 3, weight: 30 }];
        this.canDo;
        this.done;
    }
    Person.prototype.drawDone = function () {
        $("#my-Done").html(this.done
            .map(function (x) {
            return "<li class=\"list-group-item\">" + x.name + ": Sets: " + x.sets + ", Reps: " + x.reps + "</li>";
        })
            .join(""));
    };
    Person.prototype.drawCanDo = function () {
        $("#my-canDo").html(this.canDo
            .map(function (y) {
            return "<li class=\"list-group-item\">" + y.name + ": Sets: " + y.sets + ", Reps: " + y.reps + "</li>";
        })
            .join(""));
    };
    Person.prototype.drawGreeting = function () {
        $("#greetings").html("<h1 class=\"display-3\">Hello, " + this.name + "</li>");
    };
    Person.prototype.drawPicture = function () {
        $("#picture").attr("src", this.picture);
    };
    return Person;
}());
exports.Person = Person;
$("#Adding1").on("click", function (event) {
    event.preventDefault();
    $(function () {
        donecounter++;
        $("#addedtodone").html(" <p>done: " + donecounter + "</p>");
    });
});
$("#Adding2").on("click", function (event) {
    event.preventDefault();
    $(function () {
        candocounter++;
        $("#addedtocando").html(" <p>done: " + candocounter + "</p>");
    });
});
// Controller here
var me = new Person();
me.drawDone();
me.drawCanDo();
me.drawGreeting();
//# sourceMappingURL=Exercises.js.map