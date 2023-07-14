import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../@vex/interfaces/vex-route.interface';
import { SettingsComponent } from './settings.component';


const routes: VexRoutes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class SettingsRoutingModule {
}
