import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { ME } from "../loginr/loginr.component";
import { Person, Room } from "../models/Person";
import { Exercise } from "../models/Exercise";
import { SharingService } from "../models/sharing.service";
@Component({
  selector: "app-sharing",
  templateUrl: "./sharing.component.html",
  styleUrls: ["./sharing.component.scss"]
})
export class SharingComponent implements OnInit {
  room = new Room();
  otherExe: Exercise[];

  constructor(
    private http: Http,
    public game: SharingService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    if (ME == null) {
      this.router.navigate(["/login"]);
    }
    // setInterval(() => this.update(), 1000);
  }
  update() {
    // this.http.get(this.game.apiRoot + "/sharing/room").subscribe(data => {
    //   this.room = data.json();
    // });
  }

  shareYou() {
    if (this.room.sharedUsers.includes(ME)) {
      console.log("did not push = " + ME.name);
    } else {
      console.log("pushed= " + ME.name);
      this.room.sharedUsers.push(ME);
    }
  }

  viewExercises(Other: Person) {
    this.otherExe = Other.myExercises;
  }
}

export class SharingPlace {
  personArray: Person[] = [];
}
