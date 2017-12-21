import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Router } from "@angular/router";
import { Person } from "../models/Person";
import { SharingService } from "../models/sharing.service";
import { Exercise } from "../models/Exercise";
declare const FB: any;
@Component({
  selector: "app-you",
  templateUrl: "./you.component.html",
  styleUrls: ["./you.component.scss"]
})
export class YouComponent implements OnInit {
  me: Person;
  constructor(
    private http: Http,
    private router: Router,
    private share: SharingService
  ) { }

  ngOnInit() {
    if (this.share.me == null) {
      this.router.navigate(["/login"]);
    }
    this.me = this.share.me;
    console.log("MyExercise: = " + this.share.me.myExercises[1]);
  }

  update() { }

  maxBench(a: number) {
    this.me.maxBench = a;
  }
  maxSquat(a: number) {
    this.me.maxSquat = a;
  }
  maxDeadlift(a: number) {
    this.me.maxDeadlift = a;
  }
  logout() {
    this.share.me = null;
    this.router.navigate(["/login"]);
  }
}
