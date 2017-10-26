"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Exercise = /** @class */ (function () {
    function Exercise(n, t, s, r, w) {
        this.name = n;
        this.weight = w;
        this.time = t;
        this.sets = s;
        this.reps = r;
    }
    return Exercise;
}());
exports.Exercise = Exercise;
var Tracker = /** @class */ (function () {
    function Tracker() {
        this.exerciseList = [
            { name: "Weight Lifting", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
            { name: "Jogging", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
            { name: "Swimming", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
            { name: "Cycling", time: "0 minutes", sets: 0, reps: 0, weight: 0 }
        ];
        this.myExercises = [];
    }
    Tracker.prototype.drawExercises = function () {
        $("#routine-List").html(this.exerciseList
            .map(function (x) {
            return '<li class="list-group-item">' + x.name + "</li>";
        })
            .join(""));
    };
    Tracker.prototype.drawmyExercises = function () {
        $("#my-routines").html(this.myExercises
            .map(function (x) {
            return ('<li class="list-group-item">' +
                x.name +
                " " +
                x.time +
                " " +
                x.sets +
                " " +
                x.reps +
                " " +
                x.weight +
                "</li>");
        })
            .join(""));
    };
    return Tracker;
}());
exports.Tracker = Tracker;
//Controller
var tracker = new Tracker();
var empty = true;
tracker.drawExercises();
$(".list-group-item").click(function (e) {
    e.preventDefault();
    var t = document.getElementById("time").textContent;
    var s = document.getElementById("sets").textContent.valueOf;
    var r = document.getElementById("reps").textContent.valueOf;
    var w = document.getElementById("weight").textContent.valueOf;
    alert("time" + t);
    alert("sets" + s);
    alert("reps" + r);
    alert("weight" + w);
    var workoutName = e.target.textContent;
    document.getElementById("default-message").innerHTML = "";
    var newRoutine = new Exercise(workoutName, t, s, r, w);
    tracker.myExercises.push(newRoutine);
    console.log(JSON.stringify(tracker.exerciseList));
    tracker.drawmyExercises();
});
//# sourceMappingURL=fitness.js.map