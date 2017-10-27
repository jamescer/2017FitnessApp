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
  constructor(n: string) {
    this.name = n;
  }
  name: string;
  exerciseList: Exercise[] = [
    { name: "Bench Press", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Deadlift", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Squat", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Leg Press", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Bicep Curl", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Overhead Press", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    {
      name: "Inclined Bench Press",
      time: "0 minutes",
      sets: 0,
      reps: 0,
      weight: 0
    }
  ];
  myExercises: Exercise[] = [];
  drawGreeting() {
    $("#greetings").html(`<h1 class="display-3">Hello, ${this.name}</li>`);
  }
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
  }
}

//Controller

const person = new Person("James Cerniglia");
let empty: boolean = true;
person.drawGreeting();
person.drawExercises();

$(".list-group-item").click(function(e) {
  e.preventDefault();
  var t = (<HTMLInputElement>document.getElementById("t")).value;
  var r = parseFloat((<HTMLInputElement>document.getElementById("r")).value);
  var s = parseFloat((<HTMLInputElement>document.getElementById("s")).value);
  var w = parseFloat((<HTMLInputElement>document.getElementById("w")).value);
  if (t.length < 1) {
    t = "0 minutes";
  }
  if (isNaN(s)) {
    s = 0;
  }
  if (isNaN(r)) {
    r = 0;
  }
  if (isNaN(w)) {
    w = 0;
  }
  var workoutName = e.target.textContent;
  var newRoutine = new Exercise(workoutName, t, s, r, w);
  person.myExercises.push(newRoutine);
  console.log(JSON.stringify(person.exerciseList));
  person.drawmyExercises();
});

function AddToDone(){
  var t = (<HTMLInputElement>document.getElementById("t")).value;
  var r = parseFloat((<HTMLInputElement>document.getElementById("r")).value);
  var s = parseFloat((<HTMLInputElement>document.getElementById("s")).value);
  var w = parseFloat((<HTMLInputElement>document.getElementById("w")).value);
  if (t.length < 1) {
    t = "0 minutes";
  }
  if (isNaN(s)) {
    s = 0;
  }
  if (isNaN(r)) {
    r = 0;
  }
  if (isNaN(w)) {
    w = 0;
  }
  var workoutName = "sup";
  var newRoutine = new Exercise(workoutName, t, s, r, w);
  person.myExercises.push(newRoutine);
  console.log(JSON.stringify(person.exerciseList));
  person.drawmyExercises();
}

// $("#maxBench").click(function(e) {
//   e.preventDefault();
//   var r = parseFloat((<HTMLInputElement>document.getElementById("r")).value);
//   var w = parseFloat((<HTMLInputElement>document.getElementById("w")).value);
//   if (isNaN(r)) {
//     r = 0;
//   }
//   if (isNaN(w)) {
//     w = 0;
//   }
//   var one = w * (1 + r / 30);
//   document.getElementById("maxoutput").textContent.concat(one.toString());
// });
