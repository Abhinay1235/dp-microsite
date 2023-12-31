import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../@vex/interfaces/vex-route.interface';
import { ScheduleServiceComponent } from './schedule-service.component';


const routes: VexRoutes = [
  {
    path: '',
    component: ScheduleServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ScheduleServiceRoutingModule {
}
