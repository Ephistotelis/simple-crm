import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardmainComponent } from './components/dashboardmain/dashboardmain.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { UsermainComponent } from './components/usermain/usermain.component';
import { MainpageComponent } from './mainpage.component';

const routes: Routes = [
  {path: 'mainpage', component: MainpageComponent, children: [
    {path: '', component: DashboardmainComponent},
    {path: 'usermain', component: UsermainComponent,},
    {path: 'usermain/user/:id', component: UserdetailComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
