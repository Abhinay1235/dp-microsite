import { Injectable } from '@angular/core';
import { StoreService } from '../interfaces/store-service.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreSettingsService {
    
    public StoreServices: StoreService[] = [];

    addService(newService: StoreService): void {
      this.StoreServices.push(newService);
    }
  
}