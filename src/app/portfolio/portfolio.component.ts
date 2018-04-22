import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  TAG:String = "PortfolioComponent -";

  thumbnailUrl: String[] = [
    "1.url",
    "2.url",  
    "3.url",  
    "4.url",  
    "5.url",  
    "6.url",  
    "7.url",    
    "1.url",
    "2.url",  
    "3.url",  
    "4.url",  
    "5.url",  
    "6.url",  
    "7.url"
  ];

  expandImageUrl:String[]=[
    "large1.url",
    "large2.url",  
    "large3.url",  
    "large4.url",  
    "large5.url",  
    "large6.url",  
    "large7.url",
    "large1.url",
    "large2.url",  
    "large3.url",  
    "large4.url",  
    "large5.url",  
    "large6.url",  
    "large7.url"
  ]

  counter=[];

  constructor() { }

  ngOnInit() {
    this.counter = new Array(Math.round(this.thumbnailUrl.length)).fill(0).map((x,i)=>i);
    console.log(this.TAG,"counter length: "+ this.counter.length);
  }

}
