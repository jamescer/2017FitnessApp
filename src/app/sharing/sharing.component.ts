import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Person, Room } from "../models/Person";
import { Exercise } from "../models/Exercise";
import { SharingService, ME, sharedUsers } from "../models/sharing.service";

@Component({
  selector: "app-sharing",
  templateUrl: "./sharing.component.html",
  styleUrls: ["./sharing.component.scss"]
})
export class SharingComponent implements OnInit {
  other = new Person("Blank", "", "");
  room = new Room();
  otherExe: Exercise[];
  apiRoot: String;
  ME: Person;
  constructor(
    private http: Http,
    public share: SharingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ME = ME;
    if (this.ME == null) {
      this.router.navigate(["/login"]);
    }
    //setInterval(() => this.update(), 1000);
  }
  update() {
    this.http.get(this.share.apiRoot + "/share/room").subscribe(data => {
      this.room = data.json();
    });
  }
  getList() {}
  shareYou() {
    if (this.room.sharedUsers.includes(this.ME)) {
      alert("you already on the list dawg, nice try tho");
      console.log("did not push = " + this.ME.name);
    } else {
      this.room.sharedUsers.push(this.ME);
      console.log("pushed= " + this.ME.name);
      this.http
        .post(this.share.apiRoot + "/share/room/sharedUsers", this.ME)
        .subscribe(data => {
          console.log(data);
        });
      this.http.get(this.share.apiRoot + "/share/").subscribe(data => {
        console.log(data);
      });
    }
  }

  viewExercises(Other: Person) {
    this.other = Other;
    this.otherExe = Other.myExercises;
  }
}

export class SharingPlace {
  personArray: Person[] = [];
}
