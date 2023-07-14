import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Vehicle } from 'src/app/interface/vehicle.interface';

@Component({
  selector: 'vex-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit{

  year:number;
  yearList: number[] = [];
  makeList: string[] = ['Audi', 'Lexus', 'BMW', 'Ford'];
  modelList: string[] = ['RX 350', 'ES 100'];

  vehicle: Vehicle;

  vehicleForm = this.fb.group({
    selectedYear: null,
    selectedMake: null, 
    selectedModel: null,
    odometer: null
  });

  constructor(private fb: UntypedFormBuilder, private dialogRef: MatDialogRef<CreateVehicleComponent>) { }

  ngOnInit(): void {
    const currentTime = new Date();
    this.year = currentTime.getFullYear();

    [...Array(20)].forEach((_, i) => {
      this.yearList.push(this.year - i);
    });

  }

  save():void {
    const form = this.vehicleForm.value;
    this.dialogRef.close(form);
  }

}
