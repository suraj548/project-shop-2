import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillsComponent } from './components/add-bills/add-bills.component';
import { AllBillsComponent } from './components/all-bills/all-bills.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    pathMatch: 'full' 
  },
 
  {
    path: 'all-bills',
    component: AllBillsComponent
  },
  {
    path: 'bill-details',
    component: BillDetailsComponent
  },
  {
    path: 'add-bill',
    component: AddBillsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
