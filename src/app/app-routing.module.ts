import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBillsComponent } from './components/all-bills/all-bills.component';

const routes: Routes = [
  {
    path: 'all-bills',
    pathMatch: 'full',
    component: AllBillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
