import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Person } from "../models/Person";
import { Exercise } from "../models/Exercise";
import { SharingService, ME } from "../models/sharing.service";

import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-exercises",
  templateUrl: "./exercises.component.html",
  styleUrls: ["./exercises.component.scss"],
  animations: [
    trigger("my-Exercises", [
      transition("* => *", [
        query(":enter", style({ opacity: 0 }), { optional: true }),
        query(
          ":enter",
          stagger("100ms", [
            animate(
              ".3s ease-in",
              keyframes([
                style({ opacity: 0, transform: "translateY(-25%)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(35px)",
                  offset: 0.3
                }),
                style({ opacity: 1, transform: "translateY(0)", offset: 1.0 })
              ])
            )
          ]),
          { optional: true }
        ),
        query(
          ":leave",
          stagger("100ms", [
            animate(
              ".3s ease-out",
              keyframes([
                style({ opacity: 1, transform: "translateY(0)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(35px)",
                  offset: 0.3
                }),
                style({
                  opacity: 0,
                  transform: "translateY(-75%)",
                  offset: 1.0
                })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class ExercisesComponent implements OnInit {
  constructor(private router: Router,private shareService: SharingService) { }
  ME = ME;
  ngOnInit() {
    if (ME == null) {
      this.router.navigate(["/login"]);
    }
  }
  AddToDone(exerciseName: string, reps: number, weight: number) {
   
    ME.myExercises.push(new Exercise(exerciseName, "zero", 3, 12, 99));
    console.log(exerciseName + ", " + reps + ", " + weight);
  }
  removeFromMyExercises(key: Exercise) {
    var index = ME.myExercises.indexOf(key, 0);
    if (index > -1) {
      ME.myExercises.splice(index, 1);
    }
  }
}
