import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../@vex/interfaces/vex-route.interface';
import { SearchUserComponent } from './search-user.component';


const routes: VexRoutes = [
  {
    path: '',
    component: SearchUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class SearchUserRoutingModule {
}
