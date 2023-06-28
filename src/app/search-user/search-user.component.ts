import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
@Component({
  selector: 'vex-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})


export class SearchUserComponent  {
  phoneNumber: string;

  userInfo = {
    id:"123",
    firstname:"Abhinay",
    lastname:"B",
    email:"alpha@dp.com",
    number:"9998886666",
    vehicles:[
      {name: "Lexus RX 350", mileage: "35674 miles", value:"lexus", primaryVehicle: true},
      {name: "Audi A4", mileage:"99875 miles", value:"audi", primaryVehicle: false}
    ],
    locations:[
      {id:"1", fullAddress: '999 AlphaBeta Lane, Chesterfield, MO - 63017', primaryLocation: true},
      {id:"2", fullAddress: '777 Betagama st, Ofallon, MO - 99999', primaryLocation: false}

    ]
  }

  constructor(private router: Router) { }
  
  onInput(event: any): void {
    const inputValue: string = event.target.value;
    const regex: RegExp = /^\d{0,10}$/; // Allow only up to 10 digits

    if (!regex.test(inputValue)) {
      this.phoneNumber = inputValue.replace(/\D/g, '').slice(0, 10); // Trim and limit to 10 digits
    }
  }

  search(): void {
    // Perform any necessary actions with the phone number here

    // Navigate to the SearchResultsComponent with the phone number parameter
    this.router.navigate(['/schedule-service', this.phoneNumber]);
  }
  

}
