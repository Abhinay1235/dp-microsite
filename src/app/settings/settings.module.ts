import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing-module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CreateServiceModule } from '../components/create-service/create-service.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    PageLayoutModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    CreateServiceModule
  ]
})
export class SettingsModule {
}
