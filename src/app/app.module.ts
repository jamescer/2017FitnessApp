import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeadComponent } from "./head/head.component";
import { NavComponent } from "./nav/nav.component";
import { IndexComponent } from "./index/index.component";
import { LoginrComponent } from "./loginr/loginr.component";
// import { PictureChooserComponent } from './widgets/picture-chooser/picture-chooser.component';
import { FooterComponent } from "./footer/footer.component";
import { YouComponent } from "./you/you.component";
import { WorkoutsComponent } from "./workouts/workouts.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { WidgetsComponent } from "./widgets/widgets.component";
import { SharingComponent } from "./sharing/sharing.component";
import { Person } from "./models/Person";
import { SharingService } from "./models/sharing.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PlayComponent } from "./play/play.component";
import { GameService } from "./models/game.service";
import { PictureChooserComponent } from "./widgets/picture-chooser/picture-chooser.component";

@NgModule({
  declarations: [
    AppComponent,
    PictureChooserComponent,
    PlayComponent,
    HeadComponent,
    NavComponent,
    IndexComponent,
    LoginrComponent,
    FooterComponent,
    YouComponent,
    WorkoutsComponent,
    ExercisesComponent,
    WidgetsComponent,
    SharingComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent },
      { path: "login", component: LoginrComponent },
      { path: "you", component: YouComponent },
      { path: "workouts", component: WorkoutsComponent },
      { path: "exercises", component: ExercisesComponent },
      { path: "sharing", component: SharingComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ SharingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
