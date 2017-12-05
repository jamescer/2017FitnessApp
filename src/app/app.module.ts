import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { NavComponent } from './nav/nav.component';
import { PlayComponent } from './play/play.component';
import { IndexComponent } from './index/index.component';
import { GameService } from './models/game.service';
import { LoginrComponent } from './loginr/loginr.component';
// import { PictureChooserComponent } from './widgets/picture-chooser/picture-chooser.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { YouComponent } from './you/you.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { WidgetsComponent } from './widgets/widgets.component';
// import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    PlayComponent,
    IndexComponent,
    LoginrComponent,
    // PictureChooserComponent,
    HeaderComponent,
    FooterComponent,
    YouComponent,
    WorkoutsComponent,
    ExercisesComponent,
    WidgetsComponent,
    // ModelsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([
        { path: "play", component: PlayComponent },
        { path: "home", component: IndexComponent },
        { path: "login", component: LoginrComponent },
        { path: "you", component: YouComponent },
        { path: "workouts", component: WorkoutsComponent },
        { path: "exercises", component: ExercisesComponent },
        { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
