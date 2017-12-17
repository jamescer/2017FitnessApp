import { Exercise } from "./Exercise";

export class Person {
  constructor(n: string, ID: string, pic: string) {
    this.name = n;
    this.id = ID;
    this.picture = pic;
  }
  maxBench: number;
  maxSquat: number;
  maxDeadlift: number;
  id: string;
  picture: string;
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

  //   drawGreeting() {
  //     $("#greetings").html(`<h1 class="display-3">Hello, ${this.name}</li>`);
  //   }
  //   drawExercises() {
  //     $("#defaultExercises").html(
  //       this.exerciseList
  //         .map(function(x) {
  //           return '<li class="list-group-item">' + x.name + "</li>";
  //         })
  //         .join("")
  //     );
  //   }

  //   drawmyExercises() {
  //     $("#my-Exercises").html(
  //       this.myExercises
  //         .map(function(x) {
  //           return (
  //             '<li class="list-group-item">' +
  //             x.name +
  //             ", time: " +
  //             x.time +
  //             ", sets: " +
  //             x.sets +
  //             ", reps: " +
  //             x.reps +
  //             ", weight: " +
  //             x.weight +
  //             "</li>"
  //           );
  //         })
  //         .join("")
  //     );

 
}

export class Image {
  id: string;
  src: string;
  link: string;
}

export class Room {
  sharedUsers: Person[] = [];
  dealer: number;
  picture: string;
}
