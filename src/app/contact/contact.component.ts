import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  emailAddress;
  fullName;
  phoneNumber;
  eventLocation;
  guestCount;
  estimatedBudget;
  aboutEvent;
  eventdate;
  foundWhere;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
    console.log("submitted: " + this.submitted + " email address: "+ this.emailAddress + " full name: "+this.fullName+" phone number: "+this.phoneNumber
  + " event location: "+ this.eventLocation + " guest count: " + this.guestCount + " estimated budget: " + this.estimatedBudget + " about event: " + this.aboutEvent
  + " event date: ", this.eventdate , " found: ", this.foundWhere );


  const req = this.http.post('/contact', {
    emailaddress: this.emailAddress,
    fullname: this.fullName,
    phonenumber: this.phoneNumber,
    eventlocation:this.eventLocation,
    guestcount:this.guestCount,
    estimatedbudget:this.estimatedBudget,
    aboutevent:this.aboutEvent,
    eventdate:this.eventdate,
    found:this.foundWhere
  })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );

  }

}
