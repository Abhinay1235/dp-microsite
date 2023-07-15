import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { CreateVehicleComponent } from '../components/create-vehicle/create-vehicle.component';
import { UserLocationComponent } from '../components/user-location/user-location.component';
import { userLocation } from '../interface/userLocation.interface';
import { Vehicle } from '../interface/vehicle.interface';
@Component({
  selector: 'vex-schedule-service',
  templateUrl: './schedule-service.component.html',
  styleUrls: ['./schedule-service.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms,
    fadeInRight400ms
  ]
})



export class ScheduleServiceComponent implements OnInit {
  hideStepper: boolean = true;
  phoneNumber: string = '';
  selectedDate:any;
  selectedVehicle: Vehicle;
  activeState: boolean[]=[];
  servicesSelected: number = 0;
  availableSlots: string[] = [];
  transportOption: string;
  showMoreDates: boolean = false;
  showMoreDatesSliceIndex = 10;
  imgPath = '../../assets/img/services/';
  isReview:boolean = false;
  pickupComments: string;
  dropOffComments: string;
  returnAddressCheck:boolean = true;
  pickupLocation: userLocation;
  dropOffLocation: userLocation;
  selectedTimeSlot: string;
  userInfo = {
    id:"123",
    firstname:"Abhinay",
    lastname:"B",
    email:"alpha@dp.com",
    number:"9998886666",
    vehicles:[
      {id:111, year:"2016", make:"Lexus", model:"RX 350", mileage: "35674", primaryVehicle: false},
      {id:222, year:"2007", make:"Audi", model:"A4", mileage: "99999", primaryVehicle: false}
    ],
    locations:[
      {id:1, address: '999 AlphaBeta Lane, Chesterfield, MO - 63017', city:'Chesterfield', state:'MO', zipcode: '63017', country:'USA', primaryLocation: false},
      {id:2, address: '777 Betagama st, Ofallon, MO - 99999', city:'Offalon', state:'MO', zipcode: '99999', country:'India',primaryLocation: false}
    ]
  }

  numDays = 7;
  currentDate: Date;
  dates: {date:number, day: number, selected:boolean, fullDate: Date, isDisabled: boolean}[];
  dtMonth: string = 'July';
  weekdays: string[] = ['S','M','T','W','T','F','S'];
  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



  @ViewChild('stepper') stepper!: MatStepper;

  
  constructor(private route: ActivatedRoute,private router: Router, private dialog: MatDialog) { }

  
  services = [
    {label:"Oil Chnage", value:"oilChange", cost: '49.99', isActive: false},
    {label:"Factory Service", value:"factoryService", cost: '356.99', isActive: false},
    {label:"Wheel Alignment", value:"wheelAlignment", cost: '49.99', isActive: false},
    {label:"Tire Rotation", value:"tireRotation", cost: '110.49', isActive: false},
    {label:"Brakes", value:"brakes", cost: '49.99', isActive: false},
    {label:"Engine Light On", value:"engineLightOn", cost: '80', isActive: false},
    {label:"Recall", value:"recall",cost: '49.99',  isActive: false},
    {label:"Entertainment", value:"entertainment", cost: '149.00', isActive: false},
    {label:"Inspection", value:"inspection",cost: '39.50',  isActive: false},
    {label:"Describe Issue", value:"describeIssue", cost: null, isActive: false}
  ]

  transportOptions = [
    {label:"pick up my car", value:"pickup"},
    {label:"I will drop off", value:"dropOff"},
    {label:"I will wait at store", value:"waitAtStore"}
  ]

  timeSlotList = {
    17:['07:00','07:30','12:00', '10:00', '02:30','09:00','04:00'],
    19:['10:00', '02:30'],
    20:['09:00 - 10:00','12:00 - 01:00', '01:30 - 02:30', '03:00 - 04:00'],
    21:['09:00 - 10:00','12:00 - 01:00', '01:30 - 02:30', '03:00 - 04:00','09:00 - 10:00','12:00 - 01:00', '01:30 - 02:30', '03:00 - 04:00','09:00 - 10:00','12:00 - 01:00', '01:30 - 02:30', '03:00 - 04:00','09:00 - 10:00','12:00 - 01:00', '01:30 - 02:30', '03:00 - 04:00','09:00 - 10:00','12:00 - 01:00', '01:30 - 02:30', '03:00 - 04:00'],
 }

  reviewInfo = {
    firstname: this.userInfo.firstname,
    lastname: this.userInfo.lastname,
    email:this.userInfo.email,
    number:this.userInfo.number,
    vehicle:{name: "Lexus RX 350", mileage: "35674 miles", value:"lexus", primaryVehicle: true},
    services:[
      {label:"Tire Rotation", value:"tireRotation",cost: '39.50', isActive: false},
      {label:"Brakes", value:"brakes", cost: '39.50',isActive: false},
      {label:"Engine Light On", value:"engineLightOn", cost: '39.50',isActive: false},
      {label:"Recall", value:"recall", cost: '39.50',isActive: false}
    ],
    transportation:"I will wait at store",
    appointment:"July 03, 8:30 AM"
  }

