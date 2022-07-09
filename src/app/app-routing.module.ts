import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardmainComponent } from './dashboardmain/dashboardmain.component';
import { TodomainComponent } from './todomain/todomain.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UsermainComponent } from './usermain/usermain.component';

const routes: Routes = [
  {path: '', component: DashboardmainComponent},
  {path: 'usermain', component: UsermainComponent},
  {path: 'user/:id', component: UserdetailComponent},
  {path: 'user/:id/todos', component: TodomainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
