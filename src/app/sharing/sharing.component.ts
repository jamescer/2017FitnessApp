import { Component, OnInit } from "@angular/core";

import { personArray } from "../loginr/loginr.component";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { ME } from "../loginr/loginr.component";
import { Person, Room } from "../models/Person";
@Component({
  selector: "app-sharing",
  templateUrl: "./sharing.component.html",
  styleUrls: ["./sharing.component.scss"]
})
export class SharingComponent implements OnInit {
  room = new Room();
PA = personArray;
  me = ME;
  constructor(private http: Http, private router: Router) {}

  ngOnInit() {
    //setInterval(() => this.update(), 1000);
  }
  update() {}

  shareYou() {
    console.log("pushed= " + ME.name);
    this.PA.push(ME);
  }
}
