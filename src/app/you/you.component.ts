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
  ME = ME;
  constructor(private http: Http, private router: Router) {}

  ngOnInit() {
    if (ME == null) {
      this.router.navigate(["/login"]);
    }
  }

  update() {}

  maxBench(a: number) {
    ME.maxBench = a;
  }
  maxSquat(a: number) {
    ME.maxSquat = a;
  }
  maxDeadlift(a: number) {
    ME.maxDeadlift = a;
  }
  logout() {
    this.router.navigate(["/login"]);
  }
}
