import { Injectable } from "@angular/core";
import { Person } from "./Person";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { ME } from "../loginr/loginr.component";

@Injectable()
export class SharingService {
  apiRoot: string;
  me: Person;
  sharedUsers: Person[];
  constructor(private http: Http, private router: Router) {}

  updateList() {}
}
export var sharedUsers: Person[];
