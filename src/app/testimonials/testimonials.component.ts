import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  TAG:String = "TestimonialsComponent - ";
  reviews = [];
  review;
  reviewIndex:number;
  reviewYPos = 1;

  constructor() {

   }

  ngOnInit() {

    this.reviewIndex = 0;
    
    this.reviews.push(new Review("User6267539","Diana was absolutely a joy to work with! We needed a day of coordinator to help make sure everything ran smoothly at our venue. She was so responsive and just an all around great person to work with. She checked up on us regularly leading up to the wedding and made sure we had all of our ducks in a row. During the day of the wedding, she not only made everything run perfectly, but she also make sure we always had a fresh drink in our hand and were able to be carefree during the event. We had so much fun! Thank you so much Diana!"));
    this.reviews.push(new Review("Angelique","Diana and her assistant were wonderful. They had everything completely under control the day of our wedding and helped coordinate the vendors to make everything incredible!! Highly recommended."));
    this.reviews.push(new Review("Ashwin","Diana Dorsey at Simply Elegant was simply amazing for day-of coordination services! She went above and beyond to ensure that our wedding was a success. We had a fairly complex wedding that spanned two days and required a long list of different vendors, including table and dish rentals, servers, caterer, alcohol delivery, florist, musicians and decor. Diana and her assistant Ivonne were fantastic in making sure that everyone was organized, stayed on top of timelines, and removed any stress from my fiancee and myself. Throughout the wedding planning process, she was great in providing us tips and suggestions on specific vendors to use as well as general advice on how to orchestrate a successful wedding (leveraging her extensive experience!). Diana was extremely professional, responsive and had an answer for pretty much everything. The second day of our wedding she even saved the day by stitching a button back onto my tuxedo jacket! I would absolutely recommend using Diana and Simply Elegant for wedding planning/coordination services. You will not be disappointed!"));
    this.reviews.push(new Review("Tim","If I had to do it all over again, I'd chose Diana! She was amazing and on-point during the whole experience from initial planning to day-of execution. She was extraordinarily flexible and did a great job keeping us on schedule while calming our intensive need to try and micro-manage. HIRE HER!"));
    this.reviews.push(new Review("Ryan","We're very pleased with the outcome and would recommend to all family and friends. We have even become friends throughout the process!"));
    this.reviews.push(new Review("Frank","We LOVE Diana and her team! First of all, she is there to make our day as wonderful as possible. She is so great at understanding what we're looking for and goes above and beyond creating our dream wedding. She worked over time on the wedding day to make sure everyone was taken care of. She also did the flowers for us, and it was truly beautiful and unforgettable! And she came in under budget! We couldn't be more happy to have a wedding planner like Diana! Thank you so much! Highly recommend!"));
    this.reviews.push(new Review("Liza","Diana was a DREAM - very professional and easy to work with. She understood our vision right away and was flexible in what services she offered. She also stretched our dollars - she was able to save us more than twice her fee. We loved working with her and I will miss her now that it's over!"));

    this.review = this.reviews[this.reviewIndex];
  }

  onNextPressed(){
    this.reviewYPos = 0;
    var hideLanding = setInterval(()=>{
      this.reviewYPos=1;
      this.reviewIndex++;
      if (this.reviewIndex >= this.reviews.length)    //wrap
        this.reviewIndex = 0;
      this.review = this.reviews[this.reviewIndex];
      clearInterval(hideLanding);
      return;
  }, 250);
  }

  onBackPressed(){
    this.reviewIndex--;
    if (this.reviewIndex <= 0)    //wrap
      this.reviewIndex = this.reviews.length-1;
    this.review = this.reviews[this.reviewIndex];
  }

}

class Review{
  
  description: String;
  name: String;

  constructor(name:String,description:String){
    this.name = name;
    this.description = description;
  }

  getName(){
    return this.name;
  }
  getDescription(){
    return this.description;

  }
}
