import { Component, OnInit } from '@angular/core';
import { LandingSubjectService } from '../../services/landingSubject';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TAG:string="HomeComponent - ";
  show:boolean=false;

  constructor(private landingSubject:LandingSubjectService, private router:Router) {
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd){
        if (event.url=="/about"){
          this.show=true;
        }
      }
    });
  }

  ngOnInit() {
    this.landingSubject.landingSelected.subscribe((selected)=>{
      if (selected){
        this.show=true;
      }
    });
  }

}
