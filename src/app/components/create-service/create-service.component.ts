import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'vex-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent {

  serviceName: string;
  serviceprice: string;
  imageName: string;


  constructor(private fb: UntypedFormBuilder, private dialogRef: MatDialogRef<CreateServiceComponent>) { }

  serviceForm = this.fb.group({
    serviceName: null,
    serviceprice: null, 
    imageName: null,
    selected: false,
    disabled: false
  });


  save():void {
    const form = this.serviceForm.value;
    this.dialogRef.close(form);
  }

}
