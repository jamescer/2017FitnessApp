import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Exercise } from "../models/Exercise";
import { Person } from "../models/Person";
import { Http } from "@angular/http";

@Component({
  selector: "app-workouts",
  templateUrl: "./workouts.component.html",
  styleUrls: ["./workouts.component.scss"]
})
export class WorkoutsComponent implements OnInit {
  
  constructor(
    private http: Http,
    private router: Router
  ) {}

  ngOnInit() {
   
    this.defaultExercises();
    setInterval(() => this.update(), 1000);
  }
  defaultExercises() {}
  update() {}
}
