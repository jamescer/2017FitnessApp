import { Component, OnInit } from "@angular/core";
import { GameService } from "../models/game.service";
import { Router } from "@angular/router";
import { ME } from "../models/game.service";
@Component({
  selector: "app-loginr",
  templateUrl: "./loginr.component.html",
  styleUrls: ["./loginr.component.scss"]
})
export class LoginrComponent implements OnInit {
  name: string;
  password: string;
  me = ME;
  constructor(private game: GameService, private router: Router) {}

  ngOnInit() {
    if (this.me.name != null) {
      this.router.navigate(["/you"]);
    }
  }

  login() {
    this.game.login(this.name, this.password);
  }
  loginFB() {
    this.game.loginFB();
  }
}
