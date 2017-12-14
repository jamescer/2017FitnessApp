import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Router } from "@angular/router";
import { Person } from "../models/Person";
import { ME } from "../loginr/loginr.component";
import { Exercise } from "../models/Exercise";

declare const FB: any;
@Component({
  selector: "app-you",
  templateUrl: "./you.component.html",
  styleUrls: ["./you.component.scss"]
})
export class YouComponent implements OnInit {
  me = ME;
  constructor(private http: Http, private router: Router) {}

  ngOnInit() {
    if (this.me.name === null) {
      this.router.navigate(["/login"]);
    }
  }

  update() {}

  maxBench(a: number) {
    this.me.maxBench = a;
  }
  maxSquat(a: number) {
    this.me.maxSquat = a;
  }
  maxDeadlift(a: number) {
    this.me.maxDeadlift = a;
  }
}
