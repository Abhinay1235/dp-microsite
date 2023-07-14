import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { ScheduleServiceComponent } from './schedule-service.component';
import { ScheduleServiceRoutingModule } from './schedule-service-routing-module';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { CreateVehicleModule } from '../components/create-vehicle/create-vehicle.module';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserLocationModule } from '../components/user-location/user-location.module';

@NgModule({
  declarations: [ScheduleServiceComponent],
  imports: [
    PageLayoutModule,
    CommonModule,
    MatButtonModule,
    ScheduleServiceRoutingModule,
    MatStepperModule,
    MatRadioModule,
    FormsModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatIconModule,
    MatGridListModule,
    CreateVehicleModule,
    UserLocationModule,
    MatCheckboxModule
  ]
})
export class ScheduleServiceModule {
}
