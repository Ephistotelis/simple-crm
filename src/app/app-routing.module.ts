import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardmainComponent } from './dashboardmain/dashboardmain.component';
import { UsermainComponent } from './usermain/usermain.component';

const routes: Routes = [
  {path: '', component: DashboardmainComponent},
  {path: 'usermain', component: UsermainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
