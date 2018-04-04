import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { 
    this.submitted = true; 
    console.log("submitted: " + this.submitted + " email address: "+ this.emailAddress + " full name: "+this.fullName+" phone number: "+this.phoneNumber
  + " event location: "+ this.eventLocation + " guest count: " + this.guestCount + " estimated budget: " + this.estimatedBudget + " about event: " + this.aboutEvent
  + " event date: ", this.eventdate );
  }
}
