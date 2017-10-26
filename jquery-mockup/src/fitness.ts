import * as $ from "jquery";

export class Exercise {
  name: string;
  weight: number;
  time: string;
  sets: number;
  reps: number;

  constructor(n: string, t: string, s: number, r: number, w: number) {
    this.name = n;
    this.weight = w;
    this.time = t;
    this.sets = s;
    this.reps = r;
  }
}

export class Person {
  exerciseList: Exercise[] = [
    { name: "Weight Lifting", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Jogging", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Swimming", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Cycling", time: "0 minutes", sets: 0, reps: 0, weight: 0 }
  ];
  myExercises: Exercise[] = [];

  drawExercises() {
    $("#defaultExercises").html(
      this.exerciseList
        .map(function(x) {
          return '<li class="list-group-item">' + x.name + "</li>";
        })
        .join("")
    );
  }

  drawmyExercises() {
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
  }
}

//Controller

const person = new Person();
let empty: boolean = true;
person.drawExercises();
$(".list-group-item").click(function(e) {
  e.preventDefault();
  var t = (<HTMLInputElement>document.getElementById("t")).value;
  var s = parseFloat((<HTMLInputElement>document.getElementById("s")).value);
  var r = parseFloat((<HTMLInputElement>document.getElementById("r")).value);
  var w = parseFloat((<HTMLInputElement>document.getElementById("w")).value);
  var workoutName = e.target.textContent;
  var newRoutine = new Exercise(workoutName, t, s, r, w);
  person.myExercises.push(newRoutine);
  console.log(JSON.stringify(person.exerciseList));
  person.drawmyExercises();
  
});
