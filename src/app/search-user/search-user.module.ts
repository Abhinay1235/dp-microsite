import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {  MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SearchUserComponent } from './search-user.component';
import { SearchUserRoutingModule } from './search-user-routing-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchUserComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    SearchUserRoutingModule,
    MatCardModule,
    MatRippleModule,
    MatIconModule,
    FormsModule
  ]
})
export class SearchUserModule {
}
