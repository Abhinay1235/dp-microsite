import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'vex-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit{

  currentYear:number;
  yearList: number[] = [];
  makeList: string[] = ['Audi', 'Lexus', 'BMW', 'Ford'];
  modelList: string[] = ['RX 350', 'ES 100'];


  vehicleForm = this.fb.group({
    year: null,
    make: null, 
    model: null,
    mileage: null
  });

  constructor(private fb: UntypedFormBuilder, private dialogRef: MatDialogRef<CreateVehicleComponent>) { }

  ngOnInit(): void {
    const currentTime = new Date();
    this.currentYear = currentTime.getFullYear();

    [...Array(20)].forEach((_, i) => {
      this.yearList.push(this.currentYear - i);
    });

  }

  save():void {
    const form = this.vehicleForm.value;
    this.dialogRef.close(form);
  }

}
