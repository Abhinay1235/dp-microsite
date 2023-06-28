import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute } from '@angular/router';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
@Component({
  selector: 'vex-schedule-service',
  templateUrl: './schedule-service.component.html',
  styleUrls: ['./schedule-service.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms,
    scaleIn400ms,
    fadeInRight400ms
  ]
})


export class ScheduleServiceComponent implements OnInit {
  phoneNumber: string = '';
  selectedDate: Date | null;
  currentDate = new Date();
  selectedVehicle: any;
  activeState: boolean[]=[];
  servicesSelected: number = 0;
  availableSlots: string[] = [];
  transportOption: string;
  imgPath = '../../assets/img/services/';
  isReview:boolean = false;
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


  @ViewChild('stepper') stepper!: MatStepper;

  
  constructor(private route: ActivatedRoute) { }

  vehiclesList = [
    {name: "Lexus RX 350", mileage: "35674 miles", value:"lexus", selected: true},
    {name: "Audi A4", mileage:"99875 miles", value:"audi", selected: false}
  ];
  
  services = [
    {label:"Oil Chnage", value:"oilChange", isActive: false},
    {label:"Factory Service", value:"factoryService", isActive: false},
    {label:"Wheel Alignment", value:"wheelAlignment", isActive: false},
    {label:"Tire Rotation", value:"tireRotation", isActive: false},
    {label:"Brakes", value:"brakes", isActive: false},
    {label:"Engine Light On", value:"engineLightOn", isActive: false},
    {label:"Recall", value:"recall", isActive: false},
    {label:"Entertainment", value:"entertainment", isActive: false},
    {label:"Inspection", value:"inspection", isActive: false},
    {label:"Describe Issue", value:"describeIssue", isActive: false}
  ]

  transportOptions = [
    {label:"pick up my car", value:"pickup"},
    {label:"I will drop off", value:"dropOff"},
    {label:"I will wait at store", value:"waitAtStore"}
  ]

  timeSlotList = {
    10:['7:00','7:30','12:00', '10:00', '2:30','9:00','4:00'],
    1:['10:00', '2:30'],
    2:['9:00','4:00'],
  }

  reviewInfo = {
    firstname: this.userInfo.firstname,
    lastname: this.userInfo.lastname,
    email:this.userInfo.email,
    number:this.userInfo.number,
    vehicle:{name: "Lexus RX 350", mileage: "35674 miles", value:"lexus", primaryVehicle: true},
    services:[
      {label:"Tire Rotation", value:"tireRotation", isActive: false},
      {label:"Brakes", value:"brakes", isActive: false},
      {label:"Engine Light On", value:"engineLightOn", isActive: false},
      {label:"Recall", value:"recall", isActive: false}
    ],
    transportation:"I will wait at store",
    appointment:"July 03, 8:30 AM"
  }

  ngOnInit(): void {
    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber') || '';
    // Perform any additional actions with the phone number here
    console.log('Phone Number:', this.phoneNumber);
  }
  
  toggleClickState(index: number): void {
    this.activeState[index] = !this.activeState[index];
    if(this.activeState[index]) {
      this.servicesSelected++;
    }
    else {
      this.servicesSelected--;
    }
  }

  transportSelected(value: string): void {
    this.transportOption = value;
  }

  onDateChange() {
    const t = this.selectedDate.getDate();
    this.availableSlots = this.timeSlotList[t]?this.timeSlotList[t]:[];
  }

  toggleReview() {
    this.isReview = !this.isReview;
  }

  selectStep(index: number): void {
    this.toggleReview();
    this.stepper.selectedIndex = index;
  }

}
