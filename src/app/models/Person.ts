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
}

export class Image {
  id: string;
  src: string;
  link: string;
}

export class Room {
  players: Person[] = [];
}
