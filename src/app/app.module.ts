import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import {ScrollToModule} from 'ng2-scroll-to';
import { LandingSubjectService } from '../services/landingSubject';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {path:'', component: WelcomeComponent},
  {path:'about', component: WelcomeComponent},
  {path:'services', component: ServicesComponent},
  {path:'testimonials', component: TestimonialsComponent},
  {path:'contact', component: ContactComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'*', component: WelcomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    HomeComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
    ],
  providers: [LandingSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
