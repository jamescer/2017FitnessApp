import { Component, OnInit } from "@angular/core";
import { SharingService } from "../models/sharing.service";

import { Person } from "../models/Person";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  users: Person[] = [];
  constructor(
    private http: Http,
    private router: Router,
    private share: SharingService
  ) {}

  ngOnInit() {}
}
