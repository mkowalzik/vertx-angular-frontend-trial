import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {Routes, RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TestplanCardComponent} from "./testplancard/testplancard.component";
import {TestplanComponent} from "./testplan/testplan.component";
import {TestplanService} from "./testplan.service";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'plans/:id', component: TestplanComponent}
  // {
  //   path: 'weeks', component: WeeksComponent,
  //   children: [
  //     {path: ':id', component: WeekComponent}
  //   ]
  // },
  // // {path: 'weeks/:id', component: WeekComponent},
  // {path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    TestplanCardComponent,
    TestplanComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TestplanService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
