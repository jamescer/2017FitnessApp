import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Http } from "@angular/http";
import { Person } from "../models/Person";

declare var window: any;
declare var FB: any;
export var personArray: Person[] = [];
@Component({
  selector: "app-loginr",
  templateUrl: "./loginr.component.html",
  styleUrls: ["./loginr.component.scss"]
})
export class LoginrComponent implements OnInit {
  name: string;
  password: string;
  me = ME;
  apiRoot: string;
  ngOnInit() {}

  constructor(private http: Http, private router: Router) {
    this.apiRoot = `//${window.location.hostname}:8081`; //8081
    window.fbAsyncInit = function() {
      FB.init({
        appId: "246977922503152",
        cookie: true,
        xfbml: true,
        version: "v2.11"
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = <HTMLScriptElement>d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  loginFB() {
    FB.login(
      (response: any) => {
        if (response.authResponse) {
          console.log(response);
          FB.api("/me?fields=name,email,picture", (response: any) => {
            console.log(response);

            this.login(
              response.name,
              "password",
              response.id,
              response.picture.data.url
            );
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scopes: "email,user_photos,user_posts" }
    );
  }

  login(name: string, password: string, fbid?: string, picture?: string) {
    ME = new Person(name, fbid, picture);
    this.router.navigate(["/you"]);
  }
}
export var ME: Person;
