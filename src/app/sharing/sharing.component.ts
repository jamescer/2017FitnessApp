import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Person, Room } from "../models/Person";
import { Exercise } from "../models/Exercise";
import { SharingService, ME } from "../models/sharing.service";
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
    public game: SharingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ME = this.game.me;
    if (this.ME == null) {
      this.router.navigate([""]);
    }
    setInterval(() => this.update(), 1000);
  }
  update() {
    this.http.get(this.game.apiRoot + "/game/room").subscribe(data => {
      this.room = data.json();
    });
  }
  getList() {}
  gameYou() {
    if (this.room.players.includes(this.ME)) {
      alert("you already on the list dawg, nice try tho");
    } else {
      this.room.players.push(this.ME);
      console.log("pushed= " + this.ME.name);

      this.http
        .post(this.game.apiRoot + "/game/room/players", this.ME)
        .subscribe(data => {
          console.log("post gameyou: " + data);
        });
      this.http.get(this.game.apiRoot + "/game/").subscribe(data => {
        console.log("get shareyou: " + data);
      });
    }
  }

  viewExercises(Other: Person) {
    this.other = Other;
    this.otherExe = Other.myExercises;
  }
}