  search(): void {

    // Navigate to the SearchUser Component
    this.router.navigate(['/']);
  }

  onPickupLocationChange(event: any) {
    this.pickupLocation= event.value;
    if(this.returnAddressCheck){
      this.dropOffLocation = event.value;
    }
  }

  onVehicleChange(event: any) {
    this.selectedVehicle = event.value;
  }

  syncReturnAddress():void {
    if(this.returnAddressCheck) {
      this.dropOffLocation = this.pickupLocation;
    }
  }

  ngOnInit(): void {
    this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber') || '';
    // Perform any additional actions with the phone number here
  }

  verifyDate(date: Date) {
    const currentDate = new Date();
    const getDay = date.getDay();
    if((date.getDate() === currentDate.getDate()) && (date.getMonth()=== currentDate.getMonth()) && (date.getFullYear() === currentDate.getFullYear()))
      return false;
    else
      return ((date < currentDate) || (getDay === 0)|| (getDay === 6)) ? true : false;
 }

  getPreviousWeek(date:Date): void {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 7);
    this.populateDates(newDate);
  }

  getNextWeek(date: Date): void {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    this.populateDates(newDate);
  }

  populateInitialDates(date: Date): void {
    this.dates = [];
    let monthList = [];
    const day = new Date(date).getDay();

    const counter = (day > 0) ? (0 - day) : 0;
    for (let i = counter; i < (this.numDays + counter); i++) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + i);
      const isDisabled = this.verifyDate(newDate);
      this.dates.push({date:newDate.getDate(), day: newDate.getDay(), selected:false, fullDate:newDate, isDisabled: isDisabled });

      // Sort dates from sunday to Saturday
      this.dates = this.dates.sort((a, b) => a.day - b.day);

      //Find the month of the week and bind it to dtMonth to display
      if(monthList.indexOf(this.months[newDate.getMonth()]) < 0) {
        monthList.push(this.months[newDate.getMonth()]);
      }
    }

    this.dtMonth = monthList.join(` - `);
  }

  populateDates(date: Date): void {
    this.dates = [];
    let monthList = [];
    for (let i = 0; i < this.numDays; i++) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + i);
      const isDisabled = this.verifyDate(newDate);
      this.dates.push({date:newDate.getDate(), day: newDate.getDay(), selected:false, fullDate:newDate, isDisabled: isDisabled });

      // Sort dates from sunday to Saturday
      this.dates = this.dates.sort((a, b) => a.day - b.day);

      //Find the month of the week and bind it to dtMonth to display
      if(monthList.indexOf(this.months[newDate.getMonth()]) < 0) {
        monthList.push(this.months[newDate.getMonth()]);
      }
    }

    this.dtMonth = monthList.join(` - `);
  }
  
  toggleClickState(index: number): void {
    this.services[index].isActive = !this.services[index].isActive;
    if(this.services[index].isActive) {
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
    const t = new Date(this.selectedDate.fullDate).getDate();
    this.availableSlots = this.timeSlotList[t]?this.timeSlotList[t]:[];
  }

  toggleReview(id?: number) {
    this.isReview = !this.isReview;
    if(id>=0) {
      this.selectStep(id);
    }
  }

  initiateDates() {
    this.currentDate = this.selectedDate ? new Date(this.selectedDate.fullDate) : new Date();
    this.populateInitialDates(this.currentDate);
  }

  selectStep(index: number): void {
    this.stepper.selectedIndex = index;

    if(index === 3) {
      this.initiateDates();
    }
  }

  selectChip(chip: any): void {
    this.dates.forEach((c: any) => {
      c.selected = (c === chip);
    });
    this.selectedDate = chip; //new Date(chip.fullDate).toDateString() ;
    this.availableSlots = this.timeSlotList[chip.date]?this.timeSlotList[chip.date]:[];
    this.selectedTimeSlot = undefined;
  }

  timeSlotSelected(timeSlot: string):void {
    this.selectedTimeSlot = timeSlot;
  }

  openCreateVehicle() {
    const dialogRef = this.dialog.open(CreateVehicleComponent, {
      width: '80vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.year && result.make && result.model && result.mileage)
        this.userInfo.vehicles.push({id: this.userInfo.vehicles.length + 10, primaryVehicle: false, ...result})
    });
  }



  openLocation(action:string, location?: userLocation) {
    const dialogRef = this.dialog.open(UserLocationComponent, {
      width: '80vw',
      data: location || null
    });


    dialogRef.afterClosed().subscribe(result => {
      if((action === 'dropOff') && (result !== '')){
        this.dropOffLocation = {id: this.userInfo.locations.length, primaryLocation: false, ...result};
      }
      else if((action === 'addLocation') && (result !== '')){
        const newLocation = {id: this.userInfo.locations.length, primaryLocation: true, ...result};
        this.userInfo.locations.push(newLocation)
        this.onPickupLocationChange({value: newLocation})
      }
    });
  }

  toggleShowDates():void {
    this.showMoreDates = !this.showMoreDates;
  }

}
