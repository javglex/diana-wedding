import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import {ScrollToModule} from 'ng2-scroll-to';
import { LandingSubjectService } from '../services/landingSubject';
import { ServicesComponent } from './services/services.component';

const appRoutes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'about', component: WelcomeComponent},
  {path:'services', component: ServicesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    ],
  providers: [LandingSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
