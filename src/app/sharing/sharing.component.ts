import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Person, Room } from "../models/Person";
import { Exercise } from "../models/Exercise";
import { SharingService } from "../models/sharing.service";
@Component({
  selector: "app-sharing",
  templateUrl: "./sharing.component.html",
  styleUrls: ["./sharing.component.scss"]
})
export class SharingComponent implements OnInit {
  other: Person;
  room = new Room();
  otherExe: any[];
  apiRoot: String;
  me: Person;
  constructor(
    private http: Http,
    public share: SharingService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.share.me == null) {
      this.router.navigate(["/login"]);
    }
    this.me = this.share.me;
    this.other = this.me;
    this.http.get(this.share.apiRoot + "/share/room").subscribe(data => {
      this.room = data.json();
    });
    //setInterval(() => this.update(), 1000);
  }
  update() {
    this.http.get(this.share.apiRoot + "/share/room").subscribe(data => {
      this.room = data.json();
    });
  }
  viewExercises(O: Person) {
    console.log(O);
  // this.http.post(this.share.apiRoot + "/share/room/other", O.myExercises);
   this.http.get(this.share.apiRoot + "/share/room/other").subscribe(data => {
      this.other = data.json();
    });
  }
}
