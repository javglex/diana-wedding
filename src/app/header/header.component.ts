import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { LandingSubjectService } from '../../services/landingSubject';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  TAG:string = "HeaderComponent - ";
  opacityAmmount=0;
  framerate=240;
  enabled:boolean=false;
  isFixed = false;
  isCollapsed = true;

  constructor(public el: ElementRef, private landingSubject:LandingSubjectService, private router:Router) { 
    this.isCollapsed = true;
  }

  ngOnInit() {
    this.landingSubject.landingSelected.subscribe((selected)=>{
      if (selected){
        this.fadeIn();
      }
    });

    this.router.events.subscribe((event)=>{
      console.log(this.TAG,"event: "+event);
      if (event instanceof NavigationEnd){
        if (event.urlAfterRedirects!="/" && event.urlAfterRedirects.indexOf("/#")<0){
          this.fadeIn();
        }
      }

    });


    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

  /** Actual fade in animation will be handled by css */
  fadeIn(){
    this.enabled=true;
    this.isCollapsed=false;
    this.opacityAmmount=1;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    console.log("scroll position:",scrollPosition);
    console.log("component position: ", componentPosition);
    if (scrollPosition>0){
      this.isFixed = true;
    } else 
      this.isFixed = false;
  }

}
