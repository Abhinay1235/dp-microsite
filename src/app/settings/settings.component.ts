import { Component, OnInit } from '@angular/core';
import { ColorVariable, colorVariables } from 'src/@vex/components/config-panel/color-variables';
import { ConfigService } from 'src/@vex/config/config.service';
import { StoreSettingsService } from 'src/@vex/services/store-settings.service';
import { CreateServiceComponent } from '../components/create-service/create-service.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'vex-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  colorVariables: Record<string, ColorVariable> = colorVariables;
  selectedColor = 'blue';

  constructor(private configService: ConfigService,
              public storeSettingsService: StoreSettingsService,
              private dialog: MatDialog) { }


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

  openCreateService() {
    const serviceDialogRef = this.dialog.open(CreateServiceComponent, {
      width: '80vw'
    });

    serviceDialogRef.afterClosed().subscribe(result => {
      
      if(result.serviceName && result.servicePrice && result.imageName){
        this.storeSettingsService.addService({id: Math.floor(Math.random() * 20) + 10, label: result.serviceName, price: result.serviceprice, icon: result.imageName, selected: false, disabled: false});
      }
        
    });
  }
}
