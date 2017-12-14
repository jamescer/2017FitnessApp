import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { GameService } from "../models/game.service";
import { Router } from "@angular/router";
import { Person } from "../models/Person";
import { Exercise } from "../models/Exercise";

import { ME } from "../models/game.service";
@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.scss"]
})
export class ExercisesComponent implements OnInit {me = ME;
  
  constructor(private game: GameService, private router: Router) {}

  ngOnInit() {}
  AddToDone(exerciseName: string, reps: number, weight: number) {
    var ex1 = new Exercise(exerciseName, "zero", 3, 12, 99);
    this.me.myExercises.push(ex1);
    console.log(exerciseName + ", " + reps + ", " + weight);
  }
  removeFromMyExercises(key: Exercise) {
    var index = this.me.myExercises.indexOf(key, 0);
    if (index > -1) {
      this.me.myExercises.splice(index, 1);
    }
  }
}
