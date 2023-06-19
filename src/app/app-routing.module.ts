import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBillsComponent } from './components/all-bills/all-bills.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';
import { HomeComponent } from './components/home/home.component';

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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
