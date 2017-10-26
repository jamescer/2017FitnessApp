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

export class Tracker {
  exerciseList: Exercise[] = [
    { name: "Weight Lifting", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Jogging", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Swimming", time: "0 minutes", sets: 0, reps: 0, weight: 0 },
    { name: "Cycling", time: "0 minutes", sets: 0, reps: 0, weight: 0 }
  ];
  myExercises: Exercise[] = [];

  drawExercises() {
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
  }

  drawmyExercises() {
    $("#my-routines").html(
      this.myExercises
        .map(function(x) {
          return (
            '<li class="list-group-item">' +
            x.name +
            " " +
            x.time + " " +
            x.sets + " " +
            x.reps + " " +
            x.weight +
            "</li>"
          );
        })
        .join("")
    );
  }
}

//Controller

const tracker = new Tracker();
let empty: boolean = true;

tracker.drawExercises();

$(".list-group-item").click(function(e) {
  e.preventDefault();
  const workoutName = e.target.textContent;
  if (empty) {
    document.getElementById("default-message").remove();
    empty = false;
  }
  const newRoutine = new Exercise(workoutName, "0", 0, 0, 0);
  tracker.myExercises.push(newRoutine);
  console.log(tracker.myExercises);
  tracker.drawmyExercises();
});
$(".list-group-item").click(function(e) {
  e.preventDefault();
});
