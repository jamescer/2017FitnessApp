import { Exercise } from "./Exercise";

export class Person {
  // constructor(n: string, ID: number, pic: string) {
  //   this.name = n;
  //   this.id = ID;
  //   this.picture = pic;
  // }
  maxBench: number = 0;
  maxSquat: number = 0;
  maxDeadlift: number = 0;
  id: number;
  picture: string;
  name: string;
  myExercises: Exercise[];
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
}

export class Image {
  id: string;
  src: string;
  link: string;
}

export class Room {
  players: Person[] = [];
}
