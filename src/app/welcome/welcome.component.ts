import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { LandingSubjectService } from '../../services/landingSubject';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { WindowSize } from '../../services/windowObs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  TAG:string = "WelcomeComponent - ";
  topJumbo = 200;
  landingHeight=100;
  imageTransSpeed=2000;
  closeSlider=false;
  hideLanding=false;

  imageSources: string[] = [
    'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_956,q_41/v1520914120/landing_page/Diana_Dorsey_Favorites-0038.jpg',
    'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_494,q_44/v1519008595/landing_page/209-LN9_8719-Web.jpg',
    'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_815,q_39/v1520916201/landing_page/DSC_3804.jpg',
    'http://res.cloudinary.com/dustxxgvx/image/upload/c_crop,h_2002,w_3972/c_scale,h_815,q_39/v1519008643/diana_wedding/IMG_8139.jpg'
  ];

 changeImageInterval;
 selectedImageSource:string;
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

    this.loadWindowBasedImage();

    setTimeout(()=>{
      console.log(this.TAG,"timer fired");
      this.topJumbo=50;
    }, 250);

    this.selectedImageIndex=0;
    this.selectedImageSource = this.imageSources[0];
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


  loadWindowBasedImage(){

    let switchImageSet = (value) => {
      if(value<700){
        console.log("Value less than 600: ",value);
        this.imageSources = [
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_956,q_41/v1520914120/landing_page/Diana_Dorsey_Favorites-0038.jpg',
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_494,q_44/v1519008595/landing_page/209-LN9_8719-Web.jpg',
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_815,q_39/v1520916201/landing_page/DSC_3804.jpg',
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_815,q_39/v1519008643/diana_wedding/IMG_8139.jpg'
        ];
      }else 
      if (value > 700 && value <= 1400){
        console.log("Value between 600 and 1200: ",value);
        this.imageSources = [
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_1537,q_59/v1520914120/landing_page/Diana_Dorsey_Favorites-0038.jpg',
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_682,q_58/v1519008595/landing_page/209-LN9_8719-Web.jpg',
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_1603,q_60/v1520916201/landing_page/DSC_3804.jpg',
          'http://res.cloudinary.com/dustxxgvx/image/uploadc_scale,h_1603,q_60/v1519008643/diana_wedding/IMG_8139.jpg'
        ];
      }else
      if (value > 1400){
        console.log("Value greater than 1200: ",value);
        this.imageSources = [
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_1920,q_70/v1520914120/landing_page/Diana_Dorsey_Favorites-0038.jpg',
          'http://res.cloudinary.com/dustxxgvx/image/upload/v1519008595/landing_page/209-LN9_8719-Web.jpg',
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_1920,q_70/v1520916201/landing_page/DSC_3804.jpg',
          'http://res.cloudinary.com/dustxxgvx/image/upload/c_scale,h_1920,q_70/v1519008643/diana_wedding/IMG_8139.jpg'
        ];
      }
    }

    let windowSize:WindowSize = new WindowSize();
    windowSize.width$.subscribe(value => {
      console.log(value);
      switchImageSet(value);
    });

  }


  onImageLoadFail(index){
      console.log("failed load on image index: ",index);
      this.imageSources[index]='../assets/images/image-error.png';
      this.selectedImageIndex = index;
      this.selectedImageSource = this.imageSources[this.selectedImageIndex];
      console.log("selected resource: ",this.selectedImageSource);
  }


}
