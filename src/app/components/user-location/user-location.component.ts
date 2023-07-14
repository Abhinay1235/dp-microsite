import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { userLocation } from 'src/app/interface/userLocation.interface';

@Component({
  selector: 'vex-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})
export class UserLocationComponent implements OnInit {
  
  isValidAddress:boolean = false;
  constructor(private fb: UntypedFormBuilder, private dialogRef: MatDialogRef<UserLocationComponent>, @Inject(MAT_DIALOG_DATA) public data: userLocation) { }

  

  locationForm = this.fb.group({
    address: null,
    city: null, 
    state: null,
    zipcode: null,
    country: null
  });

  ngOnInit(): void {
    if(this.data){
      this.locationForm.patchValue(this.data);
    }
  }

  verifyAddress(): void {
    this.isValidAddress = true;
  }

  save():void {
    const form = this.locationForm.value;
    
    this.dialogRef.close(form);
  }
}
