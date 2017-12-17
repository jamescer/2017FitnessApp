import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Person } from "../models/Person";
import { Exercise } from "../models/Exercise";
import { ME } from "../loginr/loginr.component";
@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.scss"]
})
export class ExercisesComponent implements OnInit {
  constructor(private router: Router) {}
  ME = ME;
  ngOnInit() {
    if (ME == null) {
      this.router.navigate(["/login"]);
    }
  }
  AddToDone(exerciseName: string, reps: number, weight: number) {
    var ex1 = new Exercise(exerciseName, "zero", 3, 12, 99);
    ME.myExercises.push(ex1);
    console.log(exerciseName + ", " + reps + ", " + weight);
  }
  removeFromMyExercises(key: Exercise) {
    var index = ME.myExercises.indexOf(key, 0);
    if (index > -1) {
      ME.myExercises.splice(index, 1);
    }
  }
}
