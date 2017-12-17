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
// import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NavComponent,
    IndexComponent,
    LoginrComponent,
    // PictureChooserComponent,
    FooterComponent,
    YouComponent,
    WorkoutsComponent,
    ExercisesComponent,
    WidgetsComponent,
    SharingComponent
    // ModelsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
  providers: [LoginrComponent, SharingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
