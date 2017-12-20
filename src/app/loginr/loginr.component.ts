import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Http } from "@angular/http";
import { Person } from "../models/Person";
import { SharingService } from "../models/sharing.service";

declare var window: any;
declare var FB: any;

@Component({
  selector: "app-loginr",
  templateUrl: "./loginr.component.html",
  styleUrls: ["./loginr.component.scss"]
})
export class LoginrComponent implements OnInit {
  name: string;
  password: string;
  me: Person;
  apiRoot: string;
  ngOnInit() {}

  constructor(
    private http: Http,
    private router: Router,
    private share: SharingService
  ) {}

  loginFB() {
    this.share.loginFB();
  }

  login(name: string, password: string, fbid?: string, picture?: string) {
    this.share.login(name, password, fbid, picture);
  }
}
