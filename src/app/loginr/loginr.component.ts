import { Component, OnInit } from '@angular/core';
import { GameService } from '../models/game.service';
import { Player } from '../models/game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginr',
  templateUrl: './loginr.component.html',
  styleUrls: ['./loginr.component.scss']
})
export class LoginrComponent implements OnInit {

    name:string;
    password: string;


    constructor(private game: GameService, private router: Router) { }

    ngOnInit() {
    }

    login(){
        this.game.login(this.name, this.password)
    }
    loginFB(){
        this.game.loginFB();
    }

}
