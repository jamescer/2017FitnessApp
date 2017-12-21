import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Person } from "../models/Person";
import { Exercise } from "../models/Exercise";
import { SharingService } from "../models/sharing.service";

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
    trigger("my-Exercises-Effects", [
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
  constructor(private http: Http, private router: Router, private share: SharingService) { }
  me: Person;
  ngOnInit() {
    if (this.share.me == null) {
      this.router.navigate(["/login"]);
    }
    this.me = this.share.me;
  }
  AddToDone(exerciseName: string, reps: number, weight: number) {
    const data = { exerciseName, reps, weight };
    this.http.post(this.share.apiRoot + "/share/myExercises", data).subscribe(res => {
      console.log(data);
      this.me.myExercises.push(res.json());
    });

    //this.me.myExercises.push(new Exercise(exerciseName, "zero", 3, 12, 99));
    //console.log(exerciseName + ", " + reps + ", " + weight);
  }
  removeFromMyExercises(key: Exercise) {
    var index = this.me.myExercises.indexOf(key, 0);
    if (index > -1) {
      this.me.myExercises.splice(index, 1);
    }
  }
}
