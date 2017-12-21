import { Component, OnInit } from "@angular/core";
import { SharingService } from "../models/sharing.service";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Person } from "../models/Person";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { NgxTypeaheadModule } from "ngx-typeahead";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

const states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District Of Columbia",
  "Federated States Of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Islands",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];
var users: Person[] = [];
@Component({
  selector: "app-typahead",
  templateUrl: "./typahead.component.html",
  styleUrls: ["./typahead.component.scss"]
})
export class TypaheadComponent implements OnInit {
  
  constructor(
    private http: Http,
    private router: Router,
    private share: SharingService
  ) {}
  public model: any;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(
      term =>
          term.length < 2
            ? []
            : users
                .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
                .slice(0, 10)
      );

  ngOnInit() {
    this.http
      .get(this.share.apiRoot + "/share/room/players")
      .subscribe(data => {
        console.log(data);
        users = data.json();
      });
  }
}
