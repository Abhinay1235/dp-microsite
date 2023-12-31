import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ColorVariable, colorVariables } from 'src/@vex/components/config-panel/color-variables';
import { ConfigService } from 'src/@vex/config/config.service';

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
  colorVariables: Record<string, ColorVariable> = colorVariables;
  selectedColor = 'red';

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

  constructor(private router: Router, private _snackBar: MatSnackBar, private configService: ConfigService,) { }
  
  onInput(event: any): void {
    const inputValue: string = event.target.value;
    const regex: RegExp = /^\d{0,10}$/; // Allow only up to 10 digits

    if (!regex.test(inputValue)) {
      this.phoneNumber = inputValue.replace(/\D/g, '').slice(0, 10); // Trim and limit to 10 digits
    }
  }

  search(): void {
    if(this.phoneNumber)
      // Navigate to the SearchResultsComponent with the phone number parameter
      this.router.navigate(['/schedule-service', this.phoneNumber]);
    else
      this._snackBar.open("Enter Phone Number", 'CLOSE', {
        duration: 3000,
      });
  }

  selectColor(color: any): void {
    this.selectedColor = color.key;
    this.configService.updateConfig({
      style: {
        colors: {
          primary: {
            default: color.value.default,
            contrast: color.value.contrast
          }
        }
      }
    });
  }
  

}
