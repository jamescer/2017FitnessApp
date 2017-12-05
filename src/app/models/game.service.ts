import { Injectable } from '@angular/core';
import { Player } from './game';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

declare var window: any;
declare var FB: any;

@Injectable()
export class GameService {

    apiRoot: string;   
    me: Player;

    constructor(private http: Http, private router: Router) {
        this.apiRoot = `//${window.location.hostname}:8081` 
        window.fbAsyncInit = function() {
            FB.init({
              appId      : '296050416766',
              cookie     : true,
              xfbml      : true,
              version    : 'v2.11'
            });
              
            FB.AppEvents.logPageView();   
              
          };
        
          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = <HTMLScriptElement>d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
    }

    loginFB() {
        FB.login((response: any) => {
            if (response.authResponse) {
             console.log(response);

             FB.api('/me?fields=name,email,picture', (response: any) => {
               console.log(response);
               this.login(response.name, 'password', response.id, response.picture.data.url);
             });

            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        }, { scopes: 'email,user_photos,user_posts'});
    }

    login(name: string, password: string, fbid?: string, picture?: string){
        this.http.post(this.apiRoot + "/game/room/players", { name, password, fbid, picture }).subscribe(
            data => {
                this.me = data.json();
                this.http.get(this.apiRoot + "/game/quotes").subscribe( data =>{
                    this.me.quotes = data.json();
                });
                this.router.navigate(['/play']);
            },
            err => {
                console.log(err);
            },
            () => {}
        )
        
    }

}
