import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { LandingSubjectService } from '../../services/landingSubject';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  TAG:string = "WelcomeComponent - ";
  topJumbo = 200;
  landingHeight=100;
  imageTransSpeed=4000;
  closeSlider=false;
  hideLanding=false;
  imageSources: string[] = [
    'http://res.cloudinary.com/dustxxgvx/image/upload/v1519008643/diana_wedding/IMG_8139.jpg',
    'http://res.cloudinary.com/dustxxgvx/image/upload/v1519008599/diana_wedding/M2D_0779.jpg',
    'http://res.cloudinary.com/dustxxgvx/image/upload/v1519008595/diana_wedding/209-LN9_8719-Web.jpg'
 ];
 changeImageInterval;
 selectedImageSource:string=this.imageSources[0];
 selectedImageIndex;

 
  constructor(public el: ElementRef, private landingSubject:LandingSubjectService, private router:Router) {
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd){
        if (event.url=="/about"){
          this.hideLanding=true;
        }
      }
    });
   }

  ngOnInit() {
    console.log(this.TAG,"ngOnInit fired");
    setTimeout(()=>{
      console.log(this.TAG,"timer fired");
      this.topJumbo=50;
    }, 250);

    this.selectedImageIndex=0;
    this.changeImageInterval = setInterval(()=>{
      this.selectNextImage();
      console.log(this.TAG,"new image selected");
      return;
    }, this.imageTransSpeed);
  }


  onEnterSiteClicked(){
    clearInterval(this.changeImageInterval);
    this.landingSubject.landingSelected.emit(true);
    this.closeSlider=true;
    this.landingHeight=0;
    var hideLanding = setInterval(()=>{
        this.landingHeight=0;
        console.log(this.TAG,"landing cleared");
        clearInterval(hideLanding);
        return;
    }, 1000);

  }

  onBackgroundClicked(){
    this.selectNextImage();
  }

  selectNextImage(){
    this.selectedImageSource = this.imageSources[this.selectedImageIndex];
    this.selectedImageIndex++;
    if (this.selectedImageIndex>=this.imageSources.length){
      this.selectedImageIndex = 0;
    }
    this.resetImageInterval();
  }

  resetImageInterval(){
    clearInterval(this.changeImageInterval);
    this.changeImageInterval = setInterval(()=>{
      this.selectNextImage();
      console.log(this.TAG,"new image selected");
      return;
    }, this.imageTransSpeed);
  }

  onEvent(event){
    event.stopPropagation();
  }

}
